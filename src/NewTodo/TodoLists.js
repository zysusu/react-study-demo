import React, { Component } from "react";
import store from "../store/index";
import axios from "axios";
import { CHANGE_INPUT_VALUT, ADD_TODO_ITEM } from "../store/actionTypes";
import TodoListUi from "./TodoListUi";
import {
  getDeleteItemAction,
  getTodoList,
  initListAction,
} from "../store/actionCreators"; // 提取action

class TodoLists extends Component {
  constructor(props) {
    super(props);
    this.inputChange = this.inputChange.bind(this);
    this.handelStoreChange = this.handelStoreChange.bind(this);
    this.handelAddItem = this.handelAddItem.bind(this);
    this.delItem = this.delItem.bind(this);
    store.subscribe(this.handelStoreChange); // 订阅store的改变

    this.state = {
      inputVal: store.getState().inputVal,
      list: store.getState().list,
    };
  }

  inputChange(event) {
    console.log(event.target.value);
    const action = {
      // type: "change_input_value",
      type: CHANGE_INPUT_VALUT,
      value: event.target.value,
    };

    store.dispatch(action);
  }

  // 监听store的变更，然后更新state
  handelStoreChange() {
    this.setState(store.getState());
  }

  // 不提取action的实现方法
  handelAddItem() {
    const action = {
      type: ADD_TODO_ITEM,
    };
    store.dispatch(action);
  }

  // 提取action的实现方法
  delItem(index) {
    const action = getDeleteItemAction(index);
    store.dispatch(action);
  }

  componentDidMount() {
    store.dispatch(getTodoList());
    // axios.get("http://test-toss.oa.zego.im/toss/getUser").then((res) => {
    //   console.log(res);
    //   const data = ["hello", "world"];
    //   const action = initListAction(data);
    //   store.dispatch(action);
    // });
  }

  render() {
    return (
      <TodoListUi
        inputVal={this.state.inputVal}
        list={this.state.list}
        inputChange={this.inputChange}
        handelAddItem={this.handelAddItem}
        delItem={this.delItem}
      ></TodoListUi>
      // <div style={{ padding: "20px" }}>
      //   <Input
      //     placeholder="todo info"
      //     value={this.state.inputVal}
      //     style={{ width: "400px", marginRight: "20px" }}
      //     onChange={this.inputChange}
      //   />
      //   <Button type="primary" onClick={this.handelAddItem}>
      //     提交
      //   </Button>
      //   <List
      //     style={{ width: "400px" }}
      //     bordered
      //     dataSource={this.state.list}
      //     renderItem={(item, index) => (
      //       <List.Item onClick={this.delItem.bind(this, index)}>
      //         {item}
      //       </List.Item>
      //     )}
      //   />
      // </div>
    );
  }
}

export default TodoLists;
