import React, { Component, Fragment } from "react";
import TodoItem from "./TodoItem";
import "./todo.css";

class TodoList extends Component {
  constructor(props) {
    super(props);

    // 当组件的state或者props发生改变的时候，render函数就会重新执行
    // 当父组件的render函数执行时，子组件的render也会被重新运行一次
    this.state = {
      inputVal: "hello",
      list: ["react", "nodejs"],
    };

    this.changeInputVal = this.changeInputVal.bind(this);
    this.handelBtnCick = this.handelBtnCick.bind(this);
    this.delItem = this.delItem.bind(this);
  }

  changeInputVal(event) {
    //   新版语法
    const value = event.target.value;
    // const value = this.input.value; // 建议不要使用ref直接操作dom
    this.setState(
      () => {
        return {
          inputVal: value,
        };
      },
      () => {
        // setState 是异步函数，如果需要等更新之后获取页面数据，则需要写在这里
        console.log(this.input.value);
      }
    );
    // this.setState({
    //   inputVal: event.target.value,
    // });
  }

  // 添加list
  handelBtnCick() {
    this.setState((prevState) => {
      return {
        list: [...prevState.list, prevState.inputVal],
        inputVal: "",
      };
    });
    // this.setState({
    //   list: [...this.state.list, this.state.inputVal],
    //   inputVal: ''
    // })
  }

  // 删除list
  delItem(index) {
    console.log(index);
    // this.state.list.splice(index, 1); // 这样并不好
    // this.setState({
    //   list: this.state.list // 有效但不好
    // })
    // immutable: state 不允许我们做任何的改变，会影响后续性能优化
    const list = [...this.state.list];
    list.splice(index, 1);
    this.setState({
      list: list,
    });
  }

  render() {
    console.log("render"); // input 输入值时，也会执行？
    return (
      // 组件——占位符
      <Fragment>
        <div>
          <input
            className="myInput"
            value={this.state.inputVal}
            onChange={this.changeInputVal}
            ref={(input) => {
              this.input = input;
            }}
          />
          <button onClick={this.handelBtnCick}>添加</button>
          {/* ---todolist 列表--- */}
          {
            // 单行注释，不能放一行
          }
          <ul>
            {this.state.list.map((item, index) => {
              return (
                <TodoItem
                  text={item}
                  index={index}
                  delItemFn={this.delItem}
                  key={index}
                />
                // dangerouslySetInnerHTML={{__html: item}} 不转译
                //   <li key={index} onClick={this.delItem.bind(this, index)}
                //   >{item}</li>
              );
            })}
          </ul>
        </div>
      </Fragment>
    );
  }
}
export default TodoList;
