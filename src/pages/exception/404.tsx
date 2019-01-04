import { ComProps } from 'src/type/displayType';

export default function Com404(props: ComProps) {
  return (
    <div>
      <h1>Yay! Welcome to 404!</h1>
      {props.children}
    </div>
  );
}
