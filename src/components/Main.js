import React from "react";
import api from '../utils/api';

function Main(props) {
  const [userAvatar, setUserAvatar] = React.useState();
  const [userName, setUserName] = React.useState();
  const [userDescription, setUserDescription] = React.useState();

  api.getUserInfo()

  React.useEffect(() => {
    Promise.all([
      api.getUserInfo()
    
      // api.getInitialCards()
    ])
    .then(([userInfo]) => {
      setUserName(userInfo.name)
      setUserDescription(userInfo.about)
      setUserAvatar(userInfo.avatar)
      // setCurrentUser(userInfo)
      // setCards(cardList)
      // setUserInfoGet(true)
    })
    .catch((err) => console.log(err))
  }, [])

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar-edit">
          <img
            className="profile__avatar"
            title="Аватар профиля"
            src={userAvatar}
            alt="Аватар"
          />
          <button
            title="Загрузить новый аватар"
            className="profile__avatar-edit-button"
            onClick={props.onEditAvatar}
          ></button>
        </div>
        <div className="profile__info">
          <h1 id="profile__name" className="profile__name">
            {userName}
          </h1>
          <p id="profile__job" className="profile__job">
            {userDescription}
          </p>
          <button
            type="button"
            title="Редактировать профиль"
            className="profile__edit-button"
            onClick={props.onEditProfile}
          ></button>
        </div>
        <button
          type="button"
          title="Добавить новую фотографию"
          className="profile__add-button"
          onClick={props.onAddPlace}
        ></button>
      </section>
      <section className="elements">
        <ul className="elements__list"></ul>
      </section>
    </main>
  );
}

export default Main;
