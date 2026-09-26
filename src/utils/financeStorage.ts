import { FinanceTransaction } from '../types';

const STORAGE_KEY = 'hc_marina_finance_transactions_v2';

export const INITIAL_TRANSACTIONS: FinanceTransaction[] = [];

export async function fetchRemoteTransactions(): Promise<FinanceTransaction[]> {
  try {
    const res = await fetch('/api/finances', {
      headers: { 'Accept': 'application/json' },
    });
    if (res.ok) {
      const data = await res.json();
      if (Array.isArray(data)) {
        saveLocalTransactions(data);
        return data;
      }
    }
  } catch {}
  return loadLocalTransactions();
}

export function loadLocalTransactions(): FinanceTransaction[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed.filter(t => t && t.id && !t.id.startsWith('tx-00'));
  } catch {
    return [];
  }
}

export function saveLocalTransactions(txs: FinanceTransaction[]): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(txs));
  } catch {}
}

export async function syncSaveTransactions(txs: FinanceTransaction[]): Promise<void> {
  saveLocalTransactions(txs);
  try {
    await fetch('/api/finances', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(txs),
    });
  } catch {}
}

export function exportToCSV(txs: FinanceTransaction[]): void {
  const headers = ['ID', 'Date', 'Type', 'Amount ($)', 'Category', 'Description', 'Payment Method', 'Logged By', 'Notes'];
  const rows = txs.map(t => [
    t.id,
    t.date,
    t.type === 'income' ? 'INCOME (+)' : 'EXPENSE (-)',
    t.type === 'income' ? t.amount.toFixed(2) : `-${t.amount.toFixed(2)}`,
    `"${t.category.replace(/"/g, '""')}"`,
    `"${t.description.replace(/"/g, '""')}"`,
    `"${t.paymentMethod.replace(/"/g, '""')}"`,
    `"${t.loggedBy.replace(/"/g, '""')}"`,
    `"${(t.notes || '').replace(/"/g, '""')}"`,
  ]);

  const csvContent = [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.setAttribute('href', url);
  link.setAttribute('download', `hackclub_marina_finances_${new Date().toISOString().slice(0, 10)}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

export function exportToJSON(txs: FinanceTransaction[]): void {
  const jsonString = JSON.stringify(txs, null, 2);
  const blob = new Blob([jsonString], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.setAttribute('href', url);
  link.setAttribute('download', `hackclub_marina_finances_backup_${new Date().toISOString().slice(0, 10)}.json`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
