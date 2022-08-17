import {FC, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import {Form, Input, Button} from 'antd';
import * as Yup from 'yup';
import {useForm, Controller} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {UserOutlined, LockOutlined} from '@ant-design/icons';

import useAppDispatch from '../../hooks/useAppDispatch';
import useAppSelector from '../../hooks/useAppSelector';
import {loginUser} from '../../store/reducers/auth/actionCreators';

import {loginSchema} from '../../utils/validationSchemas';

import './style.scss';

type LoginUser = Yup.InferType<typeof loginSchema>;

const LoginForm: FC = () => {
  const navigate = useNavigate();
  const {isAuth} = useAppSelector((state) => state.auth);

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
    dispatch(loginUser(user));
  });

  useEffect(() => {
    isAuth && navigate('/');
  }, [isAuth]);

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
                prefix={<UserOutlined className="site-form-item-icon" />}
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

      <Button size="large" type="primary" htmlType="submit">
        Войти
      </Button>
    </form>
  );
};

export default LoginForm;
