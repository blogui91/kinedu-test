import React from 'react'
import './app.scss'
import { Rounded } from 'src/components/Buttons'

import Navbar from 'components/Navbar'
import Icon from 'src/components/Icon/index.jsx'
import Home from 'src/pages/Home.jsx'

function App (props) {

  return (
    <>
      <Navbar fixed={true}/>
      <div style={{transform: 'translateY(-50%)', position: 'fixed', top: '50%', 'left': '10px'}}>
        <Rounded color="#75B753">
          <Icon name="arrow_back" color="#fff"/>
        </Rounded>
      </div>s
      <div className="container">
        <Home />
      </div>
      <div style={{transform: 'translateY(-50%)', position: 'fixed', top: '50%', 'right': '10px'}}>
        <Rounded color="#75B753">
          <Icon name="arrow_forward" color="#fff"/>
        </Rounded>
      </div>
    </>
  )
}

export default App
