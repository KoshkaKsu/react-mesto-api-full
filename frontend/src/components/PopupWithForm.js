import React from 'react';

function PopupWithForm(props) {
	return (
		<div
			className={`popup popup_type_${props.name} ${
				props.isOpen ? 'popup_opened' : ''
			}`}
		>
			<div
				className="popup__overlay popup__overlay_profile"
				onClick={props.onClose}
			></div>
			<div className="popup__container">
				<h3 className="popup__title">{props.title}</h3>
				<form
					name={props.name}
					onSubmit={props.onSubmit}
					className={`popup__form popup__form_${props.name}`}
				>
					{props.children}
					<button type="submit" className="popup__button-save">
						{props.buttonText}
					</button>
				</form>
				<button
					type="button"
					className="popup__button-close"
					onClick={props.onClose}
				></button>
			</div>
		</div>
	);
}

export default PopupWithForm;
