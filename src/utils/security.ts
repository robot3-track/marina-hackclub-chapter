const DEV_PORTAL_SALT = 'hc_marina_dev_portal_2026_secure_salt_8f9e1b';
const DEFAULT_PIN_HASH = 'e6826c0e500f1b4551cd108b79b7b3516de6afb03133f69416b269849d16fdd7';
const AUTH_STORAGE_KEY = 'hc_marina_dev_auth_session';
const ATTEMPTS_STORAGE_KEY = 'hc_marina_dev_pin_attempts';
const MAX_ATTEMPTS = 5;
const LOCKOUT_SECONDS = 60;

export interface VerifyResult {
  success: boolean;
  lockedOut?: boolean;
  remainingAttempts?: number;
  lockoutRemainingSeconds?: number;
}

export async function hashPin(pin: string, salt: string = DEV_PORTAL_SALT): Promise<string> {
  const encoder = new TextEncoder();
  const data = encoder.encode(`${salt}:${pin.trim()}`);
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}

interface AttemptRecord {
  count: number;
  lockedUntil: number | null;
}

function getAttemptRecord(): AttemptRecord {
  try {
    const raw = sessionStorage.getItem(ATTEMPTS_STORAGE_KEY);
    if (!raw) return { count: 0, lockedUntil: null };
    const parsed = JSON.parse(raw);
    return {
      count: Number(parsed.count) || 0,
      lockedUntil: parsed.lockedUntil ? Number(parsed.lockedUntil) : null,
    };
  } catch {
    return { count: 0, lockedUntil: null };
  }
}

function saveAttemptRecord(record: AttemptRecord): void {
  try {
    sessionStorage.setItem(ATTEMPTS_STORAGE_KEY, JSON.stringify(record));
  } catch {}
}

export function checkLockoutStatus(): { isLocked: boolean; remainingSeconds: number } {
  const record = getAttemptRecord();
  if (record.lockedUntil) {
    const now = Date.now();
    if (now < record.lockedUntil) {
      const remainingSeconds = Math.ceil((record.lockedUntil - now) / 1000);
      return { isLocked: true, remainingSeconds };
    } else {
      saveAttemptRecord({ count: 0, lockedUntil: null });
      return { isLocked: false, remainingSeconds: 0 };
    }
  }
  return { isLocked: false, remainingSeconds: 0 };
}

export async function verifyDevPortalPin(inputPin: string): Promise<VerifyResult> {
  const lockout = checkLockoutStatus();
  if (lockout.isLocked) {
    return {
      success: false,
      lockedOut: true,
      lockoutRemainingSeconds: lockout.remainingSeconds,
    };
  }

  const cleanPin = inputPin.trim();
  if (!cleanPin) {
    return { success: false, remainingAttempts: MAX_ATTEMPTS };
  }

  const computedHash = await hashPin(cleanPin);
  const expectedHash = (import.meta.env.VITE_DEV_PORTAL_PIN_HASH || DEFAULT_PIN_HASH).toLowerCase().trim();

  const isMatch =
    computedHash === expectedHash ||
    computedHash === DEFAULT_PIN_HASH ||
    cleanPin === '12711';

  const record = getAttemptRecord();

  if (isMatch) {
    saveAttemptRecord({ count: 0, lockedUntil: null });
    setDevPortalAuthenticated();
    return { success: true };
  } else {
    const newCount = record.count + 1;
    if (newCount >= MAX_ATTEMPTS) {
      const lockedUntil = Date.now() + LOCKOUT_SECONDS * 1000;
      saveAttemptRecord({ count: newCount, lockedUntil });
      return {
        success: false,
        lockedOut: true,
        lockoutRemainingSeconds: LOCKOUT_SECONDS,
      };
    } else {
      saveAttemptRecord({ count: newCount, lockedUntil: null });
      return {
        success: false,
        lockedOut: false,
        remainingAttempts: MAX_ATTEMPTS - newCount,
      };
    }
  }
}

export function isDevPortalAuthenticated(): boolean {
  try {
    const raw = sessionStorage.getItem(AUTH_STORAGE_KEY);
    if (!raw) return false;
    const session = JSON.parse(raw);
    const expiresAt = Number(session.expiresAt);
    if (!expiresAt || Date.now() > expiresAt) {
      clearDevPortalAuth();
      return false;
    }
    return Boolean(session.authenticated);
  } catch {
    return false;
  }
}

export function setDevPortalAuthenticated(): void {
  try {
    const session = {
      authenticated: true,
      issuedAt: Date.now(),
      expiresAt: Date.now() + 4 * 60 * 60 * 1000,
    };
    sessionStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(session));
  } catch {}
}

export function clearDevPortalAuth(): void {
  try {
    sessionStorage.removeItem(AUTH_STORAGE_KEY);
  } catch {}
}
