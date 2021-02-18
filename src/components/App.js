import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import api from "../utils/api";
import CurrentUserContext from '../contexts/CurrentUserContext';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';

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
      .then(res => { setCurrentUser(res); })
      .catch(err => { console.log(err); })
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
    api.deleteCard(card._id).then(() => {
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

    api.changeCardLike(card._id, isLiked).then((newCard) => {
      //* Формируем новый массив на основе имеющегося, подставляя в него новую карточку
      const newCards = cards.map((c) => c._id === card._id ? newCard : c);
      //* Обновляем стейт
      setCards(newCards);
    })
      .catch(err => {
        console.log(err);
      });
  }

  function handleUpdateUser(newUserData) {
    api.editProfile(newUserData)
      .then(res => { setCurrentUser(res); closeAllPopups() })
      .catch(err => { console.log(err) });
  }

  function handleUpdateAvatar(newAvatar) {
    api.editAvatar(newAvatar)
      .then(res => { setCurrentUser(res); closeAllPopups() })
      .catch(err => { console.log(err) });
  }

  function handleAddPlaceSubmit(newCard) {
    api.addNewCard(newCard).then((res) => {
      setCards([res, ...cards]); closeAllPopups()
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
            <EditProfilePopup onUpdateUser={handleUpdateUser} isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} />
            <AddPlacePopup onAddCard={handleAddPlaceSubmit} isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} />
            <EditAvatarPopup onUpdateAvatar={handleUpdateAvatar} isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} /> 
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
