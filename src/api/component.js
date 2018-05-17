import request from '../utils/request'

export function compList() {
  return request({
    url: '/components',
    method: 'get',
    params: {
      isShowHistory: false
    },
    auth: {
      username: 'admin',
      password: 'admin'
    }
  })
}

export function createComp(data) {
  return request({
    url: '/components',
    method: 'post',
    auth: {
      username: 'admin',
      password: 'admin'
    },
    headers: {
      'Content-Type': 'multipart/form-data'
    },
    data
  })
}

export function updateComp(data, id) {
  return request({
    url: '/components/' + id + '/update',
    method: 'post',
    auth: {
      username: 'admin',
      password: 'admin'
    },
    data
  })
}

export function copyComp(data, id) {
  return request({
    url: '/components/' + id + '/copy',
    method: 'post',
    auth: {
      username: 'admin',
      password: 'admin'
    },
    headers: {
      'content-type': 'application/x-www-form-urlencoded'
    },
    data
  })
}

export function importComp(data) {
  return request({
    url: '/components/import',
    method: 'post',
    auth: {
      username: 'admin',
      password: 'admin'
    },
    headers: {
      'content-type': 'application/x-www-form-urlencoded'
    },
    data
  })
}

export function deleteComp(id) {
  return request({
    url: '/components/' + id,
    method: 'delete',
    auth: {
      username: 'admin',
      password: 'admin'
    }
  })
}

export function compSingle(id) {
  return request({
    url: '/components/' + id,
    method: 'get',
    auth: {
      username: 'admin',
      password: 'admin'
    },
    headers: {
      'content-type': 'application/x-www-form-urlencoded'
    },
  })
}