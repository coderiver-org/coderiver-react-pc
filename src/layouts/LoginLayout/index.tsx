import React from 'react';
import loginbg from 'assets/images/login/loginbg.png';

export default function LoginLayout(props) {
  return (
    <div
      style={{
        backgroundImage: `url(${loginbg})`,
        width: '100%',
        height: '100vh',
        backgroundSize: 'cover',
      }}
      className={'cr-loginlayout'}
    >
      {props.children}
    </div>
  );
}
