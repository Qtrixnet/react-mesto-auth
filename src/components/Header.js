import React from "react";
import logo from "../images/Logo-white.svg";

function Header({loggedIn}) {
  return (
    <header className="header">
      <img className="header__logo" alt="Логотип" src={logo} />
      <a href={loggedIn ? 'Регистрация' : 'Войти'}>{loggedIn ? 'Регистрация' : 'Войти'}</a>
    </header>
  )
}

export default Header;
