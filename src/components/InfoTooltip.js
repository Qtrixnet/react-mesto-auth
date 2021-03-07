import React from 'react';

export default function InfoTooltip({ onClose, status: { isOpen, successful }}) {

  return (
    <div className={`popup ${isOpen && 'popup_opened'}`}>
      <div className="popup__info">
        <div className={`popup__status ${successful ? 'popup__status_success' : 'popup__status_fail'}`}></div>
        <h2 className="popup__title popup__title_center">{successful ? 'Вы успешно зарегистрировались!' : 'Что-то пошло не так! Попробуйте еще раз.'}</h2>
        <button type="button" onClick={onClose} className="popup__close-button popup__close-button_info"></button>
      </div>
      <div onClick={onClose} className="popup__overlay"></div>
    </div>
  );
}
