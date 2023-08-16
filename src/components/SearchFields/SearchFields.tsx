import {FC, useEffect} from 'react';
import {Checkbox, Input, DatePicker, Typography, Slider, Button, Select} from 'antd';
import {useForm, Controller} from 'react-hook-form';
import dayjs from 'dayjs';
import {useSearchParams} from 'react-router-dom';
import './style.scss';
import {SearchOutlined} from '@ant-design/icons';
import {MovieTypeEnum} from '@/types/kinopoisk';
import {SearchForm} from './SearchFields.types';
import {
  generateFilterQueryParams,
  parseSearchParamsToFormValues,
  generateKinopoiskApiQueryString,
} from '@/helpers/searchFormHelpers/searchFormHelpers';

const {RangePicker} = DatePicker;

const typeOptions = Object.entries(MovieTypeEnum).map(([key, value]) => ({label: value, value: key}));

interface SearchFieldsProps {
  isLoading: boolean;
  getSearchFilms: (arg: {query: string}, preferCacheValue?: boolean) => void;
}

const SearchFields: FC<SearchFieldsProps> = ({isLoading, getSearchFilms}) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const {control, handleSubmit, reset} = useForm<SearchForm>();

  const onSubmit = handleSubmit((formData: SearchForm) => {
    const queryParamsArray = generateFilterQueryParams(formData);
    const queryString = generateKinopoiskApiQueryString(formData);

    setSearchParams(queryParamsArray);

    getSearchFilms({query: queryString}, true);
  });

  useEffect(() => {
    const parsedSearchParams = parseSearchParamsToFormValues(searchParams);
    const queryString = generateKinopoiskApiQueryString(parsedSearchParams);
    reset(parsedSearchParams);
    getSearchFilms({query: queryString}, true);
  }, []);

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
            <Select {...field} allowClear style={{width: '100%'}} placeholder="Выберите тип" options={typeOptions} />
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
