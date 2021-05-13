import {
  CHANGE_INPUT_VALUT,
  ADD_TODO_ITEM,
  DELETE_TODO_ITEM,
  INIT_LIST,
} from "./actionTypes";
const defultState = {
  inputVal: "",
  list: ["11", "22"],
};

// reducer 可以接受state，但是不能改变state
// reducer 必须是纯函数：给定固定的输入，就一定会有固定的输出，而且不会有任何副作用(不能修改state)
export default (state = defultState, action) => {
  let newState = {};
  switch (action.type) {
    case CHANGE_INPUT_VALUT:
      newState = {
        ...state,
        inputVal: action.value,
      };
      return newState;
    case ADD_TODO_ITEM:
      newState = {
        ...state,
        list: [...state.list, state.inputVal],
        inputVal: "",
      };
      return newState;
    case DELETE_TODO_ITEM:
      const newList = [...state.list];
      newList.splice(action.value, 1);
      newState = {
        ...state,
        list: newList,
      };
      return newState;
    case INIT_LIST:
      newState = {
        ...state,
        list: action.value,
      };
      return newState;
  }
  return state;
};
