import React from 'react';
import logo from '../images/logo.svg';
import { Route, Link, Switch } from 'react-router-dom';

function Header(props) {
	return (
		<header className="header">
			<img src={logo} alt="Логотип" className="header__logo" />
			<Switch>
				<Route path="/signin">
					<Link className="header__email header__hover" to="/signup">
						Регистрация
					</Link>
				</Route>
				<Route path="/signup">
					<Link className="header__email header__hover" to="/signin">
						Войти
					</Link>
				</Route>
				<Route exact path="/">
					<div className="header__container">
						<p className="header__email">{props.userEmail}</p>
						<Link
							className="header__signout"
							to="/signin"
							onClick={props.onSignOut}
						>
							Выйти
						</Link>
					</div>
				</Route>
			</Switch>
		</header>
	);
}
export default Header;
