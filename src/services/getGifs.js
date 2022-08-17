const apiKey = '06v3SHJy9yqOvMko9iFaeanH99OPm23j'

export default async function getGifs({ keyword = 'trending' } = {}) {
	const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=10`

	return await fetch(url)
		.then((response) => response.json())
		.then((response) => {
			const { data } = response
			//const gifs = data.map((image) => image)
			return data
		})
		.catch((err) => {
			console.log(err)
		})
}
