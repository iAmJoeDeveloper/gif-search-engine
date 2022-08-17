import React, { useState, useEffect } from 'react'
import './css/App.css'
import SearchBar from './components/SearchBar'
import getGifs from './services/getGifs'

function App() {
	const [gifs, setGifs] = useState([])

	useEffect(() => {
		getGifs({ keyword: 'panda' }).then((data) => setGifs(data))
	}, [])

	return (
		<div className='App'>
			<header>
				<h1>Gif Search Engine</h1>
				<SearchBar />
			</header>
			<section>
				{gifs.map((singleGif) => (
					<img key={singleGif.id} alt='Gif' src={singleGif.images.downsized_medium.url} />
				))}
			</section>
		</div>
	)
}

export default App
