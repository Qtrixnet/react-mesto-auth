import React from "react";
import logo from "../images/Logo-white.svg";

function Header() {
  let isLogged = false;
  return (
    <header className="header">
      <img className="header__logo" alt="Логотип" src={logo} />
      <a>{isLogged ? 'Войти' : 'Регистрация'}</a>
    </header>
  )
}

export default Header;
