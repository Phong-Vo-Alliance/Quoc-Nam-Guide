import { RouterProvider } from 'react-router-dom'
import { router } from '@/app/routes'
import './App.css'

// Chỉ import trong dev/debug local — production build có thể tắt qua env
import DevAuthSwitcher from '@/dev/DevAuthSwitcher'

function shouldShowDevAuthSwitcher(): boolean {
  const forceEnabled = import.meta.env.VITE_SHOW_DEV_AUTH_SWITCHER === 'true'
  if (forceEnabled) return true

  if (typeof window !== 'undefined') {
    const host = window.location.hostname
    if (host === 'localhost' || host === '127.0.0.1' || host === '::1') return true
  }

  return import.meta.env.DEV
}

export default function App() {
  const showDevAuthSwitcher = shouldShowDevAuthSwitcher()

  return (
    <>
      <RouterProvider router={router} />
      {showDevAuthSwitcher && <DevAuthSwitcher />}
    </>
  )
}
