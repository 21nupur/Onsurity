import React, { Component } from 'react'
import logo from '../images/OIAA.png'

export class Footer extends Component{
    render(){
        return(
            <footer class="page-footer grey darken-3">
          <div class="container">
            <div class="row">
            <div class="col m4 ">
                <img  src={logo}/>
              </div>
              <div class="col m4 center">
                <h5 class="white-text">Navigation</h5>
                <ul>
                  <li><a class="grey-text text-lighten-3" href="#!" align="left">About <b>.</b> </a><a class="grey-text text-lighten-3" href="#!">Products <b>.</b> </a><a class="grey-text text-lighten-3" href="#!">Claims <b>.</b> </a><a class="grey-text text-lighten-3" href="#!">Plans <b>.</b> </a><a class="grey-text text-lighten-3" href="#!">Terms Of Use</a></li>
                </ul>
              </div>
              <div class="col m4 center">
                <h5 class="white-text right">Conatct
                <br/><span style={{fontSize:15}}>info@onsurity.com<br/>+123456789</span></h5>
             
              </div>
            </div>
          </div>
          <div class="footer-copyright">
            <div class="container">
            © Onsurity All Rights Reserved 2019
            </div>
          </div>
        </footer>
        );
    }
}
export default Footer