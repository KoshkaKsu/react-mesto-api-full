import React from 'react';
import Card from './Card';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Main(props) {
	const currentUser = React.useContext(CurrentUserContext);

	return (
		<main className="content">
			<section className="profile">
				<div className="profile__info-block">
					<img
						className="profile__avatar"
						onClick={props.onEditAvatar}
						src={currentUser.avatar}
						alt="Аватар"
					/>
					<div
						className="profile__edit-button-avatar"
						onClick={props.onEditAvatar}
					></div>
				</div>
				<div className="profile__info">
					<div className="profile__description">
						<h1 className="profile__name">{currentUser.name}</h1>
						<button
							type="button"
							className="profile__edit-button"
							onClick={props.onEditProfile}
						></button>
					</div>
					<p className="profile__job">{currentUser.about}</p>
				</div>
				<button
					type="button"
					className="profile__add-button"
					onClick={props.onAddPlace}
				></button>
			</section>
			<section className="photos">
				<ul className="elements">
					{props.cards.map(card => (
						<Card
							onCardClick={props.onCardClick}
							onCardLike={props.onCardLike}
							onCardDelete={props.onCardDelete}
							key={card._id}
							card={card}
						/>
					))}
				</ul>
			</section>
		</main>
	);
}

export default Main;
