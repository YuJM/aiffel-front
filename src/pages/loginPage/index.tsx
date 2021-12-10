import LoginForm from '@components/loginForm';
import './login_page.scss';
import axios from 'axios';
import { useCallback } from 'react';
import { loginURL } from '@model/http';
import { TLoginForm } from '@model/auth';
import { useDispatch } from 'react-redux';
import { saveSession } from '@store/authSlice';
import { useNavigate } from 'react-router';
import { toast } from 'react-hot-toast';

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onSubmit = useCallback(
    (data: TLoginForm) => {
      axios
        .get(loginURL, { params: { data } })
        .then(({ data }) => {
          dispatch(saveSession(data[0]));
          navigate('/forum');
        })
        .catch((e) => {
          console.error(e);
          toast.error('아이디와 비밀번호를 확인해주세요');
        });
    },
    [dispatch, navigate],
  );
  return (
    <main className={'login-page'}>
      <LoginForm onSubmit={onSubmit} />
    </main>
  );
};
export default LoginPage;
