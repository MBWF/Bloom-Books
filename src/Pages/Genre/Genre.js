import React, { useEffect, useState } from 'react';
import axios from 'axios'
import './styles.scss';

function Genre() {
  const [listNames, setListNames] = useState([])
  useEffect(() => {
    async function fetchBooks() {
      const res = await axios.get(
        `https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=${process.env.REACT_APP_BOOKS_API_KEY}`
      )
      setListNames(res.data.results)
      console.log(res.data.results)
    }

    fetchBooks()
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