import React from 'react';
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
        <Input name="email" label="E-mail" type="email" />
      </LoginScreen>
    </div>
  );
}

export default RecoveryPassword;
