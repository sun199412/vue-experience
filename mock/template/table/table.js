const data = [
  {
    'id': 'b5cacf9c11ee4451b59245fa09b7676d',
    'createTime': 1566206166510,
    'orgId': '1',
    'reportYear': 2019,
    'reportMonth': 8,
    'state': '3',
    'childDistrictInfoId': '068fb2617215465194ec1c261ab99df7',
    'projectType': 'projectType_05',
    'projectTypeValue': '城市水系',
    'projectName': '1',
    'projectLocaltion': '1',
    'catchmentArea': 1,
    'totalInvestment': 1,
    'finishedInvestment': 1,
    'projectState': 'project_state_02',
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
    'projectType': 'projectType_07',
    'projectTypeValue': '其他',
    'projectName': '操蛋',
    'projectLocaltion': '电车',
    'catchmentArea': 36666,
    'totalInvestment': 12121,
    'finishedInvestment': 456,
    'projectState': 'project_state_02',
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

export default [
  {
    url: '/template/table/list',
    type: 'post',
    response: config => {
      console.log('config', config.body)
      return {
        code: 20000,
        data: {
          Total: data.length,
          RetList: data
        }
      }
    }
  }
]
