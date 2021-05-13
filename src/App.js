import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";
import TodoList from "./TodoList/index";
import TodoLists from "./NewTodo/TodoLists.js";
import Test from "./Test";
import HookExam from "./Demo/Hook";

// 使用Link，单页面应用，路由切换不会再次加载html
class App extends Component {
  render() {
    // jsx 语法需要引入React
    return (
      <Fragment>
        <Router>
          {/* router 里只能有一个children */}
          <ul>
            <li className="my-li">
              <Link to="/">List</Link>
            </li>
            <li>
              <Link to="/todo">TodoLists</Link>
            </li>
            <li>
              <Link to="/test/123">Test</Link>
            </li>
            <li>
              <Link to="/hook">HookExam</Link>
            </li>
          </ul>
          {/* exact： 匹配仅/时显示，其他/xxx时不显示 */}
          <Route path="/" exact component={TodoList}></Route>
          <Route path="/todo" component={TodoLists}></Route>
          <Route path="/test/:id" component={Test} />
          <Route path="/hook" component={HookExam} />
        </Router>
        {/* <TodoList /> */}
      </Fragment>
    );
  }
}

export default App;
