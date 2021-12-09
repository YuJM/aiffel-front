import LoginForm from '@components/loginForm';
import './login_page.scss';
import axios from 'axios';
import { useCallback } from 'react';
import { loginURL } from '@model/http';
import { TFormData } from '@model/auth';
import { useDispatch } from 'react-redux';
import { saveSession } from '@store/authSlice';
import { useNavigate } from 'react-router';

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onSubmit = useCallback((data: TFormData) => {
    axios
      .get(loginURL, { params: { data } })
      .then(({ data }) => {
        dispatch(saveSession(data[0]));
        navigate('/forum');
      })
      .catch((e) => {
        console.error(e);
      });
  }, []);
  return (
    <main>
      <LoginForm onSubmit={onSubmit} />
    </main>
  );
};
export default LoginPage;