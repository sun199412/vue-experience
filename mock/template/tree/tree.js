const groupList = [
  {
    'groupNm': '重庆农村商业银行梁平支行',
    'groupNo': '310000'
  },
  {
    'groupNm': '重庆农村商业银行北部新区支行',
    'groupNo': '470000'
  },
  {
    'groupNm': '重庆农村商业银行江北支行',
    'groupNo': '020000'
  },
  {
    'groupNm': '重庆农村商业银行巫溪支行',
    'groupNo': '400000'
  },
  {
    'groupNm': '重庆农村商业银行西永支行',
    'groupNo': '460000'
  },
  {
    'groupNm': '重庆农村商业银行奉节支行',
    'groupNo': '380000'
  },
  {
    'groupNm': '渝农商张家港华信村镇银行',
    'groupNo': '900000'
  },
  {
    'groupNm': '重庆农村商业银行双桥支行',
    'groupNo': '490000'
  },
  {
    'groupNm': '重庆农村商业银行丰都支行',
    'groupNo': '270000'
  },
  {
    'groupNm': '重庆农村商业银行万州支行',
    'groupNo': '290000'
  },
  {
    'groupNm': '重庆农村商业银行云阳支行',
    'groupNo': '370000'
  },
  {
    'groupNm': '渝农商鹤庆村镇银行',
    'groupNo': '880000'
  },
  {
    'groupNm': '重庆农村商业银行大渡口支行',
    'groupNo': '050000'
  },
  {
    'groupNm': '重庆农村商业银行渝北支行',
    'groupNo': '130000'
  },
  {
    'groupNm': '重庆农村商业银行江津支行',
    'groupNo': '150000'
  },
  {
    'groupNm': '重庆农村商业银行总行',
    'groupNo': '000000'
  },
  {
    'groupNm': '重庆农村商业银行两江新区支行',
    'groupNo': '510000'
  },
  {
    'groupNm': '重庆农村商业银行彭水支行',
    'groupNo': '440000'
  },
  {
    'groupNm': '重庆农村商业银行涪陵支行',
    'groupNo': '240000'
  },
  {
    'groupNm': '重庆农村商业银行沙坪坝支行',
    'groupNo': '030000'
  },
  {
    'groupNm': '重庆农村商业银行九龙坡支行',
    'groupNo': '040000'
  },
  {
    'groupNm': '重庆农村商业银行巴南支行',
    'groupNo': '100000'
  },
  {
    'groupNm': '重庆农村商业银行长寿支行',
    'groupNo': '120000'
  },
  {
    'groupNm': '重庆农村商业银行北碚支行',
    'groupNo': '070000'
  },
  {
    'groupNm': '重庆农村商业银行綦江支行',
    'groupNo': '110000'
  },
  {
    'groupNm': '重庆农村商业银行垫江支行',
    'groupNo': '250000'
  },
  {
    'groupNm': '重庆农村商业银行城口支行',
    'groupNo': '360000'
  },
  {
    'groupNm': '渝农商祥云村镇银行',
    'groupNo': '920000'
  },
  {
    'groupNm': '重庆农村商业银行石柱支行',
    'groupNo': '450000'
  },
  {
    'groupNm': '重庆农村商业银行合川支行',
    'groupNo': '160000'
  },
  {
    'groupNm': '重庆农村商业银行南川支行',
    'groupNo': '260000'
  },
  {
    'groupNm': '重庆农村商业银行曲靖支行',
    'groupNo': '520000'
  },
  {
    'groupNm': '重庆农村商业银行忠县支行',
    'groupNo': '350000'
  },
  {
    'groupNm': '渝农商沙县村镇银行',
    'groupNo': '980000'
  },
  {
    'groupNm': '重庆农村商业银行巫山支行',
    'groupNo': '390000'
  },
  {
    'groupNm': '渝农商石狮村镇银行',
    'groupNo': '870000'
  },
  {
    'groupNm': '重庆农村商业银行渝中支行',
    'groupNo': '010000'
  },
  {
    'groupNm': '重庆农村商业银行秀山支行',
    'groupNo': '430000'
  },
  {
    'groupNm': '云南西山渝农商村镇银行有限责任公司',
    'groupNo': '860000'
  },
  {
    'groupNm': '重庆农村商业银行开县支行',
    'groupNo': '340000'
  },
  {
    'groupNm': '渝农商香格里拉村镇银行',
    'groupNo': '950000'
  },
  {
    'groupNm': '重庆农村商业银行璧山支行',
    'groupNo': '210000'
  },
  {
    'groupNm': '重庆农村商业银行万盛支行',
    'groupNo': '080000'
  },
  {
    'groupNm': '重庆农村商业银行黔江支行',
    'groupNo': '410000'
  },
  {
    'groupNm': '渝农商大竹隆源村镇银行',
    'groupNo': '910000'
  },
  {
    'groupNm': '渝农商鹿寨村镇银行',
    'groupNo': '930000'
  },
  {
    'groupNm': '渝农商福安村镇银行',
    'groupNo': '970000'
  },
  {
    'groupNm': '重庆农村商业银行武隆支行',
    'groupNo': '280000'
  },
  {
    'groupNm': '重庆农村商业银行高新科技支行',
    'groupNo': '480000'
  },
  {
    'groupNm': '渝农商大理海东村镇银行',
    'groupNo': '960000'
  },
  {
    'groupNm': '重庆农村商业银行大足支行',
    'groupNo': '220000'
  },
  {
    'groupNm': '重庆农村商业银行铜梁支行',
    'groupNo': '200000'
  },
  {
    'groupNm': '重庆农村商业银行酉阳支行',
    'groupNo': '420000'
  },
  {
    'groupNm': '重庆农村商业银行永川支行',
    'groupNo': '180000'
  },
  {
    'groupNm': '渝农商平潭村镇银行',
    'groupNo': '890000'
  },
  {
    'groupNm': '重庆农村商业银行南岸支行',
    'groupNo': '060000'
  }
]

export default [
  {
    url: '/template/tree/group', // 查询组织树
    type: 'post',
    response: config => {
      return {
        code: 20000,
        data: {
          RetList: groupList
        }
      }
    }
  }
]

