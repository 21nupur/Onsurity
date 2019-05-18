import React, { Component } from 'react'
import {NavLink } from 'react-router-dom'
import styled from 'styled-components'
import Apple from '../images/apple.png'
import Play from '../images/play-store.png'

const Styles = styled.li`
font-family: 'Merriweather', serif;
font-weight:bold;
`

export class RightNavbar extends Component{
    render(){
        return(
            
            <ul className="right">
                <Styles>
                <li><NavLink to='/'style={{color:'black',fontSize:13}} >Claims</NavLink></li>
                <li><NavLink to='/' style={{color:'black',fontSize:13}}>About</NavLink></li>
                <li><NavLink to='/' style={{color:'black',fontSize:13}} >Contact us</NavLink></li>
                <li><NavLink to='/' style={{color:'black',fontSize:13}}>Contact us</NavLink></li>
                <li><NavLink to='/' style={{color:'black',fontSize:13}}>Login</NavLink></li>
                <li><NavLink to='/'><img src={Play}/></NavLink></li>
                <li><NavLink to='/'><img src={Apple}/></NavLink></li>
            
                </Styles>
            </ul>
          
        );
    }
}

export default RightNavbar