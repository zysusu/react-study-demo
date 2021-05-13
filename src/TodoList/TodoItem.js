import React, { Component } from "react";
import PropTypes from "prop-types"; // 对props进行类型校验

class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.handelDel = this.handelDel.bind(this); // 相比直接在dom中bind会节约一些性能
  }

  handelDel() {
    const { delItemFn, index } = this.props;
    delItemFn(index);
    // 子组件调用父组件的方法
  }

  // 通过this.props.xxx 获取父组件传递的xxx属性
  render() {
    return <div onClick={this.handelDel}>{this.props.text}</div>;
  }
}
// propTypes 设置传值类型定义
TodoItem.propTypes = {
  text: PropTypes.string.isRequired,
  delItemFn: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
  // test: PropTypes.oneOfType(PropTypes.string, PropTypes.number), // 非必传
  // arrayOf 表示格式为数组，其内容为xxx类型
};
// defaultProps设置默认值
TodoItem.defaultProps = {
  test: "hello",
};

export default TodoItem;
