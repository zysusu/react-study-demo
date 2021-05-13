/**
 * 定义actions，统一管理
 */

import axios from "axios";
import {
  CHANGE_INPUT_VALUT,
  ADD_TODO_ITEM,
  DELETE_TODO_ITEM,
  INIT_LIST,
} from "./actionTypes";

// 修改input的值
export const getInputChangeAction = (value) => ({
  type: CHANGE_INPUT_VALUT,
  value,
});

// 添加todo item
export const getAddItemAction = () => ({
  type: ADD_TODO_ITEM,
});

// 删除todo item
export const getDeleteItemAction = (index) => ({
  type: DELETE_TODO_ITEM,
  value: index,
});

// 初始化data
export const initListAction = (data) => ({
  type: INIT_LIST,
  value: data,
});

// 使用中间件之后可提取axios
export const getTodoList = () => {
  // 返回的为函数，必须使用redux-thunk中间件
  return (dispatch) => {
    axios.get("http://test-toss.oa.zego.im/toss/getUser").then((res) => {
      console.log(res);
      const data = ["hello", "world"];
      const action = initListAction(data);
      dispatch(action);
    });
  };
};
