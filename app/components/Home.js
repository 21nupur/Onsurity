import React, { Component } from 'react'
import Navbar from './LeftNavbar'
import Heading from './heading'
import Lady from './Lady'
import Easier from './Easier'
import Footer from './Footer'

export class Home extends Component {
  render() {
    return (
      <div style={{display:'flex',flexDirection:'column',border : '1px solid black', margin:20}}>
       <Navbar/>
       <Heading/><br/>
       <br/>
       <Lady/><br/>
       <Easier/>
       <Footer/>
      </div>
    )
  }
}

export default Home
