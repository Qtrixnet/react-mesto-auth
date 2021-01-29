function PopupWithForm(props) {
  return (
    <div id={props.id} className={`popup ${props.isOpen && 'popup_opened'}`}>
      <form name={props.name} className="popup__form" noValidate>
        <fieldset className="popup__set">
          <p className="popup__title">{props.title}</p>
          {props.children}
          <button type="submit" className="popup__button">
            Сохранить
          </button>
        </fieldset>
        <button type="button" onClick={props.onClose} className="popup__close-button"></button>
      </form>
      <div onClick={props.onClose} className="popup__overlay"></div>
    </div>
  );
}

export default PopupWithForm;
