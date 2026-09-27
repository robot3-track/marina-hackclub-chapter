import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Icon from '@hackclub/icons';
import { FinanceTransaction, TransactionType, FinanceCategory } from '../types';
import {
  verifyDevPortalPin,
  isDevPortalAuthenticated,
  clearDevPortalAuth,
  checkLockoutStatus,
} from '../utils/security';
import {
  fetchRemoteTransactions,
  syncSaveTransactions,
  exportToCSV,
  exportToJSON,
} from '../utils/financeStorage';

const CATEGORIES: FinanceCategory[] = [
  'Grants & Sponsorships',
  'Hardware & Components',
  'Hackathon Fees & Travel',
  'Swag & Stickers',
  'Food & Meeting Snacks',
  'Software & Subscriptions',
  'Donations & Dues',
  'Miscellaneous',
];

const PAYMENT_METHODS = [
  'Hack Club Bank (HCB)',
  'Cash Box',
  'Officer Reimbursement',
  'ASB / School Account',
  'Other',
] as const;

export const DevPortal: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [pinInput, setPinInput] = useState<string>('');
  const [showPin, setShowPin] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [remainingAttempts, setRemainingAttempts] = useState<number | null>(null);
  const [lockoutTimer, setLockoutTimer] = useState<number>(0);
  const [isVerifying, setIsVerifying] = useState<boolean>(false);

  const [transactions, setTransactions] = useState<FinanceTransaction[]>([]);
  const [isLoadingData, setIsLoadingData] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [typeFilter, setTypeFilter] = useState<'all' | 'income' | 'expense'>('all');
  const [categoryFilter, setCategoryFilter] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'date-desc' | 'date-asc' | 'amount-desc' | 'amount-asc'>('date-desc');

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [editingTx, setEditingTx] = useState<FinanceTransaction | null>(null);
  const [deletingTx, setDeletingTx] = useState<FinanceTransaction | null>(null);

  const [modalType, setModalType] = useState<TransactionType>('income');
  const [modalAmount, setModalAmount] = useState<string>('');
  const [modalCategory, setModalCategory] = useState<FinanceCategory>('Grants & Sponsorships');
  const [modalDescription, setModalDescription] = useState<string>('');
  const [modalDate, setModalDate] = useState<string>(new Date().toISOString().slice(0, 10));
  const [modalPaymentMethod, setModalPaymentMethod] = useState<FinanceTransaction['paymentMethod']>('Hack Club Bank (HCB)');
  const [modalLoggedBy, setModalLoggedBy] = useState<string>('');
  const [modalNotes, setModalNotes] = useState<string>('');
  const [formError, setFormError] = useState<string>('');
  const [syncNotice, setSyncNotice] = useState<string>('');

  const loadData = async () => {
    setIsLoadingData(true);
    try {
      const data = await fetchRemoteTransactions();
      setTransactions(data);
    } catch {
      setTransactions([]);
    } finally {
      setIsLoadingData(false);
    }
  };

  useEffect(() => {
    const auth = isDevPortalAuthenticated();
    setIsAuthenticated(auth);
    if (auth) {
      loadData();
    }
    const lockout = checkLockoutStatus();
    if (lockout.isLocked) {
      setLockoutTimer(lockout.remainingSeconds);
    }
  }, []);

  useEffect(() => {
    if (lockoutTimer <= 0) return;
    const timer = setInterval(() => {
      setLockoutTimer(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [lockoutTimer]);

  const handlePinSubmit = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!pinInput.trim() || isVerifying || lockoutTimer > 0) return;

    setIsVerifying(true);
    setErrorMessage('');

    try {
      const result = await verifyDevPortalPin(pinInput);
      if (result.success) {
        setIsAuthenticated(true);
        await loadData();
        setPinInput('');
        setErrorMessage('');
      } else if (result.lockedOut) {
        setLockoutTimer(result.lockoutRemainingSeconds || 60);
        setErrorMessage('Too many failed attempts. Security lockout active.');
      } else {
        setRemainingAttempts(result.remainingAttempts ?? null);
        setErrorMessage(
          result.remainingAttempts !== undefined
            ? `Incorrect PIN. ${result.remainingAttempts} attempt${result.remainingAttempts === 1 ? '' : 's'} remaining.`
            : 'Incorrect PIN.'
        );
      }
    } catch {
      setErrorMessage('Verification failed. Try again.');
    } finally {
      setIsVerifying(false);
    }
  };

  const handleKeypadPress = (digit: string) => {
    if (lockoutTimer > 0) return;
    if (pinInput.length < 10) {
      setPinInput(prev => prev + digit);
    }
  };

  const handleKeypadBackspace = () => {
    setPinInput(prev => prev.slice(0, -1));
  };

  const handleKeypadClear = () => {
    setPinInput('');
    setErrorMessage('');
  };

  const handleLockPortal = () => {
    clearDevPortalAuth();
    setIsAuthenticated(false);
    setPinInput('');
    setErrorMessage('');
  };

  const openAddModal = (presetType: TransactionType = 'income') => {
    setEditingTx(null);
    setModalType(presetType);
    setModalAmount('');
    setModalCategory(presetType === 'income' ? 'Grants & Sponsorships' : 'Hardware & Components');
    setModalDescription('');
    setModalDate(new Date().toISOString().slice(0, 10));
    setModalPaymentMethod('Hack Club Bank (HCB)');
    setModalLoggedBy('Chapter Officer');
    setModalNotes('');
    setFormError('');
    setIsModalOpen(true);
  };

  const openEditModal = (tx: FinanceTransaction) => {
    setEditingTx(tx);
    setModalType(tx.type);
    setModalAmount(tx.amount.toString());
    setModalCategory(tx.category);
    setModalDescription(tx.description);
    setModalDate(tx.date);
    setModalPaymentMethod(tx.paymentMethod);
    setModalLoggedBy(tx.loggedBy);
    setModalNotes(tx.notes || '');
    setFormError('');
    setIsModalOpen(true);
  };

  const handleSaveTransaction = async (e: React.FormEvent) => {
    e.preventDefault();
    const amountNum = parseFloat(modalAmount);
    if (isNaN(amountNum) || amountNum <= 0) {
      setFormError('Please enter a valid positive dollar amount.');
      return;
    }
    if (!modalDescription.trim()) {
      setFormError('Please enter a description for this transaction.');
      return;
    }

    let updated: FinanceTransaction[];
    if (editingTx) {
      updated = transactions.map(t =>
        t.id === editingTx.id
          ? {
              ...t,
              type: modalType,
              amount: amountNum,
              category: modalCategory,
              description: modalDescription.trim(),
              date: modalDate,
              paymentMethod: modalPaymentMethod,
              loggedBy: modalLoggedBy.trim() || 'Chapter Officer',
              notes: modalNotes.trim(),
            }
          : t
      );
    } else {
      const newTx: FinanceTransaction = {
        id: `tx-${Date.now().toString(36)}-${Math.random().toString(36).substring(2, 6)}`,
        type: modalType,
        amount: amountNum,
        category: modalCategory,
        description: modalDescription.trim(),
        date: modalDate,
        paymentMethod: modalPaymentMethod,
        loggedBy: modalLoggedBy.trim() || 'Chapter Officer',
        notes: modalNotes.trim(),
        createdAt: Date.now(),
      };
      updated = [newTx, ...transactions];
    }

    setTransactions(updated);
    setIsModalOpen(false);
    await syncSaveTransactions(updated);

    setSyncNotice('Saved and synchronized');
    setTimeout(() => setSyncNotice(''), 3000);
  };

  const confirmDelete = async () => {
    if (!deletingTx) return;
    const updated = transactions.filter(t => t.id !== deletingTx.id);
    setTransactions(updated);
    setDeletingTx(null);
    await syncSaveTransactions(updated);

    setSyncNotice('Record deleted');
    setTimeout(() => setSyncNotice(''), 3000);
  };

  const stats = useMemo(() => {
    let totalIncome = 0;
    let totalExpense = 0;
    const categoryTotals: Record<string, number> = {};

    transactions.forEach(t => {
      if (t.type === 'income') {
        totalIncome += t.amount;
      } else {
        totalExpense += t.amount;
        categoryTotals[t.category] = (categoryTotals[t.category] || 0) + t.amount;
      }
    });

    const netBalance = totalIncome - totalExpense;
    return { totalIncome, totalExpense, netBalance, categoryTotals };
  }, [transactions]);

  const filteredTransactions = useMemo(() => {
    return transactions
      .filter(t => {
        if (typeFilter !== 'all' && t.type !== typeFilter) return false;
        if (categoryFilter !== 'all' && t.category !== categoryFilter) return false;
        if (searchQuery.trim()) {
          const q = searchQuery.toLowerCase();
          const matchDesc = t.description.toLowerCase().includes(q);
          const matchOfficer = t.loggedBy.toLowerCase().includes(q);
          const matchCat = t.category.toLowerCase().includes(q);
          const matchAccount = t.paymentMethod.toLowerCase().includes(q);
          const matchNotes = (t.notes || '').toLowerCase().includes(q);
          if (!matchDesc && !matchOfficer && !matchCat && !matchAccount && !matchNotes) return false;
        }
        return true;
      })
      .sort((a, b) => {
        if (sortBy === 'date-desc') return new Date(b.date).getTime() - new Date(a.date).getTime();
        if (sortBy === 'date-asc') return new Date(a.date).getTime() - new Date(b.date).getTime();
        if (sortBy === 'amount-desc') return b.amount - a.amount;
        if (sortBy === 'amount-asc') return a.amount - b.amount;
        return 0;
      });
  }, [transactions, typeFilter, categoryFilter, searchQuery, sortBy]);

  if (!isAuthenticated) {
    return (
      <section className="relative overflow-hidden py-12 sm:py-20 bg-[#17171d] text-white">
        <div className="relative max-w-md mx-auto px-4 sm:px-6 space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center space-y-2"
          >
            <div className="inline-flex items-center justify-center w-12 h-12 bg-[#1e1e24] border border-[#2d2d38] text-[#ec3750]">
              <Icon glyph="private" size={24} />
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
              Developer & Treasury Portal
            </h2>
            <p className="text-sm text-white font-medium">
              Marina Chapter internal finance management under 501(c)(3) Hack Club Bank fiscal sponsorship. Enter officer PIN to continue.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-[#1e1e24] border border-[#2d2d38] p-6 space-y-5"
          >
            <form onSubmit={handlePinSubmit} className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs sm:text-sm">
                  <span className="font-bold text-white">Officer PIN</span>
                  <button
                    type="button"
                    onClick={() => setShowPin(!showPin)}
                    className="text-white hover:text-[#f1c40f] flex items-center gap-1 cursor-pointer transition-colors"
                  >
                    {showPin ? <Icon glyph="view-hide" size={14} /> : <Icon glyph="view" size={14} />}
                    <span className="text-xs">{showPin ? 'Hide' : 'Show'}</span>
                  </button>
                </div>

                <div className="relative">
                  <input
                    type={showPin ? 'text' : 'password'}
                    value={pinInput}
                    onChange={e => setPinInput(e.target.value)}
                    placeholder="•••••"
                    maxLength={10}
                    disabled={lockoutTimer > 0}
                    autoFocus
                    className="w-full text-center text-2xl tracking-[0.35em] font-mono py-3 px-4 bg-[#17171d] border border-[#2d2d38] text-white focus:outline-none focus:border-[#ec3750] transition-all disabled:opacity-50"
                  />
                </div>
              </div>

              {errorMessage && (
                <div className="p-3 bg-[#ec3750]/10 border border-[#ec3750]/40 text-xs text-[#ff8c37] flex items-center gap-2">
                  <Icon glyph="important" size={16} className="text-[#ec3750] flex-shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              {lockoutTimer > 0 && (
                <div className="p-3 bg-[#f1c40f]/10 border border-[#f1c40f]/40 text-xs text-[#f1c40f] text-center font-mono font-bold">
                  Lockout active: {lockoutTimer}s remaining
                </div>
              )}

              <button
                type="submit"
                disabled={isVerifying || !pinInput.trim() || lockoutTimer > 0}
                className="w-full py-2.5 px-4 font-bold text-xs uppercase tracking-wider bg-[#ec3750] hover:bg-[#d62b42] disabled:opacity-50 text-white flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                {isVerifying ? (
                  <Icon glyph="view-reload" size={14} className="animate-spin" />
                ) : (
                  <Icon glyph="private-unlocked" size={14} />
                )}
                <span>Unlock Portal</span>
              </button>
            </form>

            <div className="grid grid-cols-3 gap-2 pt-2 border-t border-[#252429]">
              {['1', '2', '3', '4', '5', '6', '7', '8', '9'].map(num => (
                <button
                  key={num}
                  type="button"
                  onClick={() => handleKeypadPress(num)}
                  disabled={lockoutTimer > 0}
                  className="py-2.5 bg-[#17171d] hover:bg-[#252429] border border-[#2d2d38] text-white font-mono text-sm font-bold transition-colors cursor-pointer disabled:opacity-40"
                >
                  {num}
                </button>
              ))}
              <button
                type="button"
                onClick={handleKeypadClear}
                disabled={lockoutTimer > 0}
                className="py-2.5 bg-[#17171d] hover:bg-[#252429] border border-[#2d2d38] text-white hover:text-[#ec3750] text-xs font-bold transition-colors cursor-pointer disabled:opacity-40"
              >
                Clear
              </button>
              <button
                type="button"
                onClick={() => handleKeypadPress('0')}
                disabled={lockoutTimer > 0}
                className="py-2.5 bg-[#17171d] hover:bg-[#252429] border border-[#2d2d38] text-white font-mono text-sm font-bold transition-colors cursor-pointer disabled:opacity-40"
              >
                0
              </button>
              <button
                type="button"
                onClick={handleKeypadBackspace}
                disabled={lockoutTimer > 0}
                className="py-2.5 bg-[#17171d] hover:bg-[#252429] border border-[#2d2d38] text-white hover:text-[#f1c40f] text-xs font-bold transition-colors cursor-pointer disabled:opacity-40"
              >
                Del
              </button>
            </div>

            <div className="pt-3 border-t border-[#252429] space-y-1.5 text-xs text-white">
              <div className="flex items-center gap-2">
                <Icon glyph="badge-check" size={16} className="text-[#33d6a6] flex-shrink-0" />
                <span>Salted SHA-256 Hash Verification</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon glyph="badge" size={16} className="text-[#338eda] flex-shrink-0" />
                <span>Rate-Limit Protection</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative overflow-hidden py-8 sm:py-12 bg-[#17171d] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-5 bg-[#1e1e24] border border-[#2d2d38]">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs text-white">
              <span className="w-2 h-2 bg-[#33d6a6] inline-block" />
              <span className="font-mono uppercase tracking-wider text-[#33d6a6] font-bold">Chapter Ledger</span>
              <span>•</span>
              <span className="text-white">Shared Server Storage</span>
              {syncNotice && (
                <span className="text-[#33d6a6] font-semibold ml-2">{syncNotice}</span>
              )}
            </div>
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
              Finance & Spending Management
            </h1>
            <p className="text-sm text-white font-medium leading-relaxed">
              Live ledger for chapter transactions, money added, and expenses under 501(c)(3) fiscal sponsorship via Hack Club Bank (The Hack Foundation, EIN: 81-2908499).
            </p>
          </div>

          <div className="flex items-center gap-2 flex-wrap">
            <button
              onClick={() => openAddModal('income')}
              className="px-3.5 py-2 text-xs sm:text-sm font-bold bg-[#33d6a6] hover:bg-[#28b38a] text-[#121217] flex items-center gap-1.5 transition-all cursor-pointer"
            >
              <Icon glyph="plus" size={16} />
              <span>Add Money (+)</span>
            </button>

            <button
              onClick={() => openAddModal('expense')}
              className="px-3.5 py-2 text-xs sm:text-sm font-bold bg-[#ec3750] hover:bg-[#d62b42] text-white flex items-center gap-1.5 transition-all cursor-pointer"
            >
              <Icon glyph="minus" size={16} />
              <span>Subtract Money (-)</span>
            </button>

            <button
              onClick={loadData}
              disabled={isLoadingData}
              className="px-3 py-2 text-xs sm:text-sm font-bold bg-[#252429] hover:bg-[#2d2d38] text-white border border-[#3d3d4a] flex items-center gap-1.5 transition-colors cursor-pointer"
              title="Refresh ledger from server"
            >
              <Icon glyph="view-reload" size={14} className={isLoadingData ? 'animate-spin' : ''} />
              <span className="hidden sm:inline">Refresh</span>
            </button>

            <button
              onClick={() => exportToCSV(transactions)}
              disabled={transactions.length === 0}
              className="px-3 py-2 text-xs sm:text-sm font-bold bg-[#252429] hover:bg-[#2d2d38] disabled:opacity-40 text-white border border-[#3d3d4a] flex items-center gap-1.5 transition-colors cursor-pointer"
              title="Download CSV file"
            >
              <Icon glyph="docs" size={16} className="text-[#338eda]" />
              <span className="hidden sm:inline">Export CSV</span>
            </button>

            <button
              onClick={handleLockPortal}
              className="px-3 py-2 text-xs sm:text-sm font-bold bg-[#252429] hover:bg-[#ec3750]/20 text-[#ec3750] border border-[#ec3750]/40 flex items-center gap-1.5 transition-colors cursor-pointer"
              title="Lock dev portal"
            >
              <Icon glyph="private" size={14} />
              <span>Lock</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          <div className="p-4 bg-[#1e1e24] border border-[#2d2d38] space-y-1">
            <div className="flex items-center justify-between text-white text-xs font-mono uppercase tracking-wider font-bold">
              <span>Treasury Balance</span>
              <Icon glyph="purse" size={16} className="text-[#f1c40f]" />
            </div>
            <div className={`text-2xl font-black font-mono ${stats.netBalance >= 0 ? 'text-[#33d6a6]' : 'text-[#ec3750]'}`}>
              ${stats.netBalance.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </div>
            <div className="text-xs text-white font-medium">
              Net Available Chapter Balance
            </div>
          </div>

          <div className="p-4 bg-[#1e1e24] border border-[#2d2d38] space-y-1">
            <div className="flex items-center justify-between text-[#33d6a6] text-xs font-mono uppercase tracking-wider font-bold">
              <span>Total Money Added</span>
              <Icon glyph="up" size={16} className="text-[#33d6a6]" />
            </div>
            <div className="text-2xl font-black font-mono text-[#33d6a6]">
              +${stats.totalIncome.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </div>
            <div className="text-xs text-white font-medium">
              Total Inflows Logged
            </div>
          </div>

          <div className="p-4 bg-[#1e1e24] border border-[#2d2d38] space-y-1">
            <div className="flex items-center justify-between text-[#ec3750] text-xs font-mono uppercase tracking-wider font-bold">
              <span>Total Spent</span>
              <Icon glyph="down" size={16} className="text-[#ec3750]" />
            </div>
            <div className="text-2xl font-black font-mono text-[#ec3750]">
              -${stats.totalExpense.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </div>
            <div className="text-xs text-white font-medium">
              Total Outflows Logged
            </div>
          </div>

          <div className="p-4 bg-[#1e1e24] border border-[#2d2d38] space-y-1">
            <div className="flex items-center justify-between text-[#338eda] text-xs font-mono uppercase tracking-wider font-bold">
              <span>Total Records</span>
              <Icon glyph="checkmark" size={16} className="text-[#338eda]" />
            </div>
            <div className="text-2xl font-black font-mono text-white">
              {transactions.length}
            </div>
            <div className="text-xs text-white font-medium">
              Saved Entries in Database
            </div>
          </div>
        </div>

        {transactions.length > 0 && stats.totalExpense > 0 && (
          <div className="p-4 bg-[#1e1e24] border border-[#2d2d38] space-y-3">
            <div className="flex items-center justify-between text-xs font-mono uppercase tracking-wider text-white">
              <span className="font-bold">Spending Breakdown by Category</span>
              <span className="font-semibold text-[#f1c40f]">Total Expenses: ${stats.totalExpense.toFixed(2)}</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 pt-1">
              {CATEGORIES.filter(cat => (stats.categoryTotals[cat] || 0) > 0).map(cat => {
                const spent = stats.categoryTotals[cat] || 0;
                const pct = (spent / stats.totalExpense) * 100;
                return (
                  <div key={cat} className="p-2.5 bg-[#17171d] border border-[#252429] space-y-1">
                    <div className="flex items-center justify-between text-xs">
                      <span className="truncate text-white font-medium" title={cat}>{cat}</span>
                      <span className="font-mono font-bold text-white">${spent.toFixed(2)}</span>
                    </div>
                    <div className="w-full bg-[#252429] h-1.5 overflow-hidden">
                      <div
                        className="h-full bg-[#ec3750] transition-all duration-300"
                        style={{ width: `${Math.min(pct, 100)}%` }}
                      />
                    </div>
                    <div className="text-xs text-right text-white font-mono font-bold">
                      {pct.toFixed(0)}%
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        <div className="p-5 bg-[#1e1e24] border border-[#2d2d38] space-y-4">
          
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
            <div className="relative flex-1 max-w-md">
              <Icon glyph="search" size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-white" />
              <input
                type="text"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                placeholder="Search memo, officer, account, notes..."
                className="w-full pl-9 pr-3 py-2 text-xs sm:text-sm bg-[#17171d] border border-[#2d2d38] text-white placeholder-white/70 focus:outline-none focus:border-[#ec3750] transition-colors"
              />
            </div>

            <div className="flex items-center gap-2 flex-wrap">
              <div className="flex items-center bg-[#17171d] border border-[#2d2d38] p-0.5 text-xs">
                <button
                  onClick={() => setTypeFilter('all')}
                  className={`px-3 py-1 font-bold text-xs transition-colors cursor-pointer ${
                    typeFilter === 'all' ? 'bg-[#252429] text-white' : 'text-white hover:text-[#ec3750]'
                  }`}
                >
                  All
                </button>
                <button
                  onClick={() => setTypeFilter('income')}
                  className={`px-3 py-1 font-bold text-xs transition-colors cursor-pointer ${
                    typeFilter === 'income' ? 'bg-[#33d6a6] text-[#121217]' : 'text-[#33d6a6] hover:text-white'
                  }`}
                >
                  + Added
                </button>
                <button
                  onClick={() => setTypeFilter('expense')}
                  className={`px-3 py-1 font-bold text-xs transition-colors cursor-pointer ${
                    typeFilter === 'expense' ? 'bg-[#ec3750] text-white' : 'text-[#ec3750] hover:text-white'
                  }`}
                >
                  - Spent
                </button>
              </div>

              <select
                value={categoryFilter}
                onChange={e => setCategoryFilter(e.target.value)}
                className="py-1.5 px-2.5 bg-[#17171d] border border-[#2d2d38] text-xs sm:text-sm text-white focus:outline-none focus:border-[#ec3750] cursor-pointer"
              >
                <option value="all">All Categories</option>
                {CATEGORIES.map(c => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>

              <select
                value={sortBy}
                onChange={e => setSortBy(e.target.value as any)}
                className="py-1.5 px-2.5 bg-[#17171d] border border-[#2d2d38] text-xs sm:text-sm text-white focus:outline-none focus:border-[#ec3750] cursor-pointer"
              >
                <option value="date-desc">Newest First</option>
                <option value="date-asc">Oldest First</option>
                <option value="amount-desc">Highest Amount</option>
                <option value="amount-asc">Lowest Amount</option>
              </select>
            </div>
          </div>

          <div className="overflow-x-auto border border-[#2d2d38]">
            <table className="w-full text-left text-xs sm:text-sm border-collapse">
              <thead>
                <tr className="bg-[#17171d] text-white border-b border-[#2d2d38] uppercase tracking-wider font-mono text-xs">
                  <th className="py-2.5 px-3">Date</th>
                  <th className="py-2.5 px-3">Type</th>
                  <th className="py-2.5 px-3">Amount</th>
                  <th className="py-2.5 px-3">Category</th>
                  <th className="py-2.5 px-3">Description & Memo</th>
                  <th className="py-2.5 px-3">Account / Source</th>
                  <th className="py-2.5 px-3">Logged By</th>
                  <th className="py-2.5 px-3 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#252429]">
                {filteredTransactions.length === 0 ? (
                  <tr>
                    <td colSpan={8} className="py-12 text-center text-white">
                      {transactions.length === 0 ? (
                        <div className="space-y-3 max-w-sm mx-auto">
                          <p className="text-sm text-white font-bold">Ledger is empty</p>
                          <p className="text-xs sm:text-sm text-white font-medium">
                            No transactions recorded yet. Click below to log your first real chapter entry.
                          </p>
                          <div className="flex items-center justify-center gap-2 pt-2">
                            <button
                              onClick={() => openAddModal('income')}
                              className="px-3 py-1.5 text-xs sm:text-sm font-bold bg-[#33d6a6] text-[#121217] cursor-pointer"
                            >
                              + Add Money
                            </button>
                            <button
                              onClick={() => openAddModal('expense')}
                              className="px-3 py-1.5 text-xs sm:text-sm font-bold bg-[#ec3750] text-white cursor-pointer"
                            >
                              - Subtract Money
                            </button>
                          </div>
                        </div>
                      ) : (
                        'No transactions match the current search filters.'
                      )}
                    </td>
                  </tr>
                ) : (
                  filteredTransactions.map(tx => (
                    <tr key={tx.id} className="hover:bg-[#252429]/40 transition-colors">
                      <td className="py-2.5 px-3 font-mono text-white whitespace-nowrap text-xs sm:text-sm">
                        {tx.date}
                      </td>

                      <td className="py-2.5 px-3 whitespace-nowrap font-mono text-xs font-bold">
                        {tx.type === 'income' ? (
                          <span className="text-[#33d6a6]">+ ADD</span>
                        ) : (
                          <span className="text-[#ec3750]">- SPEND</span>
                        )}
                      </td>

                      <td className="py-2.5 px-3 whitespace-nowrap">
                        <span
                          className={`font-mono font-bold text-sm ${
                            tx.type === 'income' ? 'text-[#33d6a6]' : 'text-[#ec3750]'
                          }`}
                        >
                          {tx.type === 'income' ? '+' : '-'}${tx.amount.toFixed(2)}
                        </span>
                      </td>

                      <td className="py-2.5 px-3 whitespace-nowrap text-xs sm:text-sm text-white">
                        {tx.category}
                      </td>

                      <td className="py-2.5 px-3 max-w-xs">
                        <div className="font-semibold text-white truncate text-xs sm:text-sm" title={tx.description}>
                          {tx.description}
                        </div>
                        {tx.notes && (
                          <div className="text-xs text-white truncate" title={tx.notes}>
                            {tx.notes}
                          </div>
                        )}
                      </td>

                      <td className="py-2.5 px-3 whitespace-nowrap text-xs sm:text-sm text-white">
                        {tx.paymentMethod}
                      </td>

                      <td className="py-2.5 px-3 whitespace-nowrap text-xs sm:text-sm text-white">
                        {tx.loggedBy}
                      </td>

                      <td className="py-2.5 px-3 text-right whitespace-nowrap">
                        <div className="inline-flex items-center gap-1">
                          <button
                            onClick={() => openEditModal(tx)}
                            className="p-1.5 hover:bg-[#2d2d38] text-white hover:text-[#338eda] transition-colors cursor-pointer"
                            title="Edit Record"
                          >
                            <Icon glyph="edit" size={14} />
                          </button>
                          <button
                            onClick={() => setDeletingTx(tx)}
                            className="p-1.5 hover:bg-[#ec3750]/20 text-white hover:text-[#ec3750] transition-colors cursor-pointer"
                            title="Delete Record"
                          >
                            <Icon glyph="delete" size={14} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white pt-1">
            <div>
              {filteredTransactions.length} of {transactions.length} transactions shown
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => exportToJSON(transactions)}
                disabled={transactions.length === 0}
                className="text-white hover:text-[#33d6a6] disabled:opacity-40 transition-colors cursor-pointer flex items-center gap-1"
              >
                <Icon glyph="download" size={14} />
                <span>Backup JSON</span>
              </button>
            </div>
          </div>

        </div>

      </div>

      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              className="relative w-full max-w-lg bg-[#1e1e24] border border-[#2d2d38] p-6 space-y-4"
            >
              <div className="flex items-center justify-between border-b border-[#252429] pb-3">
                <h3 className="text-base font-bold text-white uppercase tracking-wider font-mono">
                  {editingTx ? 'Edit Transaction' : 'New Transaction Entry'}
                </h3>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="p-1 hover:bg-[#252429] text-white hover:text-[#ec3750] transition-colors cursor-pointer"
                >
                  <Icon glyph="view-close" size={16} />
                </button>
              </div>

              <form onSubmit={handleSaveTransaction} className="space-y-4">
                
                <div className="space-y-1">
                  <label className="text-xs sm:text-sm font-mono uppercase tracking-wider text-white font-bold block">Transaction Type</label>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => setModalType('income')}
                      className={`py-2 px-3 font-bold text-xs sm:text-sm flex items-center justify-center gap-1.5 border transition-all cursor-pointer ${
                        modalType === 'income'
                          ? 'bg-[#33d6a6] text-[#121217] border-[#33d6a6]'
                          : 'bg-[#17171d] text-white border-[#2d2d38] hover:bg-[#252429]'
                      }`}
                    >
                      <Icon glyph="plus" size={16} />
                      <span>Add Money (+)</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setModalType('expense')}
                      className={`py-2 px-3 font-bold text-xs sm:text-sm flex items-center justify-center gap-1.5 border transition-all cursor-pointer ${
                        modalType === 'expense'
                          ? 'bg-[#ec3750] text-white border-[#ec3750]'
                          : 'bg-[#17171d] text-white border-[#2d2d38] hover:bg-[#252429]'
                      }`}
                    >
                      <Icon glyph="minus" size={16} />
                      <span>Subtract Money (-)</span>
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <label className="text-xs sm:text-sm font-mono uppercase tracking-wider text-white font-bold block">Amount ($ USD) *</label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-white font-mono font-bold">$</span>
                      <input
                        type="number"
                        step="0.01"
                        min="0.01"
                        required
                        value={modalAmount}
                        onChange={e => setModalAmount(e.target.value)}
                        placeholder="0.00"
                        className="w-full pl-7 pr-3 py-2 text-xs sm:text-sm bg-[#17171d] border border-[#2d2d38] text-white placeholder-white/60 font-mono focus:outline-none focus:border-[#ec3750]"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs sm:text-sm font-mono uppercase tracking-wider text-white font-bold block">Date *</label>
                    <input
                      type="date"
                      required
                      value={modalDate}
                      onChange={e => setModalDate(e.target.value)}
                      className="w-full px-3 py-2 text-xs sm:text-sm bg-[#17171d] border border-[#2d2d38] text-white focus:outline-none focus:border-[#ec3750]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <label className="text-xs sm:text-sm font-mono uppercase tracking-wider text-white font-bold block">Category</label>
                    <select
                      value={modalCategory}
                      onChange={e => setModalCategory(e.target.value as FinanceCategory)}
                      className="w-full px-3 py-2 text-xs sm:text-sm bg-[#17171d] border border-[#2d2d38] text-white focus:outline-none focus:border-[#ec3750]"
                    >
                      {CATEGORIES.map(c => (
                        <option key={c} value={c}>{c}</option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs sm:text-sm font-mono uppercase tracking-wider text-white font-bold block">Account / Payment Method</label>
                    <select
                      value={modalPaymentMethod}
                      onChange={e => setModalPaymentMethod(e.target.value as any)}
                      className="w-full px-3 py-2 text-xs sm:text-sm bg-[#17171d] border border-[#2d2d38] text-white focus:outline-none focus:border-[#ec3750]"
                    >
                      {PAYMENT_METHODS.map(m => (
                        <option key={m} value={m}>{m}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs sm:text-sm font-mono uppercase tracking-wider text-white font-bold block">Description / Item Memo *</label>
                  <input
                    type="text"
                    required
                    value={modalDescription}
                    onChange={e => setModalDescription(e.target.value)}
                    placeholder="e.g. Domain renewal, Pizza for meeting, Grant funding"
                    className="w-full px-3 py-2 text-xs sm:text-sm bg-[#17171d] border border-[#2d2d38] text-white placeholder-white/60 focus:outline-none focus:border-[#ec3750]"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs sm:text-sm font-mono uppercase tracking-wider text-white font-bold block">Logged By (Officer)</label>
                  <input
                    type="text"
                    value={modalLoggedBy}
                    onChange={e => setModalLoggedBy(e.target.value)}
                    placeholder="e.g. President, Treasurer, or Name"
                    className="w-full px-3 py-2 text-xs sm:text-sm bg-[#17171d] border border-[#2d2d38] text-white placeholder-white/60 focus:outline-none focus:border-[#ec3750]"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs sm:text-sm font-mono uppercase tracking-wider text-white font-bold block">Notes / Reference (Optional)</label>
                  <textarea
                    rows={2}
                    value={modalNotes}
                    onChange={e => setModalNotes(e.target.value)}
                    placeholder="Receipt details or notes"
                    className="w-full px-3 py-2 text-xs sm:text-sm bg-[#17171d] border border-[#2d2d38] text-white placeholder-white/60 focus:outline-none focus:border-[#ec3750] resize-none"
                  />
                </div>

                {formError && (
                  <div className="text-xs sm:text-sm text-[#ec3750] font-bold">
                    {formError}
                  </div>
                )}

                <div className="flex items-center justify-end gap-2 pt-3 border-t border-[#252429]">
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="px-4 py-2 text-xs sm:text-sm font-bold text-white hover:bg-[#252429] border border-[#2d2d38] transition-colors cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 text-xs sm:text-sm font-bold uppercase tracking-wider bg-[#ec3750] hover:bg-[#d62b42] text-white transition-all cursor-pointer"
                  >
                    {editingTx ? 'Update Entry' : 'Save Entry'}
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}

        {deletingTx && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              className="relative w-full max-w-md bg-[#1e1e24] border border-[#ec3750]/40 p-6 space-y-4"
            >
              <h3 className="text-sm sm:text-base font-bold text-white uppercase tracking-wider font-mono">
                Confirm Record Deletion
              </h3>
              <p className="text-xs sm:text-sm text-white font-medium">
                Are you sure you want to delete this transaction?
              </p>
              <div className="p-3 bg-[#17171d] border border-[#252429] text-xs sm:text-sm space-y-1">
                <div className="font-bold text-white">{deletingTx.description}</div>
                <div className="font-mono text-white font-semibold">
                  {deletingTx.date} • {deletingTx.type === 'income' ? '+' : '-'}${deletingTx.amount.toFixed(2)}
                </div>
              </div>

              <div className="flex items-center justify-end gap-2 pt-2 border-t border-[#252429]">
                <button
                  type="button"
                  onClick={() => setDeletingTx(null)}
                  className="px-4 py-2 text-xs sm:text-sm font-bold text-white hover:bg-[#252429] border border-[#2d2d38] transition-colors cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={confirmDelete}
                  className="px-4 py-2 text-xs sm:text-sm font-bold bg-[#ec3750] hover:bg-[#d62b42] text-white transition-all cursor-pointer"
                >
                  Delete Transaction
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
