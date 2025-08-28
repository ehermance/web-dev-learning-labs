import axios from 'axios';

export default axios.create({
	baseURL: 'https://api.unsplash.com',
	headers: {
		Authorization: 'Client-ID tc9Jd2dQcPZgcqkK3ZLgjg3tArSUexX8un3OJZ4A17o' 
	}
});