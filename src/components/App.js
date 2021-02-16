import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import api from "../utils/api";
import CurrentUserContext from '../contexts/CurrentUserContext';

function App() {
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({
    isOpen: false,
    element: {},
  });
  const [isCardDelete, setIsCardDelete] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState({});
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api.getUserInfo()
      .then(res => {setCurrentUser(res);})
      .catch(err => {console.log(err);})
  }, []);

  React.useEffect(() => {
    api.getInitialCards()
      .then(initialCards => {
        setCards(initialCards);
      })
      .catch(err => { console.log(err) });
  }, []);

  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(!isEditAvatarPopupOpen);
  }

  function handleEditProfileClick() {
    setEditProfilePopupOpen(!isEditProfilePopupOpen);
  }

  function handleAddPlaceClick() {
    setAddPlacePopupOpen(!isAddPlacePopupOpen);
  }

  function handleCardClick(card) {
    setSelectedCard({ ...selectedCard, isOpen: true, element: card });
  }

  function handleCardDelete(card) {
    // setIsCardDelete(!isCardDelete);
    api.deleteCard(card._id).then(() => 
    {
      //* Формируем новый массив на основе имеющегося, удаляя карточку из старого
      const newCards = cards.filter(newCard => newCard._id !== card._id)
      //* Обновляем стейт
      setCards(newCards);
    })
      .catch(err => {
        console.log(err);
      });
  }

  function closeAllPopups() {
    setEditAvatarPopupOpen(false);
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setIsCardDelete(false)
    setSelectedCard({ ...selectedCard, isOpen: false });
  }

  function handleCardLike(card) {
    //* Снова проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some(i => i._id === currentUser._id);

    //* Отправляем запрос в API и получаем обновлённые данные карточки
    
    api.changeCardLike(card._id, isLiked).then((newCard) =>
    {
      //* Формируем новый массив на основе имеющегося, подставляя в него новую карточку
      const newCards = cards.map((c) => c._id === card._id ? newCard : c);
      //* Обновляем стейт
      setCards(newCards);
    })
      .catch(err => {
        console.log(err);
      });
  }
  return (
    <div className="App">
      <div className="page">
        <div className="page__container">
          <CurrentUserContext.Provider value={currentUser}>
            <Header />
            <Main
              onEditProfile={handleEditProfileClick}
              onAddPlace={handleAddPlaceClick}
              onEditAvatar={handleEditAvatarClick}
              onCardClick={handleCardClick}
              onCardDelete={handleCardDelete}
              onCardLike={handleCardLike}
              cards={cards}
            />
            <PopupWithForm
              onClose={closeAllPopups}
              isOpen={isEditProfilePopupOpen}
              name="profile"
              id="editProfile"
              title="Редактировать профиль"
            >
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
            </PopupWithForm>
            <PopupWithForm
              onClose={closeAllPopups}
              isOpen={isAddPlacePopupOpen}
              name="newCard"
              id="addCard"
              title="Новое место"
            >
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
            </PopupWithForm>
            <PopupWithForm
              onClose={closeAllPopups}
              isOpen={isEditAvatarPopupOpen}
              name="updateAvatar"
              id="update"
              title="Обновить аватар"
            >
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
            </PopupWithForm>
            <PopupWithForm
              onClose={closeAllPopups}
              isOpen={isCardDelete}
              name="confirmDeleteCard"
              id="confirm"
              title="Вы уверены?">
            </PopupWithForm>
            <ImagePopup card={selectedCard} onClose={closeAllPopups} />
            <Footer />
          </CurrentUserContext.Provider>
        </div>
      </div>
    </div>
  );
}

export default App;
