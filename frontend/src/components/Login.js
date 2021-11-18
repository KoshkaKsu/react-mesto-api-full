import React from 'react';

function Login(props) {
	const [email, setEmail] = React.useState('');
	const [password, setPassword] = React.useState('');

	function changeEmail(e) {
		setEmail(e.target.value);
	}

	function changePassword(e) {
		setPassword(e.target.value);
	}

	function handleLoginSubmit(e) {
		e.preventDefault();
		props.onLogin(email, password);
	}

	return (
		<div className="login">
			<form className="login__form" onSubmit={handleLoginSubmit}>
				<h1 className="login__title">Вход</h1>
				<input
					className="login__input"
					type="email"
					autoComplete="username"
					name="email"
					value={email || ''}
					onChange={changeEmail}
					placeholder="Email"
					required
				/>
				<input
					className="login__input"
					type="password"
					autoComplete="new-password"
					name="password"
					value={password || ''}
					onChange={changePassword}
					placeholder="Пароль"
					required
				/>
				<button className="login__button" type="submit">
					Войти
				</button>
			</form>
		</div>
	);
}

export default Login;
