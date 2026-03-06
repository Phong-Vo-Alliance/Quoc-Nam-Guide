const SESSION_KEY = 'guide_token'

/**
 * Read token from URL (?t=), save to sessionStorage, then remove it from URL.
 * Call once during app bootstrap.
 */
export function initTokenFromURL(): void {
  const params = new URLSearchParams(window.location.search)
  const token = params.get('t')

  if (!token) return

  sessionStorage.setItem(SESSION_KEY, token)

  params.delete('t')
  const remainingQuery = params.toString()
  const nextURL = `${window.location.pathname}${remainingQuery ? `?${remainingQuery}` : ''}${window.location.hash}`
  window.history.replaceState({}, '', nextURL)
}

export function getStoredToken(): string | null {
  return sessionStorage.getItem(SESSION_KEY)
}

export function clearToken(): void {
  sessionStorage.removeItem(SESSION_KEY)
}
