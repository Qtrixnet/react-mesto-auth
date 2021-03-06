import React, { useEffect, useState } from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import ImagePopup from "./ImagePopup";
import api from "../utils/api";
import CurrentUserContext from '../contexts/CurrentUserContext';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';
import ConfirmDeletePopup from "./ConfirmDeletePopup";
import Login from "./Login";
import Register from './Register';
import InfoTooltip from './InfoTooltip';
import { Route, Switch, Redirect, useHistory } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import * as auth from '../utils/auth';

function App() {
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false);
  const [isRegisterPopupOpen, setRegisterPopupOpen] = useState(false);
  const [isRegisterStatusSuccess, setIsRegisterStatusSuccess] = useState(false);
  const [isCardDelete, setIsCardDelete] = useState(false);
  const [isDataLoad, setIsDataLoad] = useState(false);
  const [selectedCard, setSelectedCard] = useState({
    isOpen: false,
    element: {},
  });
  const [selectedCardDelete, setSelectedCardDelete] = useState({
    element: {}
  });
  const [currentUser, setCurrentUser] = useState({});
  const [cards, setCards] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);
  
  const initialData = {
    email: '',
    password: '',
  }

  const [profileData, setProfileData] = useState(initialData);

  useEffect(() => {
    api.getUserInfo()
      .then(res => { setCurrentUser(res); })
      .catch(err => { console.log(err); })
  }, []);

  useEffect(() => {
    api.getInitialCards()
      .then(initialCards => {
        setCards(initialCards);
      })
      .catch(err => { console.log(err) });
  }, []);

  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(!isEditAvatarPopupOpen);
  }

  function handleRegisterStatus() {
    setIsRegisterStatusSuccess(!isRegisterStatusSuccess);
  }

  function handleRegisterPopupShow() {
    setRegisterPopupOpen(!isRegisterPopupOpen);
  }

  function handleDeleteButtonClick(card) {
    setIsCardDelete(!isCardDelete);
    setSelectedCardDelete(card);
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

  function closeAllPopups() {
    setEditAvatarPopupOpen(false);
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setIsCardDelete(false);
    setSelectedCard({ ...selectedCard, isOpen: false });
    setSelectedCardDelete({});
    setIsDataLoad(false);
    setRegisterPopupOpen(false);
  }

  function handleCardLike(card) {
    //* Снова проверяем, есть ли уже лайк на данной карточке
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
    setIsDataLoad(true);
    api.editProfile(newUserData)
      .then(res => { setCurrentUser(res); closeAllPopups() })
      .catch(err => { console.log(err) })
      .finally(() => { setIsDataLoad(false) });
  }

  function handleUpdateAvatar(newAvatar) {
    setIsDataLoad(true);
    api.editAvatar(newAvatar)
      .then(res => { setCurrentUser(res); closeAllPopups() })
      .catch(err => { console.log(err) })
      .finally(() => { setIsDataLoad(false) });
  }

  function handleAddPlaceSubmit(newCard) {
    setIsDataLoad(true);
    api.addNewCard(newCard).then((res) => {
      setCards([res, ...cards]); closeAllPopups()
    })
      .catch(err => {
        console.log(err);
      })
      .finally(() => { setIsDataLoad(false) });
  }

  function handleCardDelete(card) {
    setIsDataLoad(true);
    api.deleteCard(card._id).then(() => {
      const newCards = cards.filter(newCard => newCard._id !== card._id)
      //* Обновляем стейт
      setCards(newCards);
      closeAllPopups()
    })
      .catch(err => {
        console.log(err);
      })
      .finally(() => { setIsDataLoad(false) });
  }

  const history = useHistory();

  // const tokenCheck = () => {
  //   const jwt = localStorage.getItem('jwt');

  //   if (jwt) {
  //     auth.checkToken(jwt)
  //       .then((res) => {
  //         if (res) {
  //           setProfileData({
  //             email: res.email,
  //             password: res.password
  //           })
  //           setLoggedIn(true)
  //         }
  //       })
  //       .catch(() => history.push('/sign-in'));
  //   }
  // };

  useEffect(() => {
    const jwt = localStorage.getItem('jwt');
    if(jwt){
      auth.checkToken(jwt)
        .then(data => {
          if(data){
            // setEmail(data.data.email);
            setLoggedIn(true)
            // history.push('/');
          }
        })
    }
  }, [history]);

  function handleLogin({ email, password }) {
    auth.login(email, password)
      .then(res => {
        // if (!res || res.statusCode === 400) throw new Error('Что-то пошло не так');
        if (res.token) {
          setLoggedIn(true);
          // setProfileData({
          //   email: res.user.email,
          //   password: res.user.password
          // })
          localStorage.setItem('jwt', res.token);
          history.push('/')
        }
      })
  }

  function handleRegister({ email, password }) {
    auth.register(email, password)
      .then(data => {
        if (data) {
          handleRegisterStatus(true)
          handleRegisterPopupShow(true);
          history.push('/sign-in');
        }
      })
      .catch(err => {
        console.log(err);
      })
  }

  const handleSignOut = () => {
    localStorage.removeItem('jwt');
    setProfileData(initialData);
    setLoggedIn(false);
    history.push('/sign-in');
  }

  return (
    <div className="App">
      <div className="page">
        <div className="page__container">
          <CurrentUserContext.Provider value={currentUser}>
            <Header loggedIn={loggedIn} onSignOut={handleSignOut}/>
            <Switch>
              <ProtectedRoute
                exact path="/"
                loggedIn={loggedIn}
                component={Main}
                onEditProfile={handleEditProfileClick}
                onAddPlace={handleAddPlaceClick}
                onEditAvatar={handleEditAvatarClick}
                onCardClick={handleCardClick}
                onCardDelete={handleDeleteButtonClick}
                onCardLike={handleCardLike}
                cards={cards}
              />
              <Route path="/sign-up">
                <Register onRegister={handleRegister} />
              </Route>
              <Route path="/sign-in">
                <Login onLogin={handleLogin} />
              </Route>
              <Route>
                {loggedIn ? <Redirect to="/" /> : <Redirect to="/sign-in" />}
              </Route>
            </Switch>
            <Footer />
            <InfoTooltip isOpen={isRegisterPopupOpen} onClose={closeAllPopups} status={isRegisterStatusSuccess} />
            <EditProfilePopup isDataLoad={isDataLoad} onUpdateUser={handleUpdateUser} isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} />
            <AddPlacePopup isDataLoad={isDataLoad} onAddCard={handleAddPlaceSubmit} isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} />
            <EditAvatarPopup isDataLoad={isDataLoad} onUpdateAvatar={handleUpdateAvatar} isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} />
            <ConfirmDeletePopup card={selectedCardDelete} isDataLoad={isDataLoad} onDeleteCard={handleCardDelete} isOpen={isCardDelete} onClose={closeAllPopups} />
            <ImagePopup card={selectedCard} onClose={closeAllPopups} />
            {/* {loggedIn ? <Login /> : <Register />} */}
          </CurrentUserContext.Provider>
        </div>
      </div>
    </div>
  );
}

export default App;
