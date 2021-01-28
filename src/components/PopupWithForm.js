function PopupWithForm(props) {
  return (
    <div id={props.name} className="popup">
      <form name={props.name} className="popup__form" noValidate>
        <fieldset className="popup__set">
          <p className="popup__title">{props.title}</p>
          {/* <label className="popup__form-field">
            <input
              name="name"
              placeholder="Имя"
              required
              maxLength="40"
              className="popup__input"
              id="popup__name-input"
              type="text"
            />
            <span
              id="popup__name-input-error"
              className="popup__input-error"
            ></span>
          </label> */}
          {/* <label className="popup__form-field">
            <input
              name="job"
              placeholder="Профессия"
              required
              maxLength="200"
              className="popup__input"
              id="popup__job-input"
              type="text"
            />
            <span
              id="popup__job-input-error"
              className="popup__input-error"
            ></span>
          </label> */}
          <button type="submit" className="popup__button">
            Сохранить
          </button>
        </fieldset>
        <button type="button" className="popup__close-button"></button>
      </form>
      <div className="popup__overlay"></div>
    </div>
  );
}

export default PopupWithForm;
