import React from 'react';
import { ComProps } from '../../type/common';

export default function Index(props: ComProps) {
  // console.log(props);
  return (
    <div>
      <h1> Welcome to umi!</h1>
      {props.children}
    </div>
  );
}
