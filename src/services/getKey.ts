interface Data {
	message?: string,
	response?: string
}

export const getKey = (email: string): Promise<Data> => {
	return fetch('https://quiz-questions-rest-api.herokuapp.com/apikey', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({email})
	})
		.then(response => {
			localStorage.setItem('status_code', `${response.status}`)
			return response.json()
		})
		.then(data => data)
		.catch(err => err)
}