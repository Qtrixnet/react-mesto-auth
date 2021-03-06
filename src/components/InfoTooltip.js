import React from 'react';

export default function InfoTooltip({ isOpen, onClose, status }) {

  return (
    <div className={`popup ${isOpen && 'popup_opened'}`}>
      <div className="popup__info">
        <div className={`popup__status ${status ? 'popup__status_success' : 'popup__status_fail'}`}></div>
        <h2 className="popup__title popup__title_center">{status ? 'Вы успешно зарегистрировались!' : 'Что-то пошло не так! Попробуйте еще раз.'}</h2>
        <button type="button" onClick={onClose} className="popup__close-button"></button>
      </div>
      <div onClick={onClose} className="popup__overlay"></div>
    </div>
  );
}
