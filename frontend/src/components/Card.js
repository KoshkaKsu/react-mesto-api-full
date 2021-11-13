import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Card(props) {
	const currentUser = React.useContext(CurrentUserContext);
	// Определяем, являемся ли мы владельцем текущей карточки
	const isOwn = props.card.owner._id === currentUser._id;
	// Создаём переменную, которую после зададим в `className` для кнопки удаления
	const cardDeleteButtonClassName = `grid-item__delete ${
		isOwn ? 'grid-item__delete_active' : 'grid-item__delete'
	}`;
	// Определяем, есть ли у карточки лайк, поставленный текущим пользователем
	const isLiked = props.card.likes.some(i => i._id === currentUser._id);
	// Создаём переменную, которую после зададим в `className` для кнопки лайка
	const cardLikeButtonClassName = `grid-item__like ${
		isLiked ? 'grid-item__like_active' : 'grid-item__like'
	}`;

	function handleCardClick() {
		props.onCardClick(props.card);
	}
	function handleLikeClick() {
		props.onCardLike(props.card);
	}
	function handleDeleteClick() {
		props.onCardDelete(props.card);
	}

	return (
		<li className="grid-item">
			<img
				src={props.card.link}
				alt={props.card.name}
				onClick={handleCardClick}
				className="grid-item__photo"
			/>
			<div className="grid-item__description">
				<h2 className="grid-item__name">{props.card.name}</h2>
				<div className="grid-item_group">
					<button
						type="button"
						onClick={handleLikeClick}
						className={cardLikeButtonClassName}
					></button>
					<span className="grid-item__like-info">
						{props.card.likes.length}
					</span>
				</div>
			</div>
			<button
				type="button"
				className={cardDeleteButtonClassName}
				onClick={handleDeleteClick}
			></button>
		</li>
	);
}

export default Card;
