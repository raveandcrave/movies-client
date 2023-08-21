import './style.scss';

import {RouteNames} from '@/routes/index';
import {SequelsAndPrequel, SimilarMovy} from '@/types/kinopoisk';
import {Image} from 'antd';
import {FC} from 'react';
import {Link} from 'react-router-dom';

interface FilmCardsProps {
  films: SequelsAndPrequel[] | SimilarMovy[];
}

const FilmCards: FC<FilmCardsProps> = ({films}) => {
  return (
    <div className="film-cards">
      {films.map((item) => (
        <Link to={RouteNames.FILM.replace(':filmId', item.id.toString())} className="film-cards__item" key={item.id}>
          <Image className="film-cards__item-image" preview={false} width={150} height={225} src={item.poster.url} />
          <span className="film-cards__item-title">{item.name}</span>
        </Link>
      ))}
    </div>
  );
};

export default FilmCards;
