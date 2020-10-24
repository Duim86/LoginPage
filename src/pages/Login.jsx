import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import Input from '../components/Input';
import LoginScreen from '../components/LoginScreen';
import LogoScreen from '../components/LogoScreen';

import schema from '../utils/validationForm';

import Check from '../images/check.svg';

import '../styles/pages/login.css';
import Button from '../components/Button';

function Login() {
  const [rememberMe, setRememberMe] = useState(false);

  const { register, errors, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="login">
      <LogoScreen />
      <LoginScreen legend="Fazer Login">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            id="email"
            type="text"
            name="email"
            label="E-mail"
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
            id="password"
            type="password"
            name="password"
            label="Senha"
            register={register}
            error={
              errors.password && (
                <p style={{ color: 'red', fontSize: 16 }}>
                  {errors.password.message}
                </p>
              )
            }
          />

          <div className="checkbox">
            <label htmlFor="rememberMe">
              <input
                type="hidden"
                value={rememberMe}
                name="rememberMe"
                ref={register}
              />
              <button
                type="button"
                id="rememberMe"
                className={rememberMe ? 'active' : ''}
                onClick={() => setRememberMe(!rememberMe)}
              >
                <img src={Check} alt="check" />
              </button>
              Lembrar-me
            </label>
            <Link to="/recovery">Esqueci minha senha</Link>
          </div>
          <Button className="form-button" />
        </form>
      </LoginScreen>
    </div>
  );
}

export default Login;
