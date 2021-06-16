import React, { useEffect, useState } from 'react';
import axios from 'axios'
import './styles.scss';
import Pagination from '../../Components/Pagination/Pagination';

function Genre() {
  const [info, setInfo] = useState({});
  const [text, setText] = useState('');
  const [offset, setOffset] = useState(0);
  const [totalItens, setTotalItens] = useState(0)


  const [listNames, setListNames] = useState([])
  useEffect(() => {
    async function fetchBooks() {
      const res = await axios.get(
        `https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=${process.env.REACT_APP_BOOKS_API_KEY}`
      )
      setListNames(res.data.results)
      setTotalItens(res.data.num_results)
      console.log(res.data.num_results)
    }

    fetchBooks()
  }, [])

  return (
      <div className="genre" >
        {listNames.map((e) => (
          <div key={Math.random()} className="all-genres" >
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

        {totalItens != 0 && (
          <Pagination
          limit={5}
          total={totalItens}
          offset={offset}
          setOffset={setOffset}
        />
        )}
        
          
          
      </div>
  )
}

export default Genre;