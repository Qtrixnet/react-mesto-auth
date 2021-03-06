import React from "react";
import logo from "../images/Logo-white.svg";
import { Link } from 'react-router-dom';

function Header({loggedIn}) {
  return (
    <header className="header">
      <img className="header__logo" alt="Логотип" src={logo} />
      <Link className="header__link" to={loggedIn ? '/sign-in' : '/sign-up'}>{loggedIn ? 'Войти' : 'Регистрация'}</Link>
    </header>
  )
}

export default Header;
