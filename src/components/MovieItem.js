import React from 'react';
import Rater from './Rater'

import './MovieItem.css';

const MovieItem = ({ name, initials, category, stars }) => {
  return (
    <li className="movie-item">
      <span className={`movie-item__avatar${initials?.length > 2 ? ' small' : ''}`}>{initials}</span> 
      <p className="movie-item__header">
        <strong className="movie-item__title">{name}</strong> 
        <span className="movie-item__category">{category}</span>
      </p>
      <div className="movie-item__rating rater">
        <Rater stars={stars} />
      </div>
    </li>
  )
}

export default MovieItem;