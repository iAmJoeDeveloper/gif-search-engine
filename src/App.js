import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './css/App.css'
import SearchBar from './components/SearchBar'
import ListOfGif from './components/ListOfGif'

function App() {
	// const [gifs, setGifs] = useState([])

	// useEffect(() => {
	// 	getGifs({ keyword: 'programing' }).then((data) => setGifs(data))
	// }, [])

	return (
		<Router>
			<div className='App'>
				<header>
					<h1>Gif Search Engine</h1>
					<SearchBar />
					<nav>
						<ul>
							<li>
								<Link to='/sports'>Sports</Link>
							</li>
							<li>
								<Link to='/food'>Food</Link>
							</li>
						</ul>
					</nav>
				</header>
				<section>
					{/* <ListOfGif keyword='Canada' /> */}
					<Routes>
						<Route path='/' element={<ListOfGif keyword='canada' />} />
						<Route path='/sports' element={<ListOfGif keyword='sports' />} />
						<Route path='/food' element={<ListOfGif keyword='food' />} />
					</Routes>
				</section>
			</div>
		</Router>
	)
}

const Car = () => {
	return (
		<div>
			<p>Car</p>
		</div>
	)
}

export default App
