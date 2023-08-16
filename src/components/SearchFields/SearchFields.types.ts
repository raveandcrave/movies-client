import {Dayjs} from 'dayjs';

export interface SearchForm {
  name?: string;
  date?: [Dayjs, Dayjs];
  rating?: [number, number];
  type?: string;
  isSeries?: boolean;
}
