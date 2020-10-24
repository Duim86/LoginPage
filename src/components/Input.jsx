import React from 'react';

import '../styles/components/input.css';

function Input(props) {
  const { id, label, register, error, ...rest } = props;
  return (
    <div className="input-block">
      <label htmlFor={id}>{label}</label>
      <input ref={register} id={id} {...rest} />
      {error}
    </div>
  );
}

export default Input;
