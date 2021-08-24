
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    meta: {
      auth: true,
      title: '背包客棧自助旅遊論壇'
    },
    children: [
      {
        path: '',
        component: () => import('pages/Index.vue'),
        meta: { title: '背包客棧' }
      },
      {
        path: 'article/:id',
        name: 'article',
        component: () => import('pages/Article.vue'),
        meta: {
          title: '文章 | 背包客棧'
        }
      },
      {
        path: 'register',
        name: 'register',
        component: () => import('pages/Register.vue'),
        meta: { title: '註冊 | 背包客棧' }
      },
      {
        path: 'login',
        name: 'login',
        component: () => import('pages/Login.vue'),
        meta: { title: '登入 | 背包客棧' }
      },
      {
        path: 'myPage',
        name: 'myPage',
        component: () => import('pages/MyPage.vue'),
        meta: {
          login: true,
          title: '個人頁 | 背包客棧'
        }
      },
      {
        path: 'postArticle',
        name: 'postArticle',
        component: () => import('pages/PostArticle.vue'),
        meta: {
          login: true,
          title: '寫新文章 | 背包客棧'
        }
      },
      {
        path: 'setting',
        name: 'setting',
        component: () => import('pages/Setting.vue'),
        meta: {
          login: true,
          title: '設定 | 背包客棧'
        },
        children: [
          {
            path: '',
            name: 'personalFile',
            component: () => import('pages/PersonalFile.vue'),
            meta: {
              login: true,
              title: '編輯個人檔案 | 背包客棧'
            }
          },
          {
            path: 'account',
            name: 'account',
            component: () => import('pages/Account.vue'),
            meta: {
              login: true,
              title: '帳號設定 | 背包客棧'
            }
          }
        ]
      },
      {
        path: 'travelForum',
        name: 'travelForum',
        component: () => import('pages/TravelForum.vue'),
        meta: { title: '旅遊論壇 | 背包客棧' }
      },
      {
        path: 'discount',
        name: 'discount',
        component: () => import('pages/Discount.vue'),
        meta: { title: '優惠折扣 | 背包客棧' }
      },
      {
        path: 'myArticleFile',
        name: 'myArticleFile',
        component: () => import('pages/MyArticleFile.vue'),
        meta: {
          login: true,
          title: '所有文章 | 背包客棧'
        }
      }
    ]
  },
  {
    path: '/admin',
    component: () => import('layouts/AdminMainLayout.vue'),
    meta: {
      login: true,
      admin: true,
      title: '管理後台 | 背包客棧'
    },
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('pages/AdminHome.vue'),
        meta: {
          login: true,
          admin: true,
          title: '後臺首頁 | 背包客棧'
        }
      },
      {
        path: 'forums',
        name: 'forums',
        component: () => import('pages/AdminForums.vue'),
        meta: {
          login: true,
          admin: true,
          title: '後臺-論壇管理 | 背包客棧'
        }
      },
      {
        path: 'articles',
        name: 'adminArticles',
        component: () => import('pages/AdminArticles.vue'),
        meta: {
          login: true,
          admin: true,
          title: '後臺-文章管理 | 背包客棧'
        }
      },
      {
        path: 'users',
        name: 'users',
        component: () => import('pages/AdminUsers.vue'),
        meta: {
          login: true,
          admin: true,
          title: '後臺-會員管理 | 背包客棧'
        }
      }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
