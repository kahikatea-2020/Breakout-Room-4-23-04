import React from 'react'
import {Route} from 'react-router-dom'

import Header from './Header'
import Card from './Card'
import Home from './Home'

const App = () => {
	return (
		<div className='container'>
			<Header />
			<Home />
			
		</div>
	)
}

export default App
