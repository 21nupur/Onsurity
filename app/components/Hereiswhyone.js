import React, { Component } from 'react'
import styled from 'styled-components'
import Hereiswhy from '../images/hereiswhy.png'

const Paraone = styled.div`
font-size:40px;
font-family: 'Merriweather', serif;
font-weight:bold;
text-align:center;
`

export class Hereiswhyone extends Component{
    render(){
        return(
            
            <div style={{alignSelf:"center"}}> 
                <Paraone>
                Here's Why You'll Love Us!! 
                 </Paraone>
                <img src={Hereiswhy}/>
            </div>
        );
    }
}

export default Hereiswhyone;