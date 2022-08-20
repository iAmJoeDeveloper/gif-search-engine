import React, { useState, useEffect } from 'react'
import Gif from './Gif'
import getGifs from '../services/getGifs'

const ListOfGif = ({ keyword }) => {
	const [gifs, setGifs] = useState([])

	useEffect(() => {
		getGifs({ keyword }).then((data) => setGifs(data))
	}, [keyword])

	return (
		<>
			{gifs.map((gif) => (
				<Gif key={gif.id} title={gif.title} url={gif.images.downsized_medium.url} />
			))}
		</>
	)
}

export default ListOfGif
