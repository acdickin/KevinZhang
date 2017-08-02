import React , {Component} from 'react';
import Sidebar from './sidebar'
export default class Main extends Component{

  render(){
    return(
      <div className="main">
        <Sidebar></Sidebar>
      </div>
    )
  }
}
