import React from 'react';
import PopupWithForm from './PopupWithForm';

function EditAvatarPopup(props) {
	const avatarRef = React.useRef('');

	function handleSubmit(e) {
		e.preventDefault();
		props.onUpdateAvatar({
			avatar: avatarRef.current.value,
		});
	}

	React.useEffect(() => {
		avatarRef.current.value = '';
	}, [props.isOpen]);

	return (
		<PopupWithForm
			isOpen={props.isOpen}
			onClose={props.onClose}
			name="avatar-edit"
			title="Обновить аватар"
			buttonText="Сохранить"
			onSubmit={handleSubmit}
		>
			<input
				type="url"
				className="popup__profile popup__form-input"
				name="link"
				id="avatar"
				minLength="2"
				placeholder="Ссылка на картинку"
				ref={avatarRef}
				required
			/>
			<span
				className="popup__input-error avatar-error"
				id="avatar-error"
			></span>
		</PopupWithForm>
	);
}

export default EditAvatarPopup;
