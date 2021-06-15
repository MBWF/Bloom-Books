import React, { useEffect, useState } from 'react';
import { getListNames } from '../../api';
import './styles.scss';

function Genre() {
  const [listNames, setListNames] = useState([])
  useEffect(() => {
    setListNames(getListNames())
  }, [])

  return (
      <div className="genre" >
        {listNames.map((e) => (
          <div className="all-genres" >
            <div className="names" >
              <h1>{e.list_name}</h1>
              <p>Atualizado em: {e.newest_published_date}</p>
            </div>
            <div className="infos" >
              <h4>Última Publicação: {e.newest_published_date}</h4>
              <h4>Publicação mais antiga: {e.oldest_published_date}</h4>
            </div>
        </div>
        ))}
          
          
      </div>
  )
}

export default Genre;