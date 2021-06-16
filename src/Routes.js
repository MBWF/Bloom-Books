import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Books from './Pages/Books/Books'

import Genre from './Pages/Genre/Genre'

function Routes() {
	return (
		<BrowserRouter>
			<Switch>
				<Route component={Genre} path='/' exact />
				<Route component={Books} path='/books' exact />
			</Switch>
		</BrowserRouter>
	)
    
}

export default Routes