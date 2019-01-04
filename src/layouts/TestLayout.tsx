import { ComProps } from '../type/displayType';

export default function TestLayout(props: ComProps) {
  console.log(props);
  return (
    <div className={'nomal'}>
      <h1> Welcome to umi!</h1>
      {props.children}
    </div>
  );
}
