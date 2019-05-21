import React, { Component } from 'react'
import styled from 'styled-components'
import Device from '../images/DeviceGIF.png'
import Insured from '../images/InsuredGIF.png'
import Select from '../images/SelectGIF.png'


const Paraone = styled.p`
font-size:40px;
font-family: 'Merriweather', serif;
font-weight:bold;
text-align: center;
`;

export class Easier extends Component{
    render(){
      
        return(
            <div>
            <div>
                <Paraone>
                    It's Easier than You Think
                </Paraone>
                </div><br/><br/>
                <div class="row">
                <div class="col  m3  offset-m1 center"><img class="responsive-img" style={{height:250}} src={Device}/>
                <br/><Paraone style={{fontSize:20}}><p>Tell us About your Device</p></Paraone>
                </div>
                <div class="col m3 offset-m1 center"><img class="responsive-img" style={{height:250}} src={Select}/>
                <br/><Paraone style={{fontSize:20}}><p>Select a personalised Plan</p></Paraone>
                </div>
                <div class="col  m4 offset-m0 center"><img class="responsive-img" style={{height:250}} src={Insured}/>
                <br/><Paraone style={{fontSize:20}}><p>Pay and get Insured Instantly</p></Paraone>
                </div>
            </div>
            </div>
        );
    }
} 

export default Easier;