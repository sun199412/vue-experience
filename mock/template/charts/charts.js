const charts = [
  {
    'totalNum': '13',
    'tradeDate': '2019-05-04',
    'key': '1'
  },
  {
    'totalNum': '139',
    'tradeDate': '2019-05-05',
    'key': '2'
  },
  {
    'totalNum': '247',
    'tradeDate': '2019-05-06',
    'key': '3'
  },
  {
    'totalNum': '217',
    'tradeDate': '2019-05-07',
    'key': '4'
  },
  {
    'totalNum': '203',
    'tradeDate': '2019-05-08',
    'key': '5'
  },
  {
    'totalNum': '229',
    'tradeDate': '2019-05-09',
    'key': '6'
  },
  {
    'totalNum': '151',
    'tradeDate': '2019-05-10',
    'key': '7'
  },
  {
    'totalNum': '17',
    'tradeDate': '2019-05-11',
    'key': '8'
  },
  {
    'totalNum': '125',
    'tradeDate': '2019-05-13',
    'key': '9'
  },
  {
    'totalNum': '275',
    'tradeDate': '2019-05-14',
    'key': '10'
  },
  {
    'totalNum': '270',
    'tradeDate': '2019-05-15',
    'key': '11'
  },
  {
    'totalNum': '315',
    'tradeDate': '2019-05-16',
    'key': '12'
  },
  {
    'totalNum': '187',
    'tradeDate': '2019-05-17',
    'key': '13'
  },
  {
    'totalNum': '24',
    'tradeDate': '2019-05-18',
    'key': '14'
  },
  {
    'totalNum': '117',
    'tradeDate': '2019-05-20',
    'key': '15'
  },
  {
    'totalNum': '222',
    'tradeDate': '2019-05-21',
    'key': '16'
  },
  {
    'totalNum': '313',
    'tradeDate': '2019-05-22',
    'key': '17'
  },
  {
    'totalNum': '220',
    'tradeDate': '2019-05-23',
    'key': '18'
  },
  {
    'totalNum': '126',
    'tradeDate': '2019-05-24',
    'key': '19'
  },
  {
    'totalNum': '68',
    'tradeDate': '2019-05-25',
    'key': '20'
  },
  {
    'totalNum': '3',
    'tradeDate': '2019-05-26',
    'key': '21'
  },
  {
    'totalNum': '156',
    'tradeDate': '2019-05-27',
    'key': '22'
  },
  {
    'totalNum': '201',
    'tradeDate': '2019-05-28',
    'key': '23'
  },
  {
    'totalNum': '169',
    'tradeDate': '2019-05-29',
    'key': '24'
  },
  {
    'totalNum': '135',
    'tradeDate': '2019-05-30',
    'key': '25'
  },
  {
    'totalNum': '131',
    'tradeDate': '2019-05-31',
    'key': '26'
  },
  {
    'totalNum': '46',
    'tradeDate': '2019-06-01',
    'key': '27'
  }
]

export default [
  {
    url: '/template/charts/total', // 查询分页的列表
    type: 'post',
    response: config => {
      return {
        code: 20000,
        data: {
          RetList: charts
        }
      }
    }
  }
]

