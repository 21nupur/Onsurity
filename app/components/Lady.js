import React, { Component } from 'react'
import LDP from '../images/LadyWithPhone.png'
import styled from 'styled-components'


export class Lady extends Component{
    render(){
        return(
            <div class="row">
            <div class="col s6 m4 l5 offset-m2 offset-l1 ">
            <div class="card white darken-1 fixed" style={{height:350,width:800,marginTop:80,borderRadius:10}} >
                    <div class="card-content white-text">
                        <br/>   
                    <select class="browser-default" style={{borderRadius:10}} >
                <option value="" disabled selected>Select Your Brand</option>
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
                <option value="3">Option 3</option>
                  </select>
                 <br/>
                  <select class="browser-default" style={{borderRadius:10}}>
                <option value="" disabled selected>Select Your Model</option>
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
                <option value="3">Option 3</option>
                 </select>
                 <br/>
                 <select class="browser-default" style={{borderRadius:10}}>
                <option value="" disabled selected>Why did you buy it?</option>
                <option value="1">Just for fun</option>
                <option value="2">Just for fun</option>
                <option value="3">Just for fun</option>
               </select>
               <br/>
               <br/>
                <p class="center-align">
                <button class="btn-large red" type="submit" name="action" style={{borderRadius:10}}>Get Insured</button>
                </p>
                 </div>
                 </div>
                </div>
            <div class="col s6 m7 l6 "><img  class="responsive-img" style={{height:600,width:900}} src={LDP}/></div>
                
          
        
             </div>
        );
    }
}

export default Lady;