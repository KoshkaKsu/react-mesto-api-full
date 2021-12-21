export const BASE_URL = 'https://api.mesto.autors.nomoredomains.icu';

function getResponseData(res) {
		return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
}

export const authorization = (email, password) => {
		return fetch(`${BASE_URL}/signin`, {
			method: 'POST',
			//credentials: 'include',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ email, password }),
		}).then((res) => getResponseData(res));
}

export const register = (email, password) => {	
		return fetch(`${BASE_URL}/signup`, {
			method: 'POST',
			//credentials: 'include',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ email, password }),
		}).then((res) => getResponseData(res));
}

export const checkToken = () => {
		return fetch(`${BASE_URL}/users/me`, {
			method: 'GET',
			credentials: 'include',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${localStorage.getItem('token')}`,
			},
		}).then((res) => getResponseData(res));
}