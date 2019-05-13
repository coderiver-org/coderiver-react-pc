import request from 'src/utils/axios';

export async function queryIndex() {
  return request({ url: '/index', method: 'get' });
}
