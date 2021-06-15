import React, { useState } from 'react';
import { AiFillStar } from 'react-icons/ai'
import { MdBorderAll } from 'react-icons/md'
import { FiAlignJustify } from 'react-icons/fi'

import './styles.scss';

function Nav() {
  const [list, setList] = useState(true)

  return (
    <div className="top-menu" >
      <nav>
        <h1>Bloom Books</h1>
        <input type="text" placeholder="Pesquise aqui" />
        <AiFillStar style={{color: 'white'}} />
      </nav>
      <div className="organization" >
        <h2>Gêneros</h2>
        <div className="show" >
          <div className="number" >
          Exibir
            <select>
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="15">15</option>
            </select> por vez
          </div>
          <div className="icons" >
            <FiAlignJustify id={list ? "active" : ""} onClick={() => setList(true)}  />
            <MdBorderAll id={list ? "" : "active"} onClick={() => setList(false)} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Nav;