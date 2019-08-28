import request from '@/utils/request'
// 查询组织树
export function getGroupList(params) {
  return request({
    url: '/template/tree/group',
    method: 'post',
    params
  })
}
