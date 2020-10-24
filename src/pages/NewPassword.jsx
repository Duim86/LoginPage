import React from 'react';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import LoginScreen from '../components/LoginScreen';
import LogoScreen from '../components/LogoScreen';

import Button from '../components/Button';
import Input from '../components/Input';

import schema from '../utils/validationForm';

function NewPassword() {
  const { register, errors, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = () => {};

  return (
    <div className="login">
      <LogoScreen />
      <LoginScreen
        buttonBack
        legend="Redefinição de senha"
        description="Escolha uma nova senha para você acessar o dashboard do Happy"
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            id="email"
            name="email"
            label="Nova senha"
            type="password"
            register={register}
            error={
              errors.email && (
                <p style={{ color: 'red', fontSize: 16 }}>
                  {errors.email.message}
                </p>
              )
            }
          />
          <Input
            id="email"
            name="email"
            label="Repetir senha"
            type="password"
            register={register}
            error={
              errors.email && (
                <p style={{ color: 'red', fontSize: 16 }}>
                  {errors.email.message}
                </p>
              )
            }
          />
          <Button className="form-button" />
        </form>
      </LoginScreen>
    </div>
  );
}

export default NewPassword;
