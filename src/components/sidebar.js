import React, {Component} from 'react'

export default class Sidebar extends Component{
  render(){
    return(
      <div className="sidebar">
        <div className="sidebar-center">
          <div className='logo-box'>
            <img  className='logo-side' src="../../public/img/logo.svg"/>
          </div>

          <div className="nav">
            <p className="nav-title">Home</p>
            <p className="nav-title">Portfolio</p>
            <div className="portfolio-list list">
              <a className="list-item" href="qa"> QA </a>
              <a className="list-item" href="ios"> IOS </a>
              <a className="list-item" href="driod"> Andriod </a>
              <a className="list-item" href="web"> Web </a>
            </div>
            <p className="nav-title">Hobbies</p>
            <div className="hobbies-list list">
              <a className="list-item" href="tennis"> Tennis</a>
              <a className="list-item" href="auto"> Automobiles </a>
              <a className="list-item" href="sneakers"> Sneakers </a>
              <a className="list-item" href="anime"> Anime </a>
              <a className="list-item" href="Travel"> Travel </a>
            </div>
            <p className="nav-title">Philanthropy</p>
            <p className="nav-title">Colleagues</p>
            <div className="colleagues-list list">
              <a className="list-item" href="web"> Web </a>
              <a className="list-item" href="graphics"> Graphics </a>
              <a className="list-item" href="software"> Software</a>
              <a className="list-item" href="fiance"> Fiance </a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
