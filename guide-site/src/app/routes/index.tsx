import { createBrowserRouter } from 'react-router-dom'
import RootLayout from '@/app/layout/RootLayout'
import NoPermissionPage from '@/components/NoPermissionPage'

/**
 * Bộ định tuyến React Router v7.
 * Các trang nội dung (MDX) sẽ được import lazy ở đây sau.
 */
export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        lazy: () => import('@/pages/HomePage').then((m) => ({ Component: m.default })),
      },
      {
        path: 'quick-start',
        lazy: () => import('@/pages/QuickStartPage').then((m) => ({ Component: m.default })),
      },
      {
        path: 'web-portal',
        lazy: () => import('@/pages/WebPortalPage').then((m) => ({ Component: m.default })),
      },
      {
        path: 'mobile',
        lazy: () => import('@/pages/MobilePage').then((m) => ({ Component: m.default })),
      },
      {
        path: 'faq',
        lazy: () => import('@/pages/FaqPage').then((m) => ({ Component: m.default })),
      },
      // ——— Trưởng nhóm ———
      {
        path: 'leader/team',
        lazy: () => import('@/pages/leader/TeamPage').then((m) => ({ Component: m.default })),
      },
      {
        path: 'leader/reports',
        lazy: () => import('@/pages/leader/ReportsPage').then((m) => ({ Component: m.default })),
      },
      // ——— Admin ———
      {
        path: 'admin/portal',
        lazy: () => import('@/pages/admin/AdminPortalPage').then((m) => ({ Component: m.default })),
      },
      {
        path: 'admin/settings',
        lazy: () => import('@/pages/admin/AdminSettingsPage').then((m) => ({ Component: m.default })),
      },
      {
        path: 'admin/data',
        lazy: () => import('@/pages/admin/AdminDataPage').then((m) => ({ Component: m.default })),
      },
      // ——— Tìm kiếm ———
      {
        path: 'search',
        lazy: () => import('@/pages/SearchPage').then((m) => ({ Component: m.default })),
      },
      // ——— 404 / không có quyền ———
      {
        path: '*',
        element: <NoPermissionPage />,
      },
    ],
  },
])
