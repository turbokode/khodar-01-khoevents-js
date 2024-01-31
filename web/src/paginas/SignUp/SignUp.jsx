import IconBack from '../../assets/Back.png';
import './SignUp.css';
import Message from '../../assets/Message.png';
import Lock from '../../assets/Lock.png';
import Hidden from '../../assets/Hidden.png';
import Profile from '../../assets/Profile.png';

import Logo from '../../componentes/Logo';
import { useState } from 'react';
import { Input } from '../../componentes/Input';
import { post } from '../../services/api';

export default function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    const response = post('/communities', { name, email, password }).then((response) => {
      console.log(response);
    });
  }

  return (
    <div className="SignUp">
      <Logo />

      <form action="#">
        <a to="#">
          <img src={IconBack} alt="Ícone Voltar" />
        </a>

        <h2 className="EntrarTitulo">Cadastro</h2>
        <Input label="Nome completo" name="name" icon={Profile} type="text" onChange={(e) => setName(e.target.value)} />

        <Input label="E-mail" name="email" icon={Message} type="email" onChange={(e) => setEmail(e.target.value)} />

        <Input
          label="Password"
          name="password"
          icon={Message}
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <input type="submit" value="Entrar" className="Submeter" onClick={handleSubmit} />

        <p className="ContaCriar">
          Já tem uma comunidade😁?
          <a to="#" className="Inscrever">
            Entrar
          </a>{' '}
        </p>
      </form>
    </div>
  );
}
