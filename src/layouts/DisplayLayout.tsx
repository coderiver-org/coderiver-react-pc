import React from 'react';
import { ComProps } from '../type/displayType';

export default function DisplayLayout(props: ComProps) {
  // console.log(props);
  return (
    <div>
      <h1> Welcome to umi!</h1>
      {props.children}
    </div>
  );
}
