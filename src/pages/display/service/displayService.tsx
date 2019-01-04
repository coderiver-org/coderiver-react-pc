import request from 'src/utils/axios';

export async function queryTest() {
  return request({
    url: `/test`,
    method: 'get',
  });
}
