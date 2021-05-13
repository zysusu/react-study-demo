import React, { useState, useEffect } from "react";
import Example from './Example';
// createContext 实现 redux和reducer
import ShowArea from './ShowArea';
import Buttons from './Buttons';
import { Color } from './Color';

function HookExam() {
  const [count, setCount] = useState(0); // 返回数组，0位是当前的状态值，第1位是可改变状态值的方法函数
  // 第一次组件渲染和每次组件更新都会执行这个函数，监听count的改变
  useEffect(() => {
      console.log(`Hook 页面》useEffect=> you clicked ${count} times`);
  }, [count])

  // 第二个参数传[]，模拟componentWillUnmount生命周期
  useEffect(() => {
      console.log('老弟，你来了？');
      return () => {
          console.log('老弟，你走了？模拟componentWillUnmount');
      }
  }, [])

  return (
    <div style={{ paddingLeft: '20px' }}>
      <p>You clicked {count} times</p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        click me
      </button>

        <br/><br/><br/><br/>
        <h3>Exapmle</h3>
      <Example/>

      <br/><br/><br/><br/>
        <h3>ShowArea</h3>
        <Color>
            <ShowArea/>
            <Buttons/>
        </Color>
    </div>
  );
}

export default HookExam;
