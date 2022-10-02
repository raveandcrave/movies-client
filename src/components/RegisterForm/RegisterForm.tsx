import {FC} from 'react';
import {useNavigate} from 'react-router-dom';
import {Link} from 'react-router-dom';
import {Form, Input, Button} from 'antd';
import * as Yup from 'yup';
import {useForm, Controller} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {UserOutlined, LockOutlined, MailOutlined} from '@ant-design/icons';

import useAppDispatch from '@/hooks/useAppDispatch';
import {registerUser} from '@/store/reducers/auth/actionCreators';

import {RouteNames} from '../../routes';

import registerSchema from './registerSchema';

import './style.scss';

type RegisterUser = Yup.InferType<typeof registerSchema>;

const RegisterForm: FC = () => {
  const navigate = useNavigate();

  const {handleSubmit, formState, control} = useForm<RegisterUser>({
    mode: 'onBlur',
    resolver: yupResolver(registerSchema),
  });

  const dispatch = useAppDispatch();

  const onSubmit = handleSubmit(({email, password, username}) => {
    const user = {
      email,
      password,
      username,
    };
    dispatch(registerUser(user))
      .unwrap()
      .then(() => navigate('/'))
      .catch((e: string) => console.error(e));
  });

  return (
    <form className="register-form" onSubmit={onSubmit}>
      <Controller
        name="username"
        control={control}
        render={({field}) => {
          return (
            <Form.Item help={formState.errors.username?.message} className="register-form__item">
              <Input
                size="large"
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Имя пользователя"
                status={formState.errors.username ? 'error' : ''}
                {...field}
              />
            </Form.Item>
          );
        }}
      />
      <Controller
        name="email"
        control={control}
        render={({field}) => {
          return (
            <Form.Item help={formState.errors.email?.message} className="register-form__item">
              <Input
                size="large"
                prefix={<MailOutlined className="site-form-item-icon" />}
                placeholder="E-mail"
                status={formState.errors.email ? 'error' : ''}
                {...field}
              />
            </Form.Item>
          );
        }}
      />
      <Controller
        name="password"
        control={control}
        render={({field}) => (
          <Form.Item help={formState.errors.password?.message} className="register-form__item">
            <Input.Password
              size="large"
              prefix={<LockOutlined className="site-form-item-icon" />}
              placeholder="Пароль"
              status={formState.errors.password ? 'error' : ''}
              {...field}
            />
          </Form.Item>
        )}
      />
      <div className="register-form__footer">
        <Button size="large" type="primary" htmlType="submit">
          Регистрация
        </Button>
        <p className="register-form__footer-text">
          Уже есть аккаунт?{' '}
          <Link className="register-form__footer-link" to={RouteNames.LOGIN}>
            Войдите
          </Link>
        </p>
      </div>
    </form>
  );
};

export default RegisterForm;
