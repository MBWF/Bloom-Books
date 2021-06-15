import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Genre from './Pages/Genre/Genre'

function Routes() {
	return (
		<BrowserRouter>
			<Switch>
				<Route component={Genre} path='/' exact />
			</Switch>
		</BrowserRouter>
	)
    
}

export default Routes