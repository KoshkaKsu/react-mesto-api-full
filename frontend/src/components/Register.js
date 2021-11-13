import React from 'react';
import { Link } from 'react-router-dom';

function Register(props) {
	const [email, setEmail] = React.useState('');
	const [password, setPassword] = React.useState('');

	function changeEmail(e) {
		setEmail(e.target.value);
	}

	function changePassword(e) {
		setPassword(e.target.value);
	}

	function handleRegistrationSubmit(e) {
		e.preventDefault();
		props.onRegister(email, password);
	}

	return (
		<div className="login">
			<form className="login__form" onSubmit={handleRegistrationSubmit}>
				<h1 className="login__title">Регистрация</h1>
				<input
					className="login__input"
					type="email"
					autoComplete="username"
					name="email"
					value={email}
					onChange={changeEmail}
					placeholder="Email"
					required
				/>
				<input
					className="login__input"
					type="password"
					autoComplete="new-password"
					name="password"
					value={password}
					onChange={changePassword}
					placeholder="Пароль"
					required
				/>
				<button className="login__button" type="submit">
					Зарегистрироваться
				</button>
				<Link className="login__question" to="/signin">
					Уже зарегистрированы?Войти
				</Link>
			</form>
		</div>
	);
}

export default Register;
