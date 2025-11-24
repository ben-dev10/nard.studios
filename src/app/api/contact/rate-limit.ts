// Simple in-memory rate limiter (resets on server restart)
const requestCounts = new Map<string, { count: number; resetTime: number }>();

export function checkRateLimit(ip: string): {
  allowed: boolean;
  resetTime?: Date;
} {
  const now = Date.now();
  const record = requestCounts.get(ip);
  const RATE_LIMIT = 2; // Max requests
  const WINDOW_MS = 3600000; // 1 hour in milliseconds

  // No record or time window expired - allow and create new record
  if (!record || now > record.resetTime) {
    requestCounts.set(ip, { count: 1, resetTime: now + WINDOW_MS });
    return { allowed: true };
  }

  // Check if limit exceeded
  if (record.count >= RATE_LIMIT) {
    return { allowed: false, resetTime: new Date(record.resetTime) };
  }

  // Increment count and allow
  record.count++;
  return { allowed: true };
}
