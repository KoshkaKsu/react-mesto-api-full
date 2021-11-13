import React from 'react';
import PopupWithForm from './PopupWithForm';

function AddPlacePopup(props) {
	const [name, setName] = React.useState('');
	const [link, setLink] = React.useState('');

	function changeName(e) {
		setName(e.target.value);
	}

	function changeLink(e) {
		setLink(e.target.value);
	}

	function handleSubmit(e) {
		e.preventDefault();
		props.onAddPlace({
			name: name,
			link: link,
		});
	}

	React.useEffect(() => {
		setName('');
		setLink('');
	}, [props.isOpen]);

	return (
		<PopupWithForm
			isOpen={props.isOpen}
			onClose={props.onClose}
			onSubmit={handleSubmit}
			name="card-add"
			title="Новое место"
			buttonText="Создать"
		>
			<input
				type="text"
				className="popup__profile popup__profile_name_title popup__form-input"
				value={name}
				name="title"
				id="title"
				placeholder="Название"
				minLength="2"
				maxLength="30"
				required
				onChange={changeName}
			/>
			<span
				className="popup__input-error title-error"
				id="title-input-error"
			></span>
			<input
				type="url"
				className="popup__profile popup__profile_name_photo popup__form-input"
				name="link"
				value={link}
				id="link"
				placeholder="Ссылка на фото"
				required
				onChange={changeLink}
			/>
			<span
				className="popup__input-error link-error"
				id="link-input-error"
			></span>
		</PopupWithForm>
	);
}

export default AddPlacePopup;
