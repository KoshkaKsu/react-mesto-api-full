class Api {
	constructor({ address, headers }) {
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
			headers: this._headers,
		}).then(this._getResponseData);
	}

	getInitialCards() {
		return fetch(`${this._url}/cards`, {
			method: 'GET',
			headers: this._headers,
		}).then(this._getResponseData);
	}

	updateAvatar(newAvatarLink) {
		return fetch(`${this._url}/users/me/avatar`, {
			method: 'PATCH',
			headers: this._headers,
			body: JSON.stringify({
				avatar: newAvatarLink.avatar,
			}),
		}).then(this._getResponseData);
	}

	editUserInfo(obj) {
		return fetch(`${this._url}/users/me`, {
			method: 'PATCH',
			headers: this._headers,
			body: JSON.stringify({
				name: obj.name,
				about: obj.about,
			}),
		}).then(this._getResponseData);
	}

	addCard(data) {
		return fetch(`${this._url}/cards`, {
			method: 'POST',
			headers: this._headers,
			body: JSON.stringify({
				name: data.name,
				link: data.link,
			}),
		}).then(this._getResponseData);
	}

	setLike(id) {
		return fetch(`${this._url}/cards/${id}/likes`, {
			method: 'PUT',
			headers: this._headers,
		}).then(this._getResponseData);
	}

	unLike(id) {
		return fetch(`${this._url}/cards/${id}/likes`, {
			method: 'DELETE',
			headers: this._headers,
		}).then(this._getResponseData);
	}

	deleteCard(id) {
		return fetch(`${this._url}/cards/${id}`, {
			method: 'DELETE',
			headers: this._headers,
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

const config = {
	address: 'https://api.mesto.autors.nomoredomains.icu',
	//address: 'http://localhost:3000',
	headers: {
		'Content-type': 'application/json',
		 Accept: "application/json",
		'Authorization': `Bearer ${localStorage.getItem('token')}`,
	  }
};

const api = new Api(config);

export default api;
