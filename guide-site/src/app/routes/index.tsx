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
        path: 'web/dang-nhap',
        lazy: () => import('@/pages/web/DangNhapLanDauPage').then((m) => ({ Component: m.default })),
      },
      {
        path: 'web/chat-nhom',
        lazy: () => import('@/pages/web/ChatNhomPage').then((m) => ({ Component: m.default })),
      },
      {
        path: 'web/dinh-kem-file-chat',
        lazy: () => import('@/pages/web/DinhKemFileChatPage').then((m) => ({ Component: m.default })),
      },
      {
        path: 'web/staff-tong-quan',
        lazy: () => import('@/pages/web/StaffTongQuanPage').then((m) => ({ Component: m.default })),
      },
      {
        path: 'web/staff-bat-dau-xu-ly',
        lazy: () => import('@/pages/web/StaffBatDauXuLyPage').then((m) => ({ Component: m.default })),
      },
      {
        path: 'web/staff-checklist',
        lazy: () => import('@/pages/web/StaffChecklistPage').then((m) => ({ Component: m.default })),
      },
      {
        path: 'web/staff-gui-cho-duyet',
        lazy: () => import('@/pages/web/StaffGuiChoDuyetPage').then((m) => ({ Component: m.default })),
      },
      {
        path: 'web/xem-task-hoan-tat',
        lazy: () => import('@/pages/web/XemTaskHoanTatPage').then((m) => ({ Component: m.default })),
      },
      {
        path: 'web/them-log-nhat-ky',
        lazy: () => import('@/pages/web/ThemLogNhatKyPage').then((m) => ({ Component: m.default })),
      },
      {
        path: 'web/gui-anh-video-nhat-ky',
        lazy: () => import('@/pages/web/GuiAnhVideoNhatKyPage').then((m) => ({ Component: m.default })),
      },
      {
        path: 'web/quick-messages',
        lazy: () => import('@/pages/web/QuickMessagesPage').then((m) => ({ Component: m.default })),
      },
      {
        path: 'web/bookmark-danh-dau',
        lazy: () => import('@/pages/web/BookmarkDanhDauPage').then((m) => ({ Component: m.default })),
      },
      {
        path: 'web/bookmark-xem-lai',
        lazy: () => import('@/pages/web/BookmarkXemLaiPage').then((m) => ({ Component: m.default })),
      },
      {
        path: 'web/todo-list',
        lazy: () => import('@/pages/web/TodoListPage').then((m) => ({ Component: m.default })),
      },
      {
        path: 'web/leader-tong-quan-cong-viec',
        lazy: () => import('@/pages/web/LeaderTongQuanCongViecPage').then((m) => ({ Component: m.default })),
      },
      {
        path: 'web/leader-tao-task',
        lazy: () => import('@/pages/web/LeaderTaoTaskPage').then((m) => ({ Component: m.default })),
      },
      {
        path: 'web/leader-giao-task',
        lazy: () => import('@/pages/web/LeaderGiaoTaskPage').then((m) => ({ Component: m.default })),
      },
      {
        path: 'web/leader-doi-nguoi-xu-ly',
        lazy: () => import('@/pages/web/LeaderDoiNguoiXuLyPage').then((m) => ({ Component: m.default })),
      },
      {
        path: 'web/leader-chuyen-trang-thai',
        lazy: () => import('@/pages/web/LeaderChuyenTrangThaiPage').then((m) => ({ Component: m.default })),
      },
      {
        path: 'web/leader-tiep-nhan-thong-tin',
        lazy: () => import('@/pages/web/LeaderTiepNhanThongTinPage').then((m) => ({ Component: m.default })),
      },
      {
        path: 'web/leader-duyet-hoan-tat',
        lazy: () => import('@/pages/web/LeaderDuyetHoanTatPage').then((m) => ({ Component: m.default })),
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
