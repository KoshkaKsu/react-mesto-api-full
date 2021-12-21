/* export const address =  process.env.NODE_ENV === 'production'
? 'https://api.mesto.autors.nomoredomains.icu'
: 'http://localhost:3000'; */

export const address = 'https://api.mesto.autors.nomoredomains.icu';

const token = localStorage.getItem("token");

class Api {
	constructor(address, headers) {
		this._url = address;
		this._headers = headers;
	}

	_getResponseData(res) {
		if (!res.ok) {
			return Promise.reject(`Ошибка: ${res.status}`);
		}
		return res.json();
	}

	getUserInfo() {
		return fetch(`${this._url}/users/me`, {
			method: 'GET',
			headers: {
				'Content-type': 'application/json',
				Authorization: `Bearer ${token}`,
			},
			credentials: 'include',
		}).then(this._getResponseData);
	}

	getInitialCards() {
		return fetch(`${this._url}/cards`, {
			method: 'GET',
			headers: {
				'Content-type': 'application/json',
				Authorization: `Bearer ${token}`,
			},
			credentials: 'include',
		}).then(this._getResponseData);
	}

	updateAvatar(newAvatarLink) {
		return fetch(`${this._url}/users/me/avatar`, {
			method: 'PATCH',
			headers: {
				'Content-type': 'application/json',
				Authorization: `Bearer ${token}`,
			},
			credentials: 'include',
			body: JSON.stringify({
				avatar: newAvatarLink.avatar,
			}),
		}).then(this._getResponseData);
	}

	editUserInfo(obj) {
		return fetch(`${this._url}/users/me`, {
			method: 'PATCH',
			headers: {
				'Content-type': 'application/json',
				Authorization: `Bearer ${token}`,
			},
			credentials: 'include',
			body: JSON.stringify({
				name: obj.name,
				about: obj.about,
			}),
		}).then(this._getResponseData);
	}

	addCard(data) {
		return fetch(`${this._url}/cards`, {
			method: 'POST',
			headers: {
				'Content-type': 'application/json',
				Authorization: `Bearer ${token}`,
			},
			credentials: 'include',
			body: JSON.stringify({
				name: data.name,
				link: data.link,
			}),
		}).then(this._getResponseData);
	}

	setLike(id) {
		return fetch(`${this._url}/cards/${id}/likes`, {
			method: 'PUT',
			headers: {
				'Content-type': 'application/json',
				Authorization: `Bearer ${token}`,
			},
			credentials: 'include',
		}).then(this._getResponseData);
	}

	unLike(id) {
		return fetch(`${this._url}/cards/${id}/likes`, {
			method: 'DELETE',
			headers: {
				'Content-type': 'application/json',
				Authorization: `Bearer ${token}`,
			},
			credentials: 'include',
		}).then(this._getResponseData);
	}

	deleteCard(id) {
		return fetch(`${this._url}/cards/${id}`, {
			method: 'DELETE',
			headers: {
				'Content-type': 'application/json',
				Authorization: `Bearer ${token}`,
			},
			credentials: 'include',
		}).then(this._getResponseData);
	}

	changeLikeCardStatus(id, isLiked) {
		if (isLiked) {
			return this.setLike(id);
		} else {
			return this.unLike(id);
		}
	}
}

const api = new Api( address);

export default api;