import React,{Component} from 'react';
import { render } from 'react-dom';

class Index extends Component{
  render(){
    return(
      <div>index</div>
    )
  }
}

render(<Index/>,document.getElementById('#root'))
