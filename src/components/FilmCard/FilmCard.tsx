import {FC} from 'react';
import {Link} from 'react-router-dom';

import {MovieDto, MovieTypeEnum} from '@/types/kinopoisk';

import './style.scss';

interface FilmCardProps {
  film: MovieDto;
}

const FilmCard: FC<FilmCardProps> = ({film}) => {
  return (
    <div className="film-card">
      <div className="film-card__content">
        <span className="film-card__rating">{film.rating.kp.toFixed(1)}</span>
        <Link to={`/film/${film.id}`}>
          <img src={film.poster?.previewUrl} alt={film.description} className="film-card__image" />
        </Link>
      </div>
      <div>
        <Link to={`/film/${film.id}`} className="film-card__link">
          <h3 className="film-card__title">{film.name ?? film.alternativeName}</h3>
        </Link>
        <span className="film-card__info">
          {film.year}, {MovieTypeEnum[film.type]}
        </span>
      </div>
    </div>
  );
};

export default FilmCard;
