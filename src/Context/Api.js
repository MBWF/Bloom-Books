import axios from 'axios'
import React, { createContext, useContext, useEffect, useState } from "react"

export const ApiContext = createContext()

export default function ApiProvider({children}) {
	const [listNames, setListNames] = useState([])
	const [books, setBooks] = useState([])

	async function getBooks(encoded) {
		const res = await axios.get(
		`https://api.nytimes.com/svc/books/v3/lists/current/${encoded}.json?api-key=${process.env.REACT_APP_BOOKS_API_KEY}`
		)
		setBooks(res.data.results.books)
		console.log(res.data)
		getBooks()
	}

	useEffect(() => {
		async function getGenres() {
		  const res = await axios.get(
			`https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=${process.env.REACT_APP_BOOKS_API_KEY}`
		  )
		  setListNames(res.data.results)
		  console.log(res.data)
		}
	
		getGenres()
	  }, [])

	return (
		<ApiContext.Provider value={{
			listNames,
			setListNames,
			books,
			setBooks,
			getBooks
		}}>
		{children}
	</ApiContext.Provider>
	)
	
}

export function useApi() {
	const context = useContext(ApiContext)
	const {listNames, setListNames, books, setBooks, getBooks} = context
	return {listNames, setListNames, books, setBooks, getBooks}
}