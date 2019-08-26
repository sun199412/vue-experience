import request from '@/utils/request'
// 查询表单
export function getForm(params) {
  return request({
    url: '/template/form/detail',
    method: 'post',
    params
  })
}
