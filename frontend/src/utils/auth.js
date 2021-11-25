export const BASE_URL =  process.env.NODE_ENV === 'production'
? 'https://api.mesto.autors.nomoredomains.icu'
: 'http://localhost:3000';

function getResponseData(res) {
		return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
}

export const authorization = (email, password) => {
		return fetch(`${BASE_URL}/signin`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ email, password }),
		}).then((res) => getResponseData(res));
}

export const register = (email, password) => {
		return fetch(`${BASE_URL}/signup`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				"Access-Control-Allow-Origin": "https://mesto.autors.nomoredomains.work",
			},
			body: JSON.stringify({ email, password }),
		}).then((res) => getResponseData(res));
}

export const checkToken = () => {
		return fetch(`${BASE_URL}/users/me`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${localStorage.getItem('token')}`,
			},
		}).then((res) => getResponseData(res));
}