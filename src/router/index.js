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
    icon: 'svg-name'             the icon show in the sidebar
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
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      name: 'Dashboard',
      component: () => import('@/views/dashboard/index'),
      meta: { title: 'Dashboard', icon: 'dashboard' }
    }]
  },

  {
    path: '/template',
    component: Layout,
    redirect: '/template/table',
    name: 'Template',
    meta: { title: '组件模板', icon: 'example' },
    children: [
      {
        path: 'table',
        name: 'Table',
        component: () => import('@/views/template/Table'),
        meta: { title: '表格', icon: 'table' },
        children: [
          {
            path: 'notgovuextable',
            name: 'NotGoVuexTable',
            component: () => import('@/views/template/Table/NotGoVuexTable'),
            meta: { title: 'table交互不走vuex' }
          },
          {
            path: 'govuextable',
            name: 'GoVuexTable',
            component: () => import('@/views/template/Table/GoVuexTable'),
            meta: { title: 'table交互走vuex' }
          },
          {
            path: 'radiodeletetable',
            name: 'RadioDeleteTable',
            component: () => import('@/views/template/Table/RadioDeleteTable'),
            meta: { title: 'table单选删除' }
          },
          {
            path: 'checkboxdeletetable',
            name: 'CheckboxDeleteTable',
            component: () => import('@/views/template/Table/CheckboxDeleteTable'),
            meta: { title: 'table多选删除' }
          },
          {
            path: 'editable',
            name: 'Editable',
            component: () => import('@/views/template/Table/Editable'),
            meta: { title: '可编辑表格校验' }
          }
        ]
      },
      {
        path: 'other',
        name: 'Other',
        component: () => import('@/views/template/Other'),
        meta: { title: '其他', icon: 'eye-open' },
        children: [
          {
            path: 'computedtoparams',
            name: 'ComputedToParams',
            component: () => import('@/views/template/Other/ComputedToParams'),
            meta: { title: '计算属性传参数' }
          },
          {
            path: 'selectdisabled',
            name: 'SelectDisabled',
            component: () => import('@/views/template/Other/SelectDisabled'),
            meta: { title: '下拉框禁止选' }
          },
          {
            path: 'pagination',
            name: 'Pagination',
            component: () => import('@/views/template/Other/Pagination'),
            meta: { title: '前端分页' }
          },
          {
            path: 'pagination2',
            name: 'Pagination2',
            component: () => import('@/views/template/Other/Pagination2'),
            meta: { title: '后端分页' }
          },
          {
            path: 'layoutone',
            name: 'LayoutOne',
            component: () => import('@/views/template/Other/LayoutOne'),
            meta: { title: '表单单行展示' }
          },
          {
            path: 'layouttwo',
            name: 'LayoutTwo',
            component: () => import('@/views/template/Other/LayoutTwo'),
            meta: { title: '表单两行展示' }
          },
          {
            path: 'echartsdemo',
            name: 'EchartsDemo',
            component: () => import('@/views/template/Other/Echarts'),
            meta: { title: 'echarts' }
          }
        ]
      },
      {
        path: 'check',
        name: 'Check',
        component: () => import('@/views/template/Check'),
        meta: { title: '校验', icon: 'form' },
        children: [
          {
            path: 'customchecktable',
            name: 'CustomCheckTable',
            component: () => import('@/views/template/Check/CustomCheckTable'),
            meta: { title: '表格自定义校验' }
          },
          {
            path: 'customchecktable2',
            name: 'CustomCheckTable2',
            component: () => import('@/views/template/Check/CustomCheckTable2'),
            meta: { title: '表格自定义校验2' }
          },
          {
            path: 'morekidscheck',
            name: 'MoreKidsCheck',
            component: () => import('@/views/template/Check/MoreKidsCheck/index'),
            meta: { title: '多子组件校验和watch的使用' }
          }
        ]
      },
      {
        path: 'tree',
        name: 'Tree',
        component: () => import('@/views/template/Tree'),
        meta: { title: '树', icon: 'tree' },
        children: [
          {
            path: 'nochildtree',
            name: 'NoChildTree',
            component: () => import('@/views/template/Tree/NoChildTree/index'),
            meta: { title: '无子节点树' }
          }
        ]
      },
      {
        path: 'dialog',
        name: 'Dialog',
        component: () => import('@/views/template/Dialog'),
        meta: { title: '弹窗', icon: 'tree' },
        children: [
          {
            path: 'dialogone',
            name: 'DialogOne',
            component: () => import('@/views/template/Dialog/DialogOne/index'),
            meta: { title: '一层弹窗' }
          },
          {
            path: 'dialogmore',
            name: 'DialogMore',
            component: () => import('@/views/template/Dialog/DialogMore/index'),
            meta: { title: '多层弹窗' }
          }
        ]
      }
    ]
  },

  {
    path: '/form',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'Form',
        component: () => import('@/views/form/index'),
        meta: { title: 'Form', icon: 'form' }
      }
    ]
  },

  {
    path: '/nested',
    component: Layout,
    redirect: '/nested/menu1',
    name: 'Nested',
    meta: {
      title: 'Nested',
      icon: 'nested'
    },
    children: [
      {
        path: 'menu1',
        component: () => import('@/views/nested/menu1/index'), // Parent router-view
        name: 'Menu1',
        meta: { title: 'Menu1' },
        children: [
          {
            path: 'menu1-1',
            component: () => import('@/views/nested/menu1/menu1-1'),
            name: 'Menu1-1',
            meta: { title: 'Menu1-1' }
          },
          {
            path: 'menu1-2',
            component: () => import('@/views/nested/menu1/menu1-2'),
            name: 'Menu1-2',
            meta: { title: 'Menu1-2' },
            children: [
              {
                path: 'menu1-2-1',
                component: () => import('@/views/nested/menu1/menu1-2/menu1-2-1'),
                name: 'Menu1-2-1',
                meta: { title: 'Menu1-2-1' }
              },
              {
                path: 'menu1-2-2',
                component: () => import('@/views/nested/menu1/menu1-2/menu1-2-2'),
                name: 'Menu1-2-2',
                meta: { title: 'Menu1-2-2' }
              }
            ]
          },
          {
            path: 'menu1-3',
            component: () => import('@/views/nested/menu1/menu1-3'),
            name: 'Menu1-3',
            meta: { title: 'Menu1-3' }
          }
        ]
      },
      {
        path: 'menu2',
        component: () => import('@/views/nested/menu2/index'),
        meta: { title: 'menu2' }
      }
    ]
  },

  {
    path: 'external-link',
    component: Layout,
    children: [
      {
        path: 'https://panjiachen.github.io/vue-element-admin-site/#/',
        meta: { title: 'External Link', icon: 'link' }
      }
    ]
  },

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
