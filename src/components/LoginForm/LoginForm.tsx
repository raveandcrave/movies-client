import {FC} from 'react';
import {useNavigate} from 'react-router-dom';
import {Form, Input, Button} from 'antd';
import * as Yup from 'yup';
import {useForm, Controller} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {MailOutlined, LockOutlined} from '@ant-design/icons';
import {Link} from 'react-router-dom';

import useAppDispatch from '../../hooks/useAppDispatch';
import {loginUser} from '../../store/reducers/auth/actionCreators';
import {RouteNames} from '../../routes';

import loginSchema from './loginSchema';

import './style.scss';

type LoginUser = Yup.InferType<typeof loginSchema>;

const LoginForm: FC = () => {
  const navigate = useNavigate();

  const {handleSubmit, formState, control} = useForm<LoginUser>({
    mode: 'onBlur',
    resolver: yupResolver(loginSchema),
  });

  const dispatch = useAppDispatch();

  const onSubmit = handleSubmit(({email, password}) => {
    const user = {
      email,
      password,
    };
    dispatch(loginUser(user))
      .unwrap()
      .then(() => navigate('/'))
      .catch((e: string) => console.error(e));
  });

  return (
    <form className="login-form" onSubmit={onSubmit}>
      <Controller
        name="email"
        control={control}
        render={({field}) => {
          return (
            <Form.Item help={formState.errors.email?.message} className="login-form__item">
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
          <Form.Item help={formState.errors.password?.message} className="login-form__item">
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
      <div className="login-form__footer">
        <Button size="large" type="primary" htmlType="submit">
          Войти
        </Button>
        <p className="login-form__footer-text">
          Нет аккаунта?{' '}
          <Link className="login-form__footer-link" to={RouteNames.REGISTER}>
            Зарегистрируйтесь
          </Link>
        </p>
      </div>
    </form>
  );
};

export default LoginForm;
