import React , {Component} from 'react';
import {Link} from 'react-router'
export default class Loader extends Component{

  render(){
    return(
      <div className="loader">
        <img className="logo" src="../../public/img/logo.svg"/>
        <Link to="/main">
           <img className="arrow" src="../../public/img/arrow.svg" />
        </Link>

      </div>
    )
  }
}
