import React from 'react';
import Button from '../components/Button';
import Input from '../components/Input';
import LoginScreen from '../components/LoginScreen';

import LogoScreen from '../components/LogoScreen';

function NewPassword() {
  return (
    <div className="login">
      <LogoScreen />
      <LoginScreen
        buttonBack
        legend="Redefinição de senha"
        description="Escolha uma nova senha para você acessar o dashboard do Happy"
      >
        <form action="">
          <Input name="email" label="Nova senha" type="password" />
          <Input name="email" label="Repetir senha" type="password" />
          <Button className="form-button" />
        </form>
      </LoginScreen>
    </div>
  );
}

export default NewPassword;
