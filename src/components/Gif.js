import React from 'react'
import './../css/searchBarStyles.css'

const Gif = ({ id, title, url }) => {
	return <img key={id} alt={title} src={url} className='gif' />
}

export default Gif
