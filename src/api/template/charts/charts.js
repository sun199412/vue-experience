import request from '@/utils/request'
// 查询表单
export function getTotal(params) {
  return request({
    url: '/template/charts/total',
    method: 'post',
    params
  })
}
