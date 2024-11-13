
import React from 'react';
import api from '../utils/api';

function HandleCardLike(card) {
    const [currentUser, setCurrentUser] = React.useState({});

    const isLiked = card.likes.some((i) => i._id === currentUser._id);
    api
        .changeLikeCardStatus(card._id, !isLiked)
        .then((newCard) => {
        setCards((cards) =>
            cards.map((c) => (c._id === card._id ? newCard : c))
        );
        })
        .catch((err) => console.log(err));
}

export default HandleCardLike;