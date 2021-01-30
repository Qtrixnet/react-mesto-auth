function ImagePopup(props) {
  return (
    <div className={`popup ${props.card.isOpen && 'popup_opened'}`}>
      <div className="popup__fullScreen">
        <div className="popup__image-desription">
          <img
            className="popup__image"
            src={`${props.card.element.link}`} 
            alt={props.card.element.name}
          />
          <p className="popup__image-subtitle">{props.card.element.name}</p>
          <button type="button" onClick={props.onClose} className="popup__close-button"></button>
        </div>
      </div>
      <div onClick={props.onClose} className="popup__overlay"></div>
    </div>
  );
}

export default ImagePopup;
