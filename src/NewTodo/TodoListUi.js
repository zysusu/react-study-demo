import React, { Component } from "react";
import { Input, Button, List } from "antd";
import "antd/dist/antd.css";

// 无状态组件——性能较高（不带生命周期函数）
const TodoListUi = (props) => {
  return (
    <div style={{ padding: "20px" }}>
      <Input
        placeholder="todo info"
        value={props.inputVal}
        style={{ width: "400px", marginRight: "20px" }}
        onChange={props.inputChange}
      />
      <Button type="primary" onClick={props.handelAddItem}>
        提交
      </Button>
      <List
        style={{ width: "400px" }}
        bordered
        dataSource={props.list}
        renderItem={(item, index) => (
          <List.Item onClick={() => props.delItem(index)}>{item}</List.Item>
        )}
      />
    </div>
  );
};

// UI 组件(傻瓜组件)
// class TodoListUi extends Component {
//   // eslint-disable-next-line no-useless-constructor
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     return (
//       <div style={{ padding: "20px" }}>
//         <Input
//           placeholder="todo info"
//           value={this.props.inputVal}
//           style={{ width: "400px", marginRight: "20px" }}
//           onChange={this.props.inputChange}
//         />
//         <Button type="primary" onClick={this.props.handelAddItem}>
//           提交
//         </Button>
//         <List
//           style={{ width: "400px" }}
//           bordered
//           dataSource={this.props.list}
//           renderItem={(item, index) => (
//             <List.Item onClick={(index) => this.props.delItem(index)}>
//               {item}
//             </List.Item>
//           )}
//         />
//       </div>
//     );
//   }
// }

export default TodoListUi;
