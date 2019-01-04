import BasicLayout from './BasicLayout';
import DisplayLayout from './DisplayLayout';
import GlobalLayout from './GlobalLayout';
import './BasicLayout.less';
import { ComProps } from '../type/displayType';
import { isNull } from 'util';

export default function(props: ComProps) {
  const firstLevenPath = getSinglePath(props.location.pathname);
  let ChlLayout = null;
  switch (firstLevenPath) {
    case 'display':
      ChlLayout = () => <DisplayLayout>{props.children}</DisplayLayout>;
      break;
    case 'test':
      ChlLayout = () => <BasicLayout>{props.children}</BasicLayout>;
      break;
  }
  return (
    <GlobalLayout>
      {isNull(ChlLayout) ? <>{props.children}</> : <ChlLayout>{props.children}</ChlLayout>}
    </GlobalLayout>
  );
}

// 根据路由名称获取不同等级的路由
export function getSinglePath(pathname = '/', level = 1) {
  const pathArr = pathname.split('/')[level];
  if (pathArr) return pathArr;
}
