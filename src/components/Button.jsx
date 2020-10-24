import React from 'react';

import '../styles/components/button.css';

function Button(props) {
  const { className } = props;
  return (
    <button className={className} type="submit">
      Enviar
    </button>
  );
}

export default Button;
