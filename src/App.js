import React, { useState, useEffect } from 'react'
import './css/App.css'
import SearchBar from './components/SearchBar'
import ListOfGif from './components/ListOfGif'

function App() {
	// const [gifs, setGifs] = useState([])

	// useEffect(() => {
	// 	getGifs({ keyword: 'programing' }).then((data) => setGifs(data))
	// }, [])

	return (
		<div className='App'>
			<header>
				<h1>Gif Search Engine</h1>
				<SearchBar />
			</header>
			<section>
				<ListOfGif keyword='Venezuela' />
			</section>
		</div>
	)
}

export default App
