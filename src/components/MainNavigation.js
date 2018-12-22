import React, { Component } from 'react'

class MainNavigation extends Component {
   render() {
       return (
          <nav className="navbar navbar-light bg-light"  color="white">
          <div className="container">
            <a className="navbar-brand" onClick={this.props.toggle} >
              <span className="navbar-toggler-icon" />
            </a>

            <nav className="ml-auto" >
              <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <a className="nav-link" href="/login/">Sign In</a>
              </li>
              </ul>
            </nav>
          </div>
        </nav>
       );
   }
}


export default MainNavigation;
