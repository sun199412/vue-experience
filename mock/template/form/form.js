const data = {
  'id': '63dab99e007c4c9c917407d3b1dab5e2',
  'createTime': 1565945100047,
  'orgId': '7', 'reportYear': 2019,
  'reportMonth': 8,
  'state': '2',
  'buildedArea': 1000.00,
  'isplaned': 'true',
  'planYear': 1546272000000,
  'planArea': 91.00,
  'childDistrictNum': 3,
  'buldingNum': 2,
  'finishedNum': 0,
  'buldingArea': 36667,
  'finishedArea': 0,
  'finishedRate': 0.0,
  'finishedAmount': 457.00
}

export default [
  {
    url: '/template/form/detail',
    type: 'post',
    response: config => {
      return {
        code: 20000,
        data: {
          ResponseBody: data
        }
      }
    }
  }
]

