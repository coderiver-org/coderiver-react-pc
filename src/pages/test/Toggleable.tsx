import React, { Component, MouseEvent, ReactNode, ComponentType } from 'react';
import {
  isFunction,
  // getHocComponentName
} from 'util';

const initialState = {
  show: false,
};

type State = Readonly<typeof initialState>;
type DefaultProps<P extends object = object> = { props: P };
const defaultProps: DefaultProps = { props: {} };

type Props<P extends object = object> = Partial<
  {
    children: RenderCallback | ReactNode;
    render: RenderCallback;
    component: ComponentType<ToggleableComponentProps<any>>;
  } & DefaultProps<P>
>;

type RenderCallback = (args: ToggleableComponentProps) => JSX.Element;

export type ToggleableComponentProps<P extends Object = Object> = {
  show: State['show'];
  toggle: Toggleable['toggle'];
} & P;

const updateShowState = (prevState: State) => ({ show: !prevState.show });

export default class Toggleable<T = {}> extends Component<Props, State> {
  static readonly defaultProps: Props = defaultProps;

  static ofType<T extends object>() {
    return Toggleable;
    // as Constructor<Toggleable<T>>;
  }

  readonly state: State = initialState;

  private toggle = (event: MouseEvent<HTMLElement>) => {
    this.setState(updateShowState);
  };

  render() {
    const { children, render, component: InjectComponent, props } = this.props;
    const renderProps = { show: this.state.show, toggle: this.toggle };

    if (render) {
      return render(renderProps);
    }

    if (InjectComponent) {
      return (
        <InjectComponent {...props} {...renderProps}>
          {children}
        </InjectComponent>
      );
    }

    // return isFunction(children) ? children(renderProps) : null;
    return isFunction(children) ? children : null;
  }
}
