import React, {FC} from 'react';
import {Form, Input, Button} from 'antd';
import * as Yup from 'yup';
import {useForm, Controller} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {UserOutlined, LockOutlined} from '@ant-design/icons';

import {loginSchema} from '../../utils/validationSchemas';

import './style.scss';

type LoginUser = Yup.InferType<typeof loginSchema>;

const LoginForm: FC = () => {
  const {handleSubmit, formState, reset, control} = useForm<LoginUser>({
    mode: 'onBlur',
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = handleSubmit(({username, password}) => {
    const loginUser = {
      username,
      password,
    };
    reset();
    console.log('loginUser', loginUser);
  });

  return (
    <form className="login-form" onSubmit={onSubmit}>
      <Controller
        name="username"
        control={control}
        render={({field}) => {
          return (
            <Form.Item help={formState.errors.username?.message} className="login-form__item">
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
        name="password"
        control={control}
        render={({field}) => (
          <Form.Item help={formState.errors.password?.message} className="login-form__item">
            <Input
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
