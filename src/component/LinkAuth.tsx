import Link from 'umi/link';

type linkProps = {
  to:
    | string
    | {
        pathname: string;
        search?: string;
        hash?: string;
        state?: any;
      };
  replace?: boolean;
  innerRef?: Function;
  title?: string;
  id?: string;
  className?: string;
};

export default function LinkAuth(props: linkProps) {

  return <Link to={props.to} {...props} />;
}
