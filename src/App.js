import React, { Component } from 'react';
import { DatePicker,Card,Select } from 'antd';
import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router'

class App extends Component {
  render() {
    return (
      <Card title="hello">
      	 <Link to="/login">我们都御史2</Link>
      	 <Link to="/regist">我们都御史1</Link>
      	 <div>
      	 		{this.props.children}
      	 </div>
      </Card>
    );
  }
}

export default App;
