import logo from './../../assets/image/logo.png'
import React, {useEffect, useState} from 'react';
import './index.css'
const Bridge = () => {

  return (
    <div className="bridge-container">
      <div className="bridge-nav flex">
        <div className="bridge-logo">
          <img src={logo}/>
        </div>
        <div className="bridge-btn">
          Lunch App
        </div>
      </div>

      <div className="bridge-content">
        <h2 className="bridge-content-title title1">Agentic Lending DAO:</h2>
        <h2 className="bridge-content-title title2">Innovative lending for RWAFi</h2>
        <div className="bridge-content-desc">
          Bridge non custodial crypto to power the real world,<br />powered by the agent framework
        </div>
      </div>

    </div>
  );
}

export default Bridge;