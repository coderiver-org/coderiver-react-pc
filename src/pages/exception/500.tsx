import { ComProps } from 'src/type/common';

export default function Com500(props: ComProps) {
  return (
    <div>
      <h1>Yay! Welcome to 500!</h1>
      {props.children}
    </div>
  );
}
