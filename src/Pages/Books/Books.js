import React, { useState } from 'react';
import Nav from '../../Components/Nav/Nav';
import Organization from '../../Components/Organization/Organization';
import { useApi } from '../../Context/Api';

import './styles.scss';

function Books() {
  const [listOrganization, setListOrganization] = useState(true) 

  const {books} = useApi()
  const {encodedName} = useApi()

  return (
    <>
      <Nav /> 
      <Organization listType={setListOrganization} title={encodedName} />
      {books ? (
        <>
          {books.map(e => (
            <div className="cardBooks" >
              <img src={e.book_image} alt="" />
              <div className="booksInfos" >
                <h4>{e.title} by {e.author} *</h4>
                <p>{e.description}</p>
                <p>Editora: {e.publisher}</p>
                <p>Rank: {e.rank}</p>
                <button>Compre por R${e.price}</button>
              </div>
            </div>
          ))}
        </>
      )
      :
      <div />
      }
      
    </>
    
  )
}

export default Books;