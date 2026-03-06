/**
 * Normalize Vietnamese text for search:
 * - remove diacritics
 * - lowercase
 * - collapse whitespace
 */
export function normalizeVN(input: string): string {
  return input
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/đ/g, 'd')
    .replace(/Đ/g, 'D')
    .toLowerCase()
    .replace(/\s+/g, ' ')
    .trim()
}
