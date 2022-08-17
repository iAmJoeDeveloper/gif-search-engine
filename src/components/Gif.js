import React from 'react'

const Gif = ({ id, title, url }) => {
	return <img key={id} alt={title} src={url} />
}

export default Gif
