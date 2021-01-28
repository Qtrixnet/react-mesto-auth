import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <div className="page">
        <div className="page__container">
          <Header />
          <Main />
          <Footer />
          <div id="editProfile" className="popup">
            <form name="profile" className="popup__form" noValidate>
              <fieldset className="popup__set">
                <p className="popup__title">Редактировать профиль</p>
                <label className="popup__form-field">
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
                </label>
                <label className="popup__form-field">
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
                </label>
                <button type="submit" className="popup__button">
                  Сохранить
                </button>
              </fieldset>
              <button type="button" className="popup__close-button"></button>
            </form>
            <div className="popup__overlay"></div>
          </div>

          <div id="addCard" className="popup">
            <form name="newCard" className="popup__form" noValidate>
              <fieldset className="popup__set">
                <p className="popup__title">Новое место</p>
                <label className="popup__form-field">
                  <input
                    name="placeName"
                    className="popup__input"
                    id="popup__placeName-input"
                    required
                    minLength="1"
                    maxLength="30"
                    placeholder="Название карточки"
                    type="text"
                  />
                  <span
                    id="popup__placeName-input-error"
                    className="popup__input-error"
                  ></span>
                </label>
                <label className="popup__form-field">
                  <input
                    name="placeLink"
                    className="popup__input"
                    id="popup__placeLink-input"
                    required
                    placeholder="Ссылка на картинку"
                    type="url"
                  />
                  <span
                    id="popup__placeLink-input-error"
                    className="popup__input-error"
                  ></span>
                </label>
                <button type="submit" className="popup__button">
                  Создать
                </button>
              </fieldset>
              <button type="button" className="popup__close-button"></button>
            </form>
            <div className="popup__overlay"></div>
          </div>

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

          <div id="confirm" className="popup">
            <form name="confirmDeleteCard" className="popup__form" noValidate>
              <fieldset className="popup__set">
                <p className="popup__title popup__title_confirm">Вы уверены?</p>
                <button
                  type="submit"
                  className="popup__button popup__button_confirm"
                >
                  Да
                </button>
                <button type="button" className="popup__close-button"></button>
              </fieldset>
            </form>
            <div className="popup__overlay"></div>
          </div>

          <div id="update" className="popup">
            <form name="updateAvatar" className="popup__form" noValidate>
              <fieldset className="popup__set">
                <p className="popup__title">Обновить аватар</p>
                <label className="popup__form-field">
                  <input
                    name="avatar"
                    className="popup__input"
                    id="popup__avatarLink-input"
                    required
                    placeholder="Ссылка на изображение"
                    type="url"
                  />
                  <span
                    id="popup__avatarLink-input-error"
                    className="popup__input-error"
                  ></span>
                </label>
                <button type="submit" className="popup__button">
                  Сохранить
                </button>
              </fieldset>
              <button type="button" className="popup__close-button"></button>
            </form>
            <div className="popup__overlay"></div>
          </div>

          <template className="cardTemplate">
            <li className="elements__list-item">
              <img
                src="#"
                className="elements__picture"
                title="Посмотреть фотографию"
                alt="Шаблон фото"
              />
              <div className="elements__container">
                <h2 className="elements__text"></h2>
                <button
                  type="button"
                  title="Удалить карточку"
                  className="elements__delete-button"
                ></button>
                <div className="elements__like-container">
                  <button
                    type="button"
                    className="elements__like-button"
                  ></button>
                  <span className="elements__like-counter"></span>
                </div>
              </div>
            </li>
          </template>
        </div>
      </div>
    </div>
  )
}

export default App;
