import React from 'react';
import { AiFillStar } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import './styles.scss';

function Nav() {
  return (
    <div className="top-menu" >
      <nav>
        <Link to="/" style={{textDecoration: "none"}} ><h1>Bloom Books</h1></Link>
        <input type="text" placeholder="Pesquise aqui" />
        <AiFillStar style={{color: 'white'}} />
      </nav>
     
    </div>
  )
}

export default Nav;