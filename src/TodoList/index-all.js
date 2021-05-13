import React, { Component, Fragment } from "react";
import "./todo.css";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputVal: "hello",
      list: ["react", "nodejs"],
    };
    // this.changeInputVal = this.changeInputVal.bind(this);
  }

  changeInputVal(event) {
    console.log(event.target);
    this.setState({
      inputVal: event.target.value,
    });
  }

  // 添加list
  handelBtnCick() {
    this.setState({
      list: [...this.state.list, this.state.inputVal],
      inputVal: "",
    });
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
    return (
      // 组件——占位符
      <Fragment>
        <div>
          <input
            className="myInput"
            value={this.state.inputVal}
            onChange={this.changeInputVal.bind(this)}
          />
          <button onClick={this.handelBtnCick.bind(this)}>添加</button>
          {/* ---todolist 列表--- */}
          {
            // 单行注释，不能放一行
          }
          <ul>
            {this.state.list.map((item, index) => {
              return (
                // dangerouslySetInnerHTML={{__html: item}} 不转译
                <li key={index} onClick={this.delItem.bind(this, index)}>
                  {item}
                </li>
              );
            })}
          </ul>
        </div>
      </Fragment>
    );
  }
}
export default TodoList;
