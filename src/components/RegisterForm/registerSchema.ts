import * as Yup from 'yup';

const registerSchema = Yup.object({
  username: Yup.string()
    .min(4, 'Минимум символов 4')
    .max(12, 'Максимум символов 12')
    .matches(/^[A-Za-z0-9]+$/, 'Только латиница')
    .required('Поле обязательно к заполнению'),
  email: Yup.string().email('Некорректный email адрес').required('Поле обязательно к заполнению'),
  password: Yup.string()
    .min(4, 'Минимум символов 4')
    .max(16, 'Максимум символов 16')
    .matches(/^[A-Za-z0-9]+$/, 'Только латиница')
    .required('Поле обязательно к заполнению'),
});

export default registerSchema;
