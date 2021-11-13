import React from 'react';
import PopupWithForm from './PopupWithForm';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function EditProfilePopup(props) {
	const [name, setName] = React.useState('');
	const [description, setDescription] = React.useState('');
	const currentUser = React.useContext(CurrentUserContext);

	React.useEffect(() => {
		setName(currentUser.name);
		setDescription(currentUser.about);
	}, [currentUser, props.isOpen]);

	function handleChangeName(e) {
		setName(e.target.value);
	}

	function handleChangeDescription(e) {
		setDescription(e.target.value);
	}

	function handleSubmit(e) {
		e.preventDefault();
		props.onUpdateUser({
			name: name,
			about: description,
		});
	}

	return (
		<PopupWithForm
			isOpen={props.isOpen}
			onClose={props.onClose}
			name="profile-edit"
			title="Редактировать профиль"
			buttonText="Сохранить"
			onSubmit={handleSubmit}
		>
			<input
				type="text"
				className="popup__profile popup__profile_name_name popup__form-input"
				name="name"
				value={name || ''}
				id="name"
				placeholder="Имя"
				minLength="2"
				maxLength="40"
				onChange={handleChangeName}
				required
			/>
			<span className="popup__input-error name-error"></span>
			<input
				type="text"
				className="popup__profile popup__profile_name_job popup__form-input"
				name="job"
				value={description || ''}
				placeholder="Должность"
				id="job"
				minLength="2"
				maxLength="400"
				onChange={handleChangeDescription}
				required
			/>
			<span className="popup__input-error job-error"></span>
		</PopupWithForm>
	);
}

export default EditProfilePopup;
