import request from 'src/utils/axios';

export async function queryCurrent() {
  return request({ url: '/user/profile', method: 'get' });
}
