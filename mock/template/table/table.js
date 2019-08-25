const data = [
  {
    'id': 'b5cacf9c11ee4451b59245fa09b7676d',
    'createTime': 1566206166510,
    'orgId': '1',
    'reportYear': 2019,
    'reportMonth': 8,
    'state': '3',
    'childDistrictInfoId': '068fb2617215465194ec1c261ab99df7',
    'projectType': 'projectType_01',
    'projectTypeValue': '城市水系',
    'projectName': '1',
    'projectLocaltion': '1',
    'catchmentArea': 1,
    'totalInvestment': 1,
    'finishedInvestment': 1,
    'projectState': 'project_state_01',
    'projectStateValue': '在建',
    'buildComp': '阿萨德',
    'contacts': '迁安市多',
    'teleNum': '15215224886',
    'begainDate': 20190812,
    'endDate': 20190820,
    'designQuota': null,
    'planQuota': null,
    'evalResultQuota': null,
    'opsCompany': null
  },
  {
    'id': 'd53e6b5b8af14e63b84fda20605beda3',
    'createTime': 1566196098040,
    'orgId': '1',
    'reportYear': 2019,
    'reportMonth': 8,
    'state': '3',
    'childDistrictInfoId': '068fb2617215465194ec1c261ab99df7',
    'projectType': 'projectType_04',
    'projectTypeValue': '其他',
    'projectName': '操蛋',
    'projectLocaltion': '电车',
    'catchmentArea': 36666,
    'totalInvestment': 12121,
    'finishedInvestment': 456,
    'projectState': 'project_state_03',
    'projectStateValue': '在建',
    'buildComp': '操蛋',
    'contacts': '操蛋',
    'teleNum': '1322525455',
    'begainDate': 20190824,
    'endDate': 20190827,
    'designQuota': null,
    'planQuota': null,
    'evalResultQuota': null,
    'opsCompany': null
  }
]

const project = {
  'content': [
    {
      'id': '0001',
      'label': '城市',
      'value': 'projectType_01',
      'sort': '1'
    },
    {
      'id': '0002',
      'label': '农村',
      'value': 'projectType_02',
      'sort': '2'
    },
    {
      'id': '0003',
      'label': '花园',
      'value': 'projectType_03',
      'sort': '3'
    },
    {
      'id': '0004',
      'label': '洋房',
      'value': 'projectType_04',
      'sort': '4'
    }
  ]
}

const state = {
  'content': [
    {
      'id': 1543,
      'label': '前期',
      'value': 'project_state_01',
      'sort': '1'
    },
    {
      'id': 1548,
      'label': '在建',
      'value': 'project_state_02',
      'sort': '2'
    },
    {
      'id': 1551,
      'label': '完工',
      'value': 'project_state_03',
      'sort': '3'
    }
  ]
}

export default [
  {
    url: '/template/table/list',
    type: 'post',
    response: config => {
      return {
        code: 20000,
        data: {
          Total: data.length,
          RetList: data
        }
      }
    }
  },
  {
    url: '/template/dic/project',
    type: 'post',
    response: config => {
      console.log('config', config.body)
      return {
        code: 20000,
        data: {
          Total: project.content.length,
          ResPonseBody: project
        }
      }
    }
  },
  {
    url: '/template/dic/state',
    type: 'post',
    response: config => {
      console.log('config', config.body)
      return {
        code: 20000,
        data: {
          Total: state.content.length,
          ResPonseBody: state
        }
      }
    }
  }
]
