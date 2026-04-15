/**
 * Sanitize user input before passing to email templates.
 * Strips HTML tags, script content, and event handler attributes
 * to prevent stored XSS via Brevo template rendering.
 */
export function sanitizeHtml(input: string): string {
  return input
    .replace(/<script[\s\S]*?<\/script>/gi, '')
    .replace(/<iframe[\s\S]*?<\/iframe>/gi, '')
    .replace(/<style[\s\S]*?<\/style>/gi, '')
    .replace(/on\w+\s*=\s*["'][^"']*["']/gi, '')
    .replace(/<[^>]*>/g, '')
    .trim();
}

/**
 * Sanitize all string values in a record.
 */
export function sanitizeParams<T extends Record<string, unknown>>(params: T): T {
  const sanitized = { ...params };
  for (const key in sanitized) {
    const value = sanitized[key];
    if (typeof value === 'string') {
      (sanitized as Record<string, unknown>)[key] = sanitizeHtml(value);
    }
  }
  return sanitized;
}
