import {Typography} from 'antd';
import {FC} from 'react';
import {SequelsAndPrequel} from '@/types/kinopoisk';
import FilmCards from '@/components/FilmCards';

interface SequelsProps {
  sequels: SequelsAndPrequel[];
}

const Sequels: FC<SequelsProps> = ({sequels}) => {
  return (
    <>
      <Typography.Title level={2}>Сиквелы и приквелы</Typography.Title>
      <FilmCards films={sequels} />
    </>
  );
};

export default Sequels;
