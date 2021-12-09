import React from 'react';
import Card from '@ui/card';
import Input from '@ui/input';
import Button from '@ui/button';

const LoginForm: React.FC = () => {
  return (
    <Card className={`p-24`} style={{ width: '350px' }}>
      <form>
        <Input
          placeholder={'이메일'}
          name={'email'}
          type={'email'}
          minLength={10}
          required
        />
        <div className={'h-20'} />
        <Input
          placeholder={'비밀번호'}
          name={'password'}
          type={'password'}
          minLength={10}
          required
        />
        <div className={'h-20 mb-8'} />
        <Button block type={'submit'}>
          로그인
        </Button>
      </form>
    </Card>
  );
};

export default LoginForm;
