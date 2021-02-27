import React from "react";
import logo from "../images/Logo-white.svg";

function Header({isHaveAccount}) {
  return (
    <header className="header">
      <img className="header__logo" alt="Логотип" src={logo} />
      <a href={isHaveAccount ? 'Регистрация' : 'Войти'}>{isHaveAccount ? 'Регистрация' : 'Войти'}</a>
    </header>
  )
}

export default Header;
