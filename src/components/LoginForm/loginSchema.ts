import * as Yup from 'yup';

const loginSchema = Yup.object({
  email: Yup.string().email('Некорректный email адрес').required('Поле обязательно к заполнению'),
  password: Yup.string()
    .min(4, 'Минимум символов 4')
    .matches(/^[A-Za-z0-9]+$/, 'Только латиница')
    .required('Поле обязательно к заполнению'),
});

export default loginSchema;
