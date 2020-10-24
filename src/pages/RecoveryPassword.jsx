import React from 'react';
import Button from '../components/Button';
import Input from '../components/Input';
import LoginScreen from '../components/LoginScreen';

import LogoScreen from '../components/LogoScreen';

function RecoveryPassword() {
  return (
    <div className="login">
      <LogoScreen />
      <LoginScreen
        buttonBack
        legend="Esqueci a Senha"
        description="Sua redefinição de senha será enviada para o e-mail cadastrado."
      >
        <Input id="email" label="E-mail" type="email" />
        <Button className="form-button" />
      </LoginScreen>
    </div>
  );
}

export default RecoveryPassword;
