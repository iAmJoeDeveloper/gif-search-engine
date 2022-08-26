import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Link, useParams } from 'react-router-dom'
import './css/App.css'
import './css/searchBarStyles.css'
import SearchBar from './components/SearchBar'
import ListOfGif from './components/ListOfGif'

function App() {
	// const [gifs, setGifs] = useState([])
	const [palabra, setPalabra] = useState('')

	// useEffect(() => {
	// 	getGifs({ keyword: 'programing' }).then((data) => setGifs(data))
	// }, [])

	return (
		<Router>
			<div className='App'>
				<main>
					<header>
						<h1>Gif Search Engine</h1>
						<h2>{palabra}</h2>
						<SearchBar setPalabra={setPalabra} />
						<nav id='mainMenu'>
							<ul>
								<li>
									<Link to='/' className='link-menu'>
										Home
									</Link>
								</li>
								<li>
									<Link to='/sports' className='link-menu'>
										Sports
									</Link>
								</li>
								<li>
									<Link to='/food' className='link-menu'>
										Food
									</Link>
								</li>
							</ul>
						</nav>
					</header>
					<section>
						{/* <ListOfGif keyword='Canada' /> */}
						<div className='gifContainer'>
							<Routes>
								<Route path='/' element={<ListOfGif keyword={palabra} />}></Route>
								<Route path='/sports' element={<ListOfGif keyword='sports' />} />
								<Route path='/food' element={<ListOfGif keyword='food' />} />
								<Route path='/gif/:keyword' element={<ListOfGif keyword={palabra} />} />
							</Routes>
						</div>
					</section>
				</main>
			</div>
		</Router>
	)
}

export default App
