import React from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import api from '../utils/api';
import * as auth from '../utils/auth';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import ImagePopup from './ImagePopup';
import EditProfilePopup from './EditProfilePopup';
import AddPlacePopup from './AddPlacePopup';
import EditAvatarPopup from './EditAvatarPopup';
import DeleteCardPopup from './DeleteCardPopup';
import ProtectedRoute from './ProtectedRoute';
import Login from './Login';
import Register from './Register';
import InfoTooltip from './InfoTooltip';

import { CurrentUserContext } from '../contexts/CurrentUserContext';

function App() {
	const history = useHistory();
	const [currentUser, setCurrentUser] = React.useState({});
	const [deletedCard, setDeletedCard] = React.useState({});
	const [selectedCard, setSelectedCard] = React.useState(null);
	const [isEditAvatarPopup, setIsEditAvatarPopup] = React.useState(false);
	const [isEditProfilePopup, setIsEditProfilePopup] = React.useState(false);
	const [isAddPlacePopup, setIsAddPlacePopup] = React.useState(false);
	const [isDeleteCardPopup, setIsDeleteCardPopup] = React.useState(false);
	const [cards, setCards] = React.useState([]);

	const [loggedIn, setLoggedIn] = React.useState(false);
	const [isSuccess, setIsSuccess] = React.useState(false);
	const [userEmail, setUserEmail] = React.useState('');
	const [isInfoTooltipPopupOpen, setIsInfoTooltipPopupOpen] =
		React.useState(false);

	React.useEffect(() => {
		const token = localStorage.getItem('token');
		console.log(token);
		if (token) {
			auth
				.checkToken(token)
				.then(res => {
					if (res) {
						setUserEmail(res.email);
					}
					setLoggedIn(true);
					history.push('/');
				})
				.catch(err => {
					if (err.status === 400) {
						console.log('400 — Токен не передан или передан не в том формате');
					} else if (err.status === 401) {
						console.log('401 — Переданный токен некорректен');
					}
				});
		}
	}, [history]);

	React.useEffect(() => {
		if (loggedIn) {
		Promise.all([api.getUserInfo(), api.getInitialCards()])
			.then(([userData, cards]) => {
				setCurrentUser(userData);
				setCards(cards.reverse());
	}).catch(err => console.log(`Данные с сервера не получены. Ошибка: ${err}`));
	}
    }, [loggedIn]);

	React.useEffect(() => {
		const closeByEscape = e => {
			if (e.key === 'Escape') {
				closeAllPopups();
			}
		};
		document.addEventListener('keydown', closeByEscape);
		return () => document.removeEventListener('keydown', closeByEscape);
	}, []);

	function handleCardClick(card) {
		setSelectedCard(card);
	}

	function handleEditAvatarClick() {
		setIsEditAvatarPopup(true);
	}

	function handleEditProfileClick() {
		setIsEditProfilePopup(true);
	}

	function handleAddPlaceClick() {
		setIsAddPlacePopup(true);
	}

	function handleCardDeleteClick(card) {
		setDeletedCard(card);
		setIsDeleteCardPopup(true);
	}

	function handleInfoTooltipPopupOpen() {
		setIsInfoTooltipPopupOpen(!isInfoTooltipPopupOpen);
	}

	function handleUpdateUser(obj) {
		api
			.editUserInfo(obj, localStorage.token)
			.then(data => {
				setCurrentUser(data);
				closeAllPopups();
			})
			.catch(err => {
				console.log(err);
			});
	}

	function handleUpdateAvatar(newAvatarLink) {
		api
			.updateAvatar(newAvatarLink, localStorage.token)
			.then(data => {
				setCurrentUser(data);
				closeAllPopups();
			})
			.catch(err => {
				console.log(err);
			});
	}

	function handleCardLike(card) {
		const isLiked = card.likes.some(i => i === currentUser._id);
		api
			.changeLikeCardStatus(card._id, !isLiked, localStorage.token)
			.then(newCard => {
				setCards(state => state.map(c => (c._id === card._id ? newCard : c)));
			})
			.catch(err => {
				console.log(err);
			});
	}

	function handleCardDelete() {
		const isOwn = deletedCard.owner._id === currentUser._id;
		api
			.deleteCard(deletedCard._id, isOwn)
			.then(() => {
				const newCards = cards.filter(c => c._id !== deletedCard._id);
				setCards(newCards);
				closeAllPopups();
			})
			.catch(err => {
				console.log(err);
			});
	}

	function handleAddPlaceSubmit(data) {
		api
			.addCard(data, localStorage.token)
			.then(newCard => {
				setCards([newCard, ...cards]);
				closeAllPopups();
			})
			.catch(err => {
				console.log(err);
			});
	}

	function handleLogin(email, password) {
		auth
			.authorization(email, password)
			.then(data => {
				setLoggedIn(true);
				setUserEmail(email);
				localStorage.setItem('token', data.token);
				history.push('/');
			})
			.catch(err => {
				if (err.status === 400) {
					console.log('400 - не передано одно из полей');
				} else if (err.status === 401) {
					console.log('401 - пользователь с email не найден');
				}
				setIsSuccess(false);
			});
	}

	function handleRegister(email, password) {
		auth
			.register(email, password)
			.then((res) => {
				localStorage.setItem('token', res.token)
				setIsSuccess(true);
				history.push('/signin');
			})
			.catch(err => {
				if (err.status === 400) {
					console.log('400 - некорректно заполнено одно из полей');
				}
				setIsSuccess(false);
			})
			.finally(() => {
				handleInfoTooltipPopupOpen(true);
			});
	}

	function handlesignOut() {
		localStorage.removeItem('token');
		setLoggedIn(false);
		setUserEmail('');
		history.push('/signin');
	}

	function closeAllPopups() {
		setSelectedCard(null);
		setIsEditAvatarPopup(false);
		setIsEditProfilePopup(false);
		setIsAddPlacePopup(false);
		setIsDeleteCardPopup(false);
		setIsInfoTooltipPopupOpen(false);
	}

	return (
		<CurrentUserContext.Provider value={currentUser}>
			<div className="root">
				<div className="container">
					<Header
						loggedIn={loggedIn}
						userEmail={userEmail}
						onSignOut={handlesignOut}
					/>
					<Switch>
						<ProtectedRoute
							exact
							path="/"
							component={Main}
							loggedIn={loggedIn}
							onEditAvatar={handleEditAvatarClick}
							onEditProfile={handleEditProfileClick}
							onAddPlace={handleAddPlaceClick}
							onCardClick={handleCardClick}
							cards={cards}
							onCardLike={handleCardLike}
							onCardDelete={handleCardDeleteClick}
						/>
						<Route path="/signin">
							<Login onLogin={handleLogin} />
						</Route>
						<Route path="/signup">
							<Register onRegister={handleRegister} />
						</Route>
					</Switch>
					<Footer />
					<ImagePopup
						card={selectedCard !== null && selectedCard}
						onClose={closeAllPopups}
					/>
					<EditAvatarPopup
						isOpen={isEditAvatarPopup}
						onClose={closeAllPopups}
						onUpdateAvatar={handleUpdateAvatar}
					/>
					<EditProfilePopup
						isOpen={isEditProfilePopup}
						onClose={closeAllPopups}
						onUpdateUser={handleUpdateUser}
					/>
					<AddPlacePopup
						isOpen={isAddPlacePopup}
						onClose={closeAllPopups}
						onAddPlace={handleAddPlaceSubmit}
					/>
					<DeleteCardPopup
						isOpen={isDeleteCardPopup}
						onClose={closeAllPopups}
						onCardDelete={handleCardDelete}
					/>
					<InfoTooltip
						isOpen={isInfoTooltipPopupOpen}
						onClose={closeAllPopups}
						isSuccess={isSuccess}
					/>
				</div>
			</div>
		</CurrentUserContext.Provider>
	);
}

export default App;
