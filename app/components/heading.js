import React, { Component } from 'react'
import styled from 'styled-components'

const Paraone = styled.p`
font-size:40px;
font-family: 'Merriweather', serif;
font-weight:bold;
text-align: center;
`;
const Paratwo = styled.p`
font-size:20px;
font-family: 'Merriweather', serif;
text-align: center;
`


export class heading extends Component {
  render() {
    return (
      <div>
        <Paraone>
              Insurance that Works for You
       </Paraone>
       <Paratwo style={{marginTop:-40}}><b>Simple.Smart.Affordable</b></Paratwo>
        
      </div>
    )
  }
}

export default heading
