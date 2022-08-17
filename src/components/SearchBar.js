import React from 'react'
import './../css/searchBarStyles.css'

const SearchBar = () => {
	return (
		<form action=''>
			<input type='text' id='searchBar' />
			<button type='submit' id='buttonSeach'>
				Search
			</button>
		</form>
	)
}

export default SearchBar
