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
    component: (resolve) => require(['@/views/login/index'], resolve),
    hidden: true
  },

  {
    path: '/404',
    component: (resolve) => require(['@/views/404'], resolve),
    hidden: true
  },

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      name: 'Dashboard',
      component: (resolve) => require(['@/views/dashboard/index'], resolve),
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
        component: (resolve) => require(['@/views/template/Table'], resolve),
        meta: { title: '表格', icon: 'table' },
        children: [
          {
            path: 'notgovuextable',
            name: 'NotGoVuexTable',
            component: (resolve) => require(['@/views/template/Table/NotGoVuexTable'], resolve),
            meta: { title: 'table交互不走vuex' }
          },
          {
            path: 'govuextable',
            name: 'GoVuexTable',
            component: (resolve) => require(['@/views/template/Table/GoVuexTable'], resolve),
            meta: { title: 'table交互走vuex' }
          },
          {
            path: 'radiodeletetable',
            name: 'RadioDeleteTable',
            component: (resolve) => require(['@/views/template/Table/RadioDeleteTable'], resolve),
            meta: { title: 'table单选删除' }
          },
          {
            path: 'checkboxdeletetable',
            name: 'CheckboxDeleteTable',
            component: (resolve) => require(['@/views/template/Table/CheckboxDeleteTable'], resolve),
            meta: { title: 'table多选删除' }
          },
          {
            path: 'editable',
            name: 'Editable',
            component: (resolve) => require(['@/views/template/Table/Editable'], resolve),
            meta: { title: '可编辑表格校验' }
          },
          {
            path: 'foldingtable',
            name: 'FoldingTable',
            component: (resolve) => require(['@/views/template/Table/FoldingTable'], resolve),
            meta: { title: '可折叠的树table' }
          },
          {
            path: 'comprehensivetable',
            name: 'ComprehensiveTable',
            component: (resolve) => require(['@/views/template/Table/ComprehensiveApplicationTable'], resolve),
            meta: { title: 'table综合练习' }
          }
        ]
      },
      {
        path: 'other',
        name: 'Other',
        component: (resolve) => require(['@/views/template/Other'], resolve),
        meta: { title: '其他', icon: 'eye-open' },
        children: [
          {
            path: 'computedtoparams',
            name: 'ComputedToParams',
            component: (resolve) => require(['@/views/template/Other/ComputedToParams'], resolve),
            meta: { title: '计算属性传参数' }
          },
          {
            path: 'selectdisabled',
            name: 'SelectDisabled',
            component: (resolve) => require(['@/views/template/Other/SelectDisabled'], resolve),
            meta: { title: '下拉框禁止选' }
          },
          {
            path: 'pagination',
            name: 'Pagination',
            component: (resolve) => require(['@/views/template/Other/Pagination'], resolve),
            meta: { title: '前端分页' }
          },
          {
            path: 'pagination2',
            name: 'Pagination2',
            component: (resolve) => require(['@/views/template/Other/Pagination2'], resolve),
            meta: { title: '后端分页' }
          },
          {
            path: 'layoutone',
            name: 'LayoutOne',
            component: (resolve) => require(['@/views/template/Other/LayoutOne'], resolve),
            meta: { title: '表单单行展示' }
          },
          {
            path: 'layouttwo',
            name: 'LayoutTwo',
            component: (resolve) => require(['@/views/template/Other/LayoutTwo'], resolve),
            meta: { title: '表单两行展示' }
          },
          {
            path: 'echartsdemo',
            name: 'EchartsDemo',
            component: (resolve) => require(['@/views/template/Other/Echarts'], resolve),
            meta: { title: 'echarts' }
          },
          {
            path: 'echartsmap',
            name: 'EchartsMap',
            component: (resolve) => require(['@/views/template/Other/Echarts/Map'], resolve),
            meta: { title: 'echarts地图' }
          }
        ]
      },
      {
        path: 'check',
        name: 'Check',
        component: (resolve) => require(['@/views/template/Check'], resolve),
        meta: { title: '校验', icon: 'form' },
        children: [
          {
            path: 'customchecktable',
            name: 'CustomCheckTable',
            component: (resolve) => require(['@/views/template/Check/CustomCheckTable'], resolve),
            meta: { title: '表格自定义校验' }
          },
          {
            path: 'customchecktable2',
            name: 'CustomCheckTable2',
            component: (resolve) => require(['@/views/template/Check/CustomCheckTable2'], resolve),
            meta: { title: '表格自定义校验2' }
          },
          {
            path: 'morekidscheck',
            name: 'MoreKidsCheck',
            component: (resolve) => require(['@/views/template/Check/MoreKidsCheck/index'], resolve),
            meta: { title: '多子组件校验和watch的使用' }
          }
        ]
      },
      {
        path: 'tree',
        name: 'Tree',
        component: (resolve) => require(['@/views/template/Tree'], resolve),
        meta: { title: '树', icon: 'tree' },
        children: [
          {
            path: 'nochildtree',
            name: 'NoChildTree',
            component: (resolve) => require(['@/views/template/Tree/NoChildTree/index'], resolve),
            meta: { title: '普通树' }
          },
          {
            path: 'asynctree',
            name: 'AsyncTree',
            component: (resolve) => require(['@/views/template/Tree/AsyncTree/index'], resolve),
            meta: { title: '异步树' }
          }
        ]
      },
      {
        path: 'dialog',
        name: 'Dialog',
        component: (resolve) => require(['@/views/template/Dialog'], resolve),
        meta: { title: '弹窗', icon: 'tree' },
        children: [
          {
            path: 'dialogone',
            name: 'DialogOne',
            component: (resolve) => require(['@/views/template/Dialog/DialogOne/index'], resolve),
            meta: { title: '一层弹窗' }
          },
          {
            path: 'dialogmore',
            name: 'DialogMore',
            component: (resolve) => require(['@/views/template/Dialog/DialogMore/index'], resolve),
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
        component: (resolve) => require(['@/views/form/index'], resolve),
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
        component: (resolve) => require(['@/views/nested/menu1/index'], resolve), // Parent router-view
        name: 'Menu1',
        meta: { title: 'Menu1' },
        children: [
          {
            path: 'menu1-1',
            component: (resolve) => require(['@/views/nested/menu1/menu1-1'], resolve),
            name: 'Menu1-1',
            meta: { title: 'Menu1-1' }
          },
          {
            path: 'menu1-2',
            component: (resolve) => require(['@/views/nested/menu1/menu1-2'], resolve),
            name: 'Menu1-2',
            meta: { title: 'Menu1-2' },
            children: [
              {
                path: 'menu1-2-1',
                component: (resolve) => require(['@/views/nested/menu1/menu1-2/menu1-2-1'], resolve),
                name: 'Menu1-2-1',
                meta: { title: 'Menu1-2-1' }
              },
              {
                path: 'menu1-2-2',
                component: (resolve) => require(['@/views/nested/menu1/menu1-2/menu1-2-2'], resolve),
                name: 'Menu1-2-2',
                meta: { title: 'Menu1-2-2' }
              }
            ]
          },
          {
            path: 'menu1-3',
            component: (resolve) => require(['@/views/nested/menu1/menu1-3'], resolve),
            name: 'Menu1-3',
            meta: { title: 'Menu1-3' }
          }
        ]
      },
      {
        path: 'menu2',
        component: (resolve) => require(['@/views/nested/menu2/index'], resolve),
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
