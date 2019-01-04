import mockjs from 'mockjs';

// import { formatRes } from '../src/utils/utils';

const formatRes = (data, code = '0000') => {
  return {
    data,
    code,
    message: code === '0000' ? '请求成功' : '请求失败',
  };
};

export default {
  'GET /api/v1/test': (req, res) => {
    // res.setHeader('Access-Control-Allow-Origin', '*');
    // res.setHeader('Content-Type', 'application/json');
    const data = mockjs.mock({
      'list|100': [
        {
          name: '@city',
          'value|1-100': 50,
          'type|0-2': 1,
        },
      ],
    });
    setTimeout(() => {
      res.send(formatRes(data));
    }, 2000);
  },
  // 'GET /api/v1/test': {
  //   a: 123,
  // },
};
