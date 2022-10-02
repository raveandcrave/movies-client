import {FC} from 'react';
import {Link} from 'react-router-dom';

import {MovieType, MovieKindEnum} from '../../types/kinopoisk';

import './style.scss';

interface FilmCardProps {
  film: MovieType;
}

const FilmCard: FC<FilmCardProps> = ({film}) => {
  return (
    <div className="film-card">
      <div className="film-card__content">
        <span className="film-card__rating">{film.rating.kp}</span>
        <Link to={`/film/${film.id}`}>
          <img src={film.poster.previewUrl} alt={film.description} className="film-card__image" />
        </Link>
      </div>
      <div>
        <Link to="/" className="film-card__link">
          <h3 className="film-card__title">{film.name}</h3>
        </Link>
        <span className="film-card__info">
          {film.year}, {MovieKindEnum[film.type]}
        </span>
      </div>
    </div>
  );
};

export default FilmCard;
