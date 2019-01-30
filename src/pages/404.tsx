import React from 'react';
import Redirect from 'umi/redirect';

export default class To404 extends React.Component {
  render() {
    return <Redirect to={'/exception/404'} />;
  }
}
