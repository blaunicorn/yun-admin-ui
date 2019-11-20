import request from '@/utils/request'

export function dictTypeListPage(data) {
  return request({
    url: '/admin-server/dict/dictTypeListPage',
    method: 'get',
    params: data
  })
}

export function dictTypeAddOrEdit(data) {
  return request({
    url: '/admin-server/dict/dictTypeAddOrEdit',
    method: 'put',
    data
  })
}

export function dictTypeDelList(data) {
  return request({
    url: '/admin-server/dict/dictTypeDelList',
    method: 'delete',
    data
  })
}

export function dictDataList(dictType) {
  return request({
    url: '/admin-server/dict/dictDataList/' + dictType,
    method: 'get'
  })
}

export function dictType(dictType) {
  return request({
    url: '/admin-server/dict/dictType/' + dictType,
    method: 'get'
  })
}

export function dictDataAddOrEdit(data) {
  return request({
    url: '/admin-server/dict/dictDataAddOrEdit',
    method: 'put',
    data
  })
}

export function dictDataDel(data) {
  return request({
    url: '/admin-server/dict/dictDataDel',
    method: 'delete',
    data
  })
}
