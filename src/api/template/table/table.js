import request from '@/utils/request'
// 查询列表
export function getList(params) {
  return request({
    url: '/template/table/list',
    method: 'post',
    params
  })
}
// 查询项目类别
export function getProject(params) {
  return request({
    url: '/template/dic/project',
    method: 'post',
    params
  })
}
// 查询形象进度
export function getState(params) {
  return request({
    url: '/template/dic/state',
    method: 'post',
    params
  })
}
// 查询分页列表
export function getPaginationList(params) {
  return request({
    url: '/template/table/pagination',
    method: 'post',
    params
  })
}
// 新增列表
export function addList(params) {
  return request({
    url: '/template/table/add',
    method: 'post',
    params
  })
}
