import React, { Component } from 'react';
import { render } from 'react-dom';
import { Button, Input, Icon, DatePicker } from 'antd';

class Index extends Component {
  render() {
    return (
      <div>
        index
        <Button type="primary">3333</Button>
        <Input />
        <Icon type="windows" />
        <DatePicker />
      </div>
    );
  }
}

render(<Index />, document.getElementById('root'));
