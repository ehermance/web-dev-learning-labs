import axios from 'axios';

const KEY = 'AIzaSyBXuF98jm56nT12dpgvLAhGhxMO2rQWrY8';

export default axios.create({
	baseURL: 'https://www.googleapis.com/youtube/v3',
	params: {
		part: 'snippet',
		type: 'video',
		maxResults: 5,
		key: KEY
	}
});