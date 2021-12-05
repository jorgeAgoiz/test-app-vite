export const getKey = (email: string):Promise<Response> => {
	return fetch('https://quiz-questions-rest-api.herokuapp.com/apikey', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({email})
	})
		.then(response => response.json())
		.then(data => data)
		.catch(err => err)
}