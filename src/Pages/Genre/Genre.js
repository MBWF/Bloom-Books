import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Nav from '../../Components/Nav/Nav';
import Organization from '../../Components/Organization/Organization';
import { useApi } from '../../Context/Api';
import './styles.scss';

function Genre() {
  const {listNames} = useApi()
  const {getBooks} = useApi()
  
  const [listOrganization, setListOrganization] = useState(true)  

  return (
    <>
    <Nav /> 
    <Organization listType={setListOrganization} title="Gênero" />
      <div className={listOrganization ? "genre" : "block"} >
        {listNames.map((e) => (
          <div key={Math.random()} className="all-genres" >
            <div className="names" >
              <Link style={{color: "blue"}} to='/books' ><h1 onClick={() => getBooks(e.list_name_encoded)} >{e.list_name}</h1></Link>
              <p>Atualizado em: {e.newest_published_date}</p>
            </div>
            <div className="infos" >
              <h4>Última Publicação: {e.newest_published_date}</h4>
              <h4>Publicação mais antiga: {e.oldest_published_date}</h4>
            </div>
        </div>
        ))}
        </div>

        
      
      </>
  )
}

export default Genre;