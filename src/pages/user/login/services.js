import request from '../../../utils/axios'

export function login(username, password) {
  return request({
    url: '/login',
    method: 'post',
    data: ({ username, password })
  });
}
