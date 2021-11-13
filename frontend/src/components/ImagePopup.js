import React from 'react';

function ImagePopup(props) {
	return (
		<div
			className={`popup popup_type_image ${props.card ? 'popup_opened' : ''}`}
		>
			<div
				className="popup__overlay popup__overlay_image"
				onClick={props.onClose}
			></div>
			<div className="popup__card">
				<img
					className="popup__image"
					src={props.card.link}
					alt={props.card.name}
				/>
				<p className="popup__title-card">{props.card.name}</p>
				<button
					className="popup__button-close"
					type="button"
					onClick={props.onClose}
				></button>
			</div>
		</div>
	);
}

export default ImagePopup;
