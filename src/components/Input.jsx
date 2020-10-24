import React from 'react';

import '../styles/components/input.css';

function Input(props) {
  const { id, label, register, error, type } = props;
  return (
    <div className="input-block">
      <label htmlFor={id}>{label}</label>
      <input ref={register} id={id} name={id} type={type} />
      {error}
    </div>
  );
}

export default Input;
