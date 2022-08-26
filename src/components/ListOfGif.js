import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Gif from './Gif'
import getGifs from '../services/getGifs'

const ListOfGif = ({ keyword }) => {
	// let { keyword } = useParams()
	// console.log(keyword)
	const [gifs, setGifs] = useState([])
	const [loading, setLoading] = useState(false)

	//const keyword = 'eagle'

	useEffect(() => {
		setLoading(true)
		getGifs({ keyword }).then((data) => {
			setGifs(data)
			setLoading(false)
		})
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
