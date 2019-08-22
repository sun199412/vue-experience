import request from '@/utils/request'

export function getList(params) {
  return request({
    url: '/template/table/list',
    method: 'post',
    params
  })
}
