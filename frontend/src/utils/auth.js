export const BASE_URL = 'https://api.mesto.autors.nomoredomains.icu';
//export const BASE_URL = 'http://localhost:3000';

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
			},
			body: JSON.stringify({ email, password }),
		}).then((res) => getResponseData(res));
}

export const checkToken = (token) => {
	console.log('getToken в utils/auth: ' + token)
		return fetch(`${BASE_URL}/users/me`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${localStorage.getItem('token')}`,
			},
		}).then((res) => getResponseData(res));
}

