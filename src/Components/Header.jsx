import React from 'react'
import { NavLink } from 'react-router-dom';

export const Header = () => {
  return (
<div className='headerContainer'>
        <div className="header">
            <h1>XCRYPTO</h1>
        </div>
        <div className="linkContainer">
            <NavLink className="link" to="/">Home</NavLink>
            <NavLink className="link" to="/exchange">Exchange</NavLink> 
            <NavLink className="link" to="/coins">Coins</NavLink>
            <NavLink className="link" to="/about" >About</NavLink>
        </div>    
     
     </div>
  )
}


