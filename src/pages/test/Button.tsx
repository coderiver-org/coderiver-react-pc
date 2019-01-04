import React, { MouseEvent, SFC, ComponentType, Component } from 'react';

/*type Props = {
    onClick(e: MouseEvent<HTMLElement>): void
    children:ReactNode
};
const Button = ({ onClick: handleClick, children }:Props) => (
  <button onClick={handleClick}>{children}</button>
);*/

export const withDefaultProps = <P extends object, DP extends Partial<P> = Partial<P>>(
  defaultProps: DP,
  Cmp: ComponentType<P>
) => {
  // 提取出必须的属性
  type RequiredProps = Partial<P>;
  // 重新创建我们的属性定义，通过一个相交类型，将所有的原始属性标记成可选的，必选属性标记成可选的
  type Props = Partial<DP> & Required<RequiredProps>;
  Cmp.defaultProps = defaultProps;

  return (Cmp as ComponentType<any>) as ComponentType<Props>;
};

const defaultProps = { color: 'red' };

type DefaultProps = typeof defaultProps;

type Props = { onClick(e: MouseEvent<HTMLElement>): void } & DefaultProps;
// SFC (interface StatelessComponent<P>)  含有预定义的children 和
// (defaultProps,displayName等等...)
const Button: SFC<Props> = ({ onClick: handleClick, children, color }) => (
  <button
    style={{
      color,
    }}
    onClick={handleClick}
  >
    {children}
    {color}
  </button>
);

const ButtonWithDefaultProps = withDefaultProps(defaultProps, Button);

const ButtonWithDefaultProps1 = withDefaultProps<Props>(
  defaultProps,
  ({ onClick: handleClick, children, color }) => (
    <button
      style={{
        color,
      }}
      onClick={handleClick}
    >
      {children}
      {color}
    </button>
  )
);

const ButtonWithDefaultProps2 = withDefaultProps(
  defaultProps,
  class Buttons extends Component<Props> {
    render() {
      const { onClick: handleClick, children, color } = this.props;
      return (
        <button
          style={{
            color,
          }}
          onClick={handleClick}
        >
          {children}
          {color}
        </button>
      );
    }
  }
);

export default ButtonWithDefaultProps;
