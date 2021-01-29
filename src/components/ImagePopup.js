function ImagePopup() {
  return (
    <div id="openPicture" className="popup">
      <div className="popup__fullScreen">
        <div className="popup__image-desription">
          <img
            className="popup__image"
            src="#"
            alt="Фото в попапе с карточкой"
          />
          <p className="popup__image-subtitle"></p>
          <button type="button" className="popup__close-button"></button>
        </div>
      </div>
      <div className="popup__overlay"></div>
    </div>
  );
}

export default ImagePopup;
