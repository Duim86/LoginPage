import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import '../styles/components/login-screen.css';

function LoginScreen(props) {
  const { buttonBack, legend, description, children } = props;

  return (
    <section>
      {buttonBack && (
        <Link to="/">
          <FiArrowLeft size={24} color="#FFF" />
        </Link>
      )}
      <fieldset>
        <legend>{legend}</legend>
        {description && <p>{description}</p>}
        {children}
      </fieldset>
    </section>
  );
}

export default LoginScreen;
