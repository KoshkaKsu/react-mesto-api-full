import React from 'react';
import PopupWithForm from './PopupWithForm';

function DeleteCardPopup(props) {
	const handleCardDelete = e => {
		e.preventDefault();
		props.onCardDelete();
	};

	return (
		<PopupWithForm
			isOpen={props.isOpen}
			onClose={props.onClose}
			name="delete"
			title="Вы уверены?"
			buttonText="Да"
			onSubmit={handleCardDelete}
		/>
	);
}

export default DeleteCardPopup;
