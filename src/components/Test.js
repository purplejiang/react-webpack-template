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
  }
  handleClick = () => {
    console.log(222);
  };
  render() {
    console.log(this.props);
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
      </div>
    );
  }
}

export default Test;
