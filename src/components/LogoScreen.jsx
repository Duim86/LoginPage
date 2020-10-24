import React from 'react';

import Logo from '../images/map-marker.svg';
import Happy from '../images/happy.svg';

import '../styles/components/logo-screen.css';

function LogoScreen() {
  return (
    <aside>
      <img src={Logo} alt="Logo" />
      <img className="happy" src={Happy} alt="Happy" />

      <strong>Foz do Iguaçu</strong>
      <span>Paraná</span>
    </aside>
  );
}

export default LogoScreen;
