import React, { useState } from 'react';
import { AiFillStar } from 'react-icons/ai'


import './styles.scss';
import Organization from '../Organization/Organization';

function Nav() {
  return (
    <div className="top-menu" >
      <nav>
        <h1>Bloom Books</h1>
        <input type="text" placeholder="Pesquise aqui" />
        <AiFillStar style={{color: 'white'}} />
      </nav>
     
    </div>
  )
}

export default Nav;