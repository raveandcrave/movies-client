import {FC} from 'react';
import {Layout, Row} from 'antd';
import RegisterForm from '@/components/RegisterForm';

const RegisterPage: FC = () => {
  return (
    <Layout>
      <Row justify="center" align="middle" className="h100">
        <RegisterForm />
      </Row>
    </Layout>
  );
};

export default RegisterPage;
