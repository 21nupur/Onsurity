import React, { Component } from 'react'
import {Link } from 'react-router-dom'
import logo from '../images/OIA.png'
import RightNavbar from './RightNavbar'

export class LeftNavbar extends Component {
  render() {
    return(
      <div >
        <div style={{marginBottom: 10}}>
      <nav class="z-depth-0">
    <div class="nav-wrapper white" >
      <a href="#" class="brand-logo left" ><img   style={{marginBottom: 10,marginLeft: 10}} src={logo}></img></a>
     <RightNavbar/>
    </div>
  </nav>
  </div>    
  </div>
    );
}
}

export default LeftNavbar
