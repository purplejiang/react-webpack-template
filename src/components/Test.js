import React, { Component } from 'react';
import './Test.css';
import { Button, Input, Icon, DatePicker } from 'antd';
import { get, isEmpty, cloneDeep } from 'lodash';
import moment from 'moment';
import { withRouter } from 'react-router';

@withRouter
class Test extends Component {
  componentDidMount() {
    const data = { name: '111', about: { age: 3, number: 4, content: 'vtgrgrgr' } };
    console.log(get(data, 'about.content'), isEmpty(data));
    const b = cloneDeep(data);
    console.log(b);
    console.log(moment().format('YYYY-MM-DD HH:mm:ss'));
    this.itemClick('1', '2', '3', '4', '5', '6');
  }
  itemClick = (a, b, c, d, e) => {
    console.log(a, b, c, d, e);
  };
  handleClick = () => {
    console.log(222);
  };
  render() {
    console.log(this.props);
    console.log('1111', '555', '3333');
    return (
      <div className="test">
        test
        <Button type="primary" onClick={this.handleClick}>
          333344444333
        </Button>
        <Input />
        <div>
          {moment().format('YYYY-MM-DD HH:mm:ss')}
          <br />
          {moment().format('YYYY-MM-DD HH:mm:ss')}
          {moment()
            .subtract(10, 'days')
            .calendar()}
          {moment()
            .subtract(6, 'days')
            .calendar()}
        </div>
        <Icon type="windows" />
        <DatePicker />
        <img src={require('../static/avatar.jpg')} />
        <img src={require('../static/more-blue.svg')} />
      </div>
    );
  }
}

export default Test;
