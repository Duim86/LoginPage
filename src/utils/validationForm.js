import * as yup from 'yup';

const schema = yup.object().shape({
  email: yup.string().email('Email inválido').required('Campo Obrigatório'),
  password: yup.string().min(6, 'Mínimo 6 caracteres').required(''),
});

export default schema;
