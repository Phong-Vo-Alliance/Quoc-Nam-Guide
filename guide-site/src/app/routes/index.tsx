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
      // ——— Trang chủ ———
      {
        index: true,
        lazy: () => import('@/pages/HomePage').then((m) => ({ Component: m.default })),
      },

      // ——— Quick Start (/quick-start/*) ———
      {
        path: 'quick-start',
        lazy: () => import('@/pages/QuickStartPage').then((m) => ({ Component: m.default })),
      },
      {
        path: 'quick-start/:slug',
        lazy: () => import('@/pages/QuickStartPage').then((m) => ({ Component: m.default })),
      },

      // ——— Web Portal (/web/*) — khớp SITEMAP.md ———
      {
        path: 'web/chat-nhom',
        lazy: () => import('@/pages/web/ChatNhomPage').then((m) => ({ Component: m.default })),
      },
      {
        path: 'web/staff-tong-quan',
        lazy: () => import('@/pages/web/StaffTongQuanPage').then((m) => ({ Component: m.default })),
      },
      {
        path: 'web/mo-nhat-ky',
        lazy: () => import('@/pages/web/MoNhatKyPage').then((m) => ({ Component: m.default })),
      },
      {
        path: 'web/xem-ho-so-file',
        lazy: () => import('@/pages/web/XemHoSoFilePage').then((m) => ({ Component: m.default })),
      },
      {
        path: 'web/notification-banner',
        lazy: () => import('@/pages/web/NotificationBannerPage').then((m) => ({ Component: m.default })),
      },
      // Catch-all cho /web/* còn lại (stub)
      {
        path: 'web/*',
        lazy: () => import('@/pages/WebPortalPage').then((m) => ({ Component: m.default })),
      },

      // ——— Mobile (/mobile/*) ———
      {
        path: 'mobile',
        lazy: () => import('@/pages/MobilePage').then((m) => ({ Component: m.default })),
      },
      {
        path: 'mobile/*',
        lazy: () => import('@/pages/MobilePage').then((m) => ({ Component: m.default })),
      },

      // ——— Admin (/admin/*) ———
      {
        path: 'admin/tao-user',
        lazy: () => import('@/pages/admin/AdminPortalPage').then((m) => ({ Component: m.default })),
      },
      {
        path: 'admin/*',
        lazy: () => import('@/pages/admin/AdminPortalPage').then((m) => ({ Component: m.default })),
      },

      // ——— FAQ (/faq) ———
      {
        path: 'faq',
        lazy: () => import('@/pages/FaqPage').then((m) => ({ Component: m.default })),
      },
      {
        path: 'faq/:slug',
        lazy: () => import('@/pages/FaqPage').then((m) => ({ Component: m.default })),
      },

      // ——— Tìm kiếm (/search) ———
      {
        path: 'search',
        lazy: () => import('@/pages/SearchPage').then((m) => ({ Component: m.default })),
      },

      // ——— 404 ———
      {
        path: '*',
        element: <NoPermissionPage />,
      },
    ],
  },
])
