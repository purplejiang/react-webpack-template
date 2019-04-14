import React, { Component } from 'react';
import { Button } from 'antd';
import { connect } from 'react-redux';
import { increment, decrement, addnumber } from '../store/actions/count';

@connect(
  state => ({
    count: state.counter.count
  }),
  {
    increment,
    decrement,
    addnumber
  }
)
class Counter extends Component {
  add = () => {
    this.props.increment();
  };
  sub = () => {
    this.props.decrement();
  };
  addTwo = number => {
    this.props.addnumber(number);
  };
  render() {
    return (
      <div style={{ border: '1px solid red', padding: '24px' }}>
        <Button onClick={this.sub}>-</Button>
        <span style={{ margin: '0 10px' }}>{this.props.count}</span>
        <Button onClick={this.add}>+</Button>
        <Button onClick={this.addTwo.bind(this, 2)}>+2</Button>
      </div>
    );
  }
}

export default Counter;
