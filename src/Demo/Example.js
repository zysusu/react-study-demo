import React, { useState, createContext, useContext, useReducer } from "react";

const CountContext = createContext();

function HookExam() {
  const [count, setCount] = useState(0); // 返回数组，0位是当前的状态值，第1位是可改变状态值的方法函数
  const [ num, dispatch ] = useReducer((state, action) => {
      switch(action) {
        case 'add':
            return state + 1;
        case 'sub':
            return state - 1;
        default:
            return state;
      }
  }, 0)

  return (
    <div>
      <p>You clicked {count} times</p>
      
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        click me
      </button>
      {/* 把count变量允许跨层级实现传递和使用，当父组件当count变量发生变化时，子组件也会发生变化 */}
      <CountContext.Provider value={count}>
          <Counter />
      </CountContext.Provider>
      <p>num: {num}</p>
      <button onClick={() => { dispatch('add') }}>add num</button>
      <button onClick={() => { dispatch('sub') }}>sub num</button>
    </div>
  );
}

function Counter(){
    const count = useContext(CountContext)  //一句话就可以得到count
    return (<h2>Parent cliked {count} times</h2>)
}

export default HookExam;
