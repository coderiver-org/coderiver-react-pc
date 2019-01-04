import React, { Component } from 'react';
import { default as Button } from './Button';

const initialState = { clicksCount: 0 };
type State = Readonly<typeof initialState>;

const incrementClicksCount = (prevState: State) => ({
  clicksCount: prevState.clicksCount + 1,
});
const decrementClicksCount = (prevState: State) => ({
  clicksCount: prevState.clicksCount - 1,
});

// 参数语义化
const test: (name: string, age: number) => number = function(n, a) {
  return a;
};
test('lsc', 256);

export default class Computed extends Component<object, State> {
  readonly state: State = initialState;

  /* doBadThings = () => {
      this.state = { clicksCount: 12 };
      this.state.clicksCount = 123;
    }; */
  private handleIncrement = () => this.setState(incrementClicksCount);
  private handleDecrement = () => this.setState(decrementClicksCount);

  render() {
    const { clicksCount } = this.state;
    return (
      <>
        <p>{clicksCount}</p>
        <p>
          <Button color={'red'} onClick={this.handleIncrement}>
            加
          </Button>
        </p>
        <p>
          <Button color={'blue'} onClick={this.handleDecrement}>
            减
          </Button>
        </p>
      </>
    );
  }
}
