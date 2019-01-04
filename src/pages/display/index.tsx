import React, { PureComponent } from 'react';
import { connect } from 'dva';

@connect(({ displayModel }) => ({
  displayModel,
}))
export default class Display extends PureComponent<any> {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log(this);
    const dispatch = this.props.dispatch;
    dispatch({
      type: 'displayModel/fetch',
      payload: {
        a: 1,
      },
    });
  }

  render() {
    return <div>login</div>;
  }
}

// export default function DisplayHooks(props) {
//   const [count, setCount] = useState(0);
//   /**
//    * useEffect
//    * 若第二个参数为空,则只会在mount和unmount执行,
//    * 注:为空数组和不传是有区别的
//    * 若不为空,则effect只会在第二个参数改变时执行,
//    * 若effect返回一个函数时，函数会在当前effect和下次effect之间执行,多用于解除事件绑定
//    */
//   useEffect(() => {
//     document.title = `${count}`;
//     return () => {
//       // alert(111);
//     };
//   }, []);
//   useCallback(() => {}, []);
//   // useContext();
//   // useReducer(1,{count:1},3)
//   // useMemo();
//   // useRef();
//   // useImperativeMethods();
//   // useLayoutEffect();
//   // useMutationEffect()
//   return (
//     <div>
//       <button onClick={() => setCount(count + 1)}>点击+1</button>
//       <button onClick={() => setCount(prev => prev + 1)}>点击+1</button>
//       <h3>{count}</h3>
//     </div>
//   );
// }
