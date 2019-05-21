import React, { Component } from 'react'
import Aguy from '../images/aguy.png'
import Stand from '../images/stand.png'
import Sit from '../images/sitting.png'
import styled from 'styled-components'

const Paraone = styled.div`
font-size:40px;
font-family: 'Merriweather', serif;
font-weight:bold;
margin-left:2em;

`
const Paratwo = styled.div`
font-size:20px;
font-family: 'Merriweather', serif;
font-weight:bold;
margin-left:4em;

`
export class Simple extends Component{
    render(){
        return(
            <div>
            <div class="row" >
                <div class="col s6 left" style={{marginTop:150}}>
                    <Paraone>Simple</Paraone><br/>
                    <Paratwo>Insurance does not have to be comcplicate. Just tell us 
                    a <br/>little bit about what you would like to protect  and we'll<br/>
                    make sure you get a plan you have</Paratwo>
                </div>
                <div class="col s6"><img src={Aguy}/></div>
            </div>
            <div class="row" >
            <div class="col s6"><img src={Stand}/></div>
                <div class="col s6 left" style={{marginTop:150}}>
                    <Paraone>Smart</Paraone><br/>
                    <Paratwo>No need to compare endless sites for most valueable<br/> 
                        protection, we wil suggest you a plan that fits the bill<br/> perfectly, 
                        and if you'd like to explore,you can do that too!</Paratwo>
                </div>
                
            </div>
            <div class="row" >
                <div class="col s6 left" style={{marginTop:150}}>
                    <Paraone>Affodable</Paraone><br/>
                    <Paratwo>We know no one likes paying a high price to make sure
                        <br/> their loved device is safe, and now, you don't have to.</Paratwo>
                </div>
                <div class="col s6"><img src={Sit}/></div>
            </div>
            <p class="center-align">
                <button class="btn-large red" type="submit" name="action" style={{borderRadius:10}}>Check Our PRICES</button>
                </p>
            </div>
        );
    }
}

export default Simple;