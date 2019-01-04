import { ComProps } from 'src/type/displayType';

export default function Com403(props: ComProps) {
  return (
    <div>
      <h1>Yay! Welcome to 403!</h1>
      {props.children}
    </div>
  );
}
