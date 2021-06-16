import React, { useState } from 'react';
import { FiAlignJustify } from 'react-icons/fi';
import { MdBorderAll } from 'react-icons/md';
import './styles.scss';

function Organization({listType, title}) {
	const [list, setList] = useState(true)
  
  function typeList() {
    listType(true)
    setList(true)
  }

  function typeBlock() {
    listType(false)
    setList(false)
  }
	
  return (
    <div className="organization" >
    <h2>{title}</h2>
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
        <FiAlignJustify id={list ? "active" : ""} onClick={typeList}  />
        <MdBorderAll id={list ? "" : "active"} onClick={typeBlock} />
      </div>
    </div>
  </div>
  )
}

export default Organization;