import React, { Component } from 'react';
import { getCount } from 'api/api';
class GetData extends Component {
  state = {
    res: null
  };
  componentDidMount() {
    this.getData();
  }
  getData = async () => {
    const res = await getCount({ name: '122', city: ['北京', '上海'], number: [1, 3] });
    console.log('res::::', res);
    this.setState({ res });
  };
  render() {
    return <div>data::::{JSON.stringify(this.state.res)}</div>;
  }
}

export default GetData;
