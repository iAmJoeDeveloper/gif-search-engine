import React, { useState } from 'react'
import './../css/searchBarStyles.css'

const SearchBar = ({ setPalabra }) => {
	const [word, setWord] = useState('')

	const handleSubmit = (e) => {
		e.preventDefault()
		setPalabra(word)
		console.log(word)
		setWord('')
	}

	const handleChange = (e) => {
		setWord(e.target.value)
	}

	return (
		<form action='' onSubmit={handleSubmit}>
			<input
				type='text'
				id='searchBar'
				value={word}
				onChange={handleChange}
				placeholder='Write something...'
			/>
			<button type='submit' id='buttonSeach'>
				Search
			</button>
		</form>
	)
}

export default SearchBar
