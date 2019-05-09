import request from '../../../utils/axios'

export function login(userName, password, authCode = '') {
  return request({
    url: '/authentication/form',
    method: 'post',
    data: ({ userName, password, authCode })
  });
}
