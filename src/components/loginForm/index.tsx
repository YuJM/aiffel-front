import React from 'react';
import Card from '@ui/card';
import Input, { InputErrorMessage } from '@ui/input';
import Button from '@ui/button';
import { useForm } from 'react-hook-form';
import { TFormData } from '@model/auth';

const LoginForm: React.FC<{ onSubmit: (data: TFormData) => void }> = ({
  onSubmit,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<TFormData>({ mode: 'onChange' });

  return (
    <Card style={{ width: '350px' }}>
      <Card.Header>Willing to Explore?</Card.Header>
      <form onSubmit={handleSubmit(onSubmit)} className={`p-24`}>
        <Input
          placeholder={'이메일'}
          type={'text'}
          invalid={!!errors.email}
          {...register('email', {
            required: '이메일은 필수입니다',
            pattern: {
              value: /^[A-Z0-9_.]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: '이메일 형식이 아닙니다',
            },
          })}
        />
        <div className={'h-24'}>
          {errors.email && (
            <InputErrorMessage>{errors.email?.message}</InputErrorMessage>
          )}
        </div>
        <Input
          placeholder={'비밀번호'}
          type={'password'}
          invalid={!!errors.password}
          {...register('password', {
            required: '비밀번호는 필수입니다',
            minLength: { value: 10, message: '최소 10자리 이상이어야 합니다' },
          })}
        />
        <div className={'h-24 mb-8'}>
          {errors.password && (
            <InputErrorMessage>{errors.password?.message}</InputErrorMessage>
          )}
        </div>
        <Button block type={'submit'} disabled={!isValid}>
          로그인
        </Button>
      </form>
    </Card>
  );
};

export default LoginForm;
