import avatarBlank from "../images/prof.jpg";

function handleEditAvatarClick() {
  document.querySelector("#update").classList.add("popup_opened");
}

function handleEditProfileClick() {
  document.querySelector("#editProfile").classList.add("popup_opened");
}

function handleAddPlaceClick() {
  document.querySelector("#addCard").classList.add("popup_opened");
}

function Main() {
  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar-edit">
          <img
            className="profile__avatar"
            title="Аватар профиля"
            src={avatarBlank}
            alt="Аватар"
          />
          <button
            title="Загрузить новый аватар"
            className="profile__avatar-edit-button"
            onClick={handleEditAvatarClick}
          ></button>
        </div>
        <div className="profile__info">
          <h1 id="profile__name" className="profile__name">
            Кто здесь?
          </h1>
          <p id="profile__job" className="profile__job">
            Смотрим
            <span className="spinner">
              <i className="rotation"></i>
            </span>
          </p>
          <button
            type="button"
            title="Редактировать профиль"
            className="profile__edit-button"
            onClick={handleEditProfileClick}
          ></button>
        </div>
        <button
          type="button"
          title="Добавить новую фотографию"
          className="profile__add-button"
          onClick={handleAddPlaceClick}
        ></button>
      </section>
      <section className="elements">
        <ul className="elements__list"></ul>
      </section>
    </main>
  );
}

export default Main;
