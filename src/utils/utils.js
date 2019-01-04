export const formatRes = (data, code = '0000') => {
  return {
    data,
    code,
    message: code === '0000' ? '请求成功' : '请求失败',
  };
};
