import {FC} from 'react';
import {Checkbox, Input, DatePicker, Typography, Slider, Button, Select} from 'antd';
import {useForm, Controller} from 'react-hook-form';
import dayjs, {Dayjs} from 'dayjs';
import './style.scss';
import {SearchOutlined} from '@ant-design/icons';
import {MovieTypeEnum} from '@/types/kinopoisk';

const {RangePicker} = DatePicker;

const typeOptions = Object.entries(MovieTypeEnum).map(([key, value]) => ({label: value, value: key}));

interface SearchForm {
  name?: string;
  date?: [Dayjs, Dayjs];
  rating?: [number, number];
  type?: string;
  isSeries?: boolean;
}

interface SearchFieldsProps {
  isLoading: boolean;
  getSearchFilms: (arg: {query: string}, preferCacheValue?: boolean) => void;
}

const SearchFields: FC<SearchFieldsProps> = ({isLoading, getSearchFilms}) => {
  const {control, handleSubmit} = useForm<SearchForm>();

  const onSubmit = handleSubmit(({name, date, rating, type, isSeries}: SearchForm) => {
    const queryName = name ? `&field=name&search=${name}` : '';
    const queryDate = date ? `&field=year&search=${date[0].year()}-${date[1].year()}` : '';
    const queryRating = rating ? `&field=rating.kp&search=${rating[0]}-${rating[1]}` : '';
    const queryType = type ? `&field=type&search=${type}` : '';
    const queryIsSerires = isSeries ? '@field=isSeries&search=true' : '';

    const query = queryName + queryDate + queryRating + queryType + queryIsSerires;

    getSearchFilms({query}, true);
  });

  return (
    <div className="search-fields">
      <Typography.Title level={2}>Поиск фильмов</Typography.Title>
      <form onSubmit={onSubmit}>
        <Typography.Title className="search-fields__item-title" level={5}>
          Название
        </Typography.Title>
        <Controller
          control={control}
          name="name"
          render={({field, fieldState}) => (
            <Input placeholder="Введите название" {...field} status={fieldState.error ? 'error' : ''} />
          )}
        />

        <Typography.Title className="search-fields__item-title" level={5}>
          Дата выхода
        </Typography.Title>
        <Controller
          control={control}
          name="date"
          render={({field, fieldState}) => (
            <RangePicker
              {...field}
              status={fieldState.error ? 'error' : ''}
              picker="year"
              disabledDate={(currentDate) =>
                currentDate.isAfter(dayjs()) || currentDate.isBefore(dayjs('1887', 'YYYY'))
              }
            />
          )}
        />

        <Typography.Title className="search-fields__item-title" level={5}>
          Тип
        </Typography.Title>
        <Controller
          control={control}
          name="type"
          render={({field, fieldState}) => (
            <Select {...field} style={{width: '100%'}} placeholder="Выберите тип" options={typeOptions} />
          )}
        />

        <Typography.Title className="search-fields__item-title" level={5}>
          Рейтинг Кинопоиска
        </Typography.Title>
        <Controller
          control={control}
          name="rating"
          defaultValue={[1, 10]}
          render={({field, fieldState}) => <Slider {...field} range step={0.5} max={10} min={1} />}
        />

        <Controller
          control={control}
          name="isSeries"
          render={({field: {value, ...field}, fieldState}) => (
            <Checkbox {...field} checked={value} style={{width: '100%'}}>
              Искать только сериалы
            </Checkbox>
          )}
        />

        <Button
          disabled={isLoading}
          className="search-fields__button"
          type="primary"
          htmlType="submit"
          icon={<SearchOutlined />}>
          Искать
        </Button>
      </form>
    </div>
  );
};

export default SearchFields;
