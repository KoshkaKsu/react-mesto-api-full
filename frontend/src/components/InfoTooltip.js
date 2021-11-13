import React from 'react';
import mistake from '../images/mistake.svg';
import success from '../images/success.svg';

function InfoTooltip(props) {
	return (
		<div className={`popup ${props.isOpen ? 'popup_opened' : ''}`}>
			<div name={props.name} className="popup__container">
				<div className="popup__form">
					<button
						type="button"
						className="popup__button-close"
						onClick={props.onClose}
					></button>
					<img
						className="popup__image-registration"
						src={props.isSuccess ? success : mistake}
						alt={
							props.isSuccess
								? 'Регистрация выполнена'
								: 'Регистрация отклонена'
						}
					/>
					<h2 className="popup__title popup__title_type_registration">
						{props.isSuccess
							? 'Вы успешно Зарегистрировались'
							: 'Что-то пошло не так! Попробуйте еще раз.'}
					</h2>
				</div>
			</div>
		</div>
	);
}

export default InfoTooltip;
