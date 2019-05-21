import React, { Component } from 'react'
import Navbar from './LeftNavbar'
import Heading from './heading'
import Lady from './Lady'
import Easier from './Easier'
import Footer from './Footer'
import Simple from './Simple'
import Hereiswhyone from './Hereiswhyone'
import {BrowserRouter} from 'react-router-dom';

export class Home extends Component {
  render() {
    return (
      <div style={{display:'flex',flexDirection:'column',border : '1px solid black', margin:20}}>
       <Navbar/><br/><br/>
       <Heading/><br/><br/><br/>
       <br/>
       <Lady/><br/>
       <Easier/><br/><br/><br/><br/><br/><br/><br/><br/>
       <Simple/><br/><br/><br/><br/><br/><br/><br/><br/>
       <Hereiswhyone/>
       <Footer/>
      </div>
    )
  }
}

export default Home
