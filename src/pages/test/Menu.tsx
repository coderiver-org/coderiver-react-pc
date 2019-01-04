import { Component, SFC } from 'react';
import Toggleable, { ToggleableComponentProps } from './Toggleable';

type MenuItemProps = { title: string };
const MenuItem: SFC<MenuItemProps & ToggleableComponentProps> = ({
  title,
  toggle,
  show,
  children,
}) => (
  <>
    <div onClick={toggle}>
      <h1>{title}</h1>
    </div>
    {show ? children : null}
  </>
);

type Props = { title: string };
const ToggleableMenu: SFC<Props> = ({ title, children }) => (
  <Toggleable
    render={({ show, toggle }) => (
      <MenuItem show={show} toggle={toggle} title={title}>
        {children}
      </MenuItem>
    )}
  />
);

const ToggleableWithTitle = Toggleable.ofType<Props>();

const ToggleableMenuViaComponentInjection: SFC<Props> = ({ title, children }) => (
  <ToggleableWithTitle component={MenuItem} props={{ title }}>
    {children}
  </ToggleableWithTitle>
);

export default class Menu extends Component {
  render() {
    return (
      <>
        <ToggleableMenu title="First Menu">123</ToggleableMenu>
        <ToggleableMenu title="second Menu">456</ToggleableMenu>
        <ToggleableMenu title="third Menu">789</ToggleableMenu>
        <ToggleableMenuViaComponentInjection title="组件注入1">
          123
        </ToggleableMenuViaComponentInjection>
        <ToggleableMenuViaComponentInjection title="组件注入2">
          456
        </ToggleableMenuViaComponentInjection>
        <ToggleableMenuViaComponentInjection title="组件注入3">
          789
        </ToggleableMenuViaComponentInjection>
      </>
    );
  }
}
