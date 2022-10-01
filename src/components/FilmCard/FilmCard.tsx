import {FC} from 'react';
import {Link} from 'react-router-dom';

import './style.scss';

const FilmCard: FC = () => {
  return (
    <div className="film-card">
      <div className="film-card__content">
        <span className="film-card__rating">9.0</span>
        <Link to="/">
          <img src="https://placehold.co/300x450/orange/white" alt="" className="film-card__image" />
        </Link>
      </div>
      <Link to="/" className="film-card__link">
        <h3 className="film-card__title">Бэтмен</h3>
      </Link>
      <span className="film-card__info">2022, фильм</span>
    </div>
  );
};

export default FilmCard;
