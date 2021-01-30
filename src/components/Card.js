import React from "react";

function Card(props) {

  function handleClick() {
    props.onCardClick(props.card);
  }

  return (
    <li className="elements__list-item">
    <img
      src={props.card.link}
      className="elements__picture"
      title="Посмотреть фотографию"
      alt={props.card.name}
      onClick={handleClick}
    />
    <div className="elements__container">
      <h2 className="elements__text">{props.card.name}</h2>
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
        <span className="elements__like-counter">{props.likeCounter}</span>
      </div>
    </div>
  </li>
  );
}

export default Card;