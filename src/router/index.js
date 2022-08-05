import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true,
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true,
  },

  {
    path: '/',
    component: Layout,
    redirect: '/emperorAvailable',
    children: [
      {
        path: 'emperorAvailable',
        name: 'emperorAvailable',
        component: () => import('@/views/emperorAvailable/index'),
        meta: { title: '帝可得', icon: '011-house' },
      },
    ],
  },

  {
    path: '/workordeManagement',
    component: Layout,
    redirect: '/workordeManagement/menu1',
    name: 'Example',
    meta: { title: '工单管理', icon: '日志1' },
    children: [
      {
        path: 'menu1',
        name: 'menu1',
        component: () => import('@/views/workordeManagement/menu1'),
        meta: { title: '运营工单' },
      },
      {
        path: 'menu2',
        name: 'menu2',
        component: () => import('@/views/workordeManagement/menu2'),
        meta: { title: '运维工单' },
      },
    ],
  },

  {
    path: '/levelManagement',
    component: Layout,
    redirect: '/levelManagement/menu3',
    name: 'levelManagement',
    meta: {
      title: '点位管理',
      icon: '地标',
    },
    children: [
      {
        path: 'menu3',
        component: () => import('@/views/levelManagement/menu3/index'), // Parent router-view
        name: 'Menu3',
        meta: { title: '区域管理' },
      },
      {
        path: 'menu4',
        component: () => import('@/views/levelManagement/menu4/index'),
        name: 'Menu4',
        meta: { title: '点位管理' },
      },
      {
        path: 'menu5',
        component: () => import('@/views/levelManagement/menu5/index'),
        name: 'Menu5',
        meta: { title: '合作商管理' },
      },
    ],
  },

  {
    path: '/equipmentManagement',
    component: Layout,
    redirect: '/equipmentManagement/menu6',
    name: 'equipmentManagement',
    meta: {
      title: '设备管理',
      icon: '充电桩',
    },
    children: [
      {
        path: 'menu6',
        component: () => import('@/views/equipmentManagement/menu6/index'), // Parent router-view
        name: 'Menu6',
        meta: { title: '设备管理' },
      },
      {
        path: 'menu7',
        component: () => import('@/views/equipmentManagement/menu7/index'),
        name: 'menu7',
        meta: { title: '设备状态' },
      },
      {
        path: 'menu8',
        component: () => import('@/views/equipmentManagement/menu8/index'),
        name: 'Menu8',
        meta: { title: '设备类型管理' },
      },
    ],
  },

  {
    path: '/personnelManagement',
    component: Layout,
    redirect: '/personnelManagement/menu9',
    name: 'personnelManagement',
    meta: {
      title: '人员管理',
      icon: '管理员_角色管理',
    },
    children: [
      {
        path: 'menu9',
        component: () => import('@/views/personnelManagement/menu9/index'), // Parent router-view
        name: 'menu9',
        meta: { title: '人员列表' },
      },
      {
        path: 'menu10',
        component: () => import('@/views/personnelManagement/menu10/index'),
        name: 'menu10',
        meta: { title: '人效统计' },
      },
      {
        path: 'menu11',
        component: () => import('@/views/personnelManagement/menu11/index'),
        name: 'menu11',
        meta: { title: '工作量列表' },
      },
    ],
  },

  {
    path: '/commodityManagement',
    component: Layout,
    redirect: '/commodityManagement/menu12',
    name: 'commodityManagement',
    meta: {
      title: '商品管理',
      icon: 'component',
    },
    children: [
      {
        path: 'menu12',
        component: () => import('@/views/commodityManagement/menu12/index'), // Parent router-view
        name: 'menu12',
        meta: { title: '商品类型' },
      },
      {
        path: 'menu13',
        component: () => import('@/views/commodityManagement/menu13/index'),
        name: 'menu13',
        meta: { title: '商品管理' },
      },
    ],
  },

  {
    path: '/strategicManagement',
    component: Layout,
    children: [
      {
        path: 'strategicManagement',
        name: 'strategicManagement',
        component: () => import('@/views/strategicManagement/index'),
        meta: { title: '策略管理', icon: '灯泡' },
      },
    ],
  },

  {
    path: '/orderManagement',
    component: Layout,
    children: [
      {
        path: 'orderManagement',
        name: 'orderManagement',
        component: () => import('@/views/orderManagement/index'),
        meta: { title: '订单管理', icon: '订单' },
      },
    ],
  },

  {
    path: '/statistical',
    component: Layout,
    children: [
      {
        path: 'statistical',
        name: 'statistical',
        component: () => import('@/views/statistical/index'),
        meta: { title: '对账统计', icon: '账单' },
      },
    ],
  },

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true },
]

const createRouter = () =>
  new Router({
    // mode: 'history', // require service support
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes,
  })

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
