import Logo from '../../componentes/Logo';
import './Login.css';
import Lock from '../../assets/Lock.png';
import Hidden from '../../assets/Hidden.png';
import Message from '../../assets/Message.png';
import { Link } from 'react-router-dom';
import { useState, useContext } from 'react';
import { Input } from '../../componentes/Input';
import { post } from '../../services/api';
import { AuthContext } from '../../contexts/auth';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  function handleLogin(e) {
    e.preventDefault();
    login(email, password).then((response) => {
      console.log(response);
      if (!response.error) {
        navigate('/home');
      }
    });
  }

  return (
    <div className="Login">
      <Logo />
      <form action="#">
        <h2 className="EntrarTitulo">Entrar</h2>
        <Input label="E-mail" name="email" icon={Message} type="email" onChange={(e) => setEmail(e.target.value)} />

        <Input
          label="Password"
          name="password"
          icon={Lock}
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <input type="submit" value="Entrar" className="Submeter" onClick={handleLogin} />
        <p className="ContaCriar">
          Não tens uma conta😥?
          <Link to="/signup" className="Inscrever">
            Cadastrar
          </Link>
        </p>
      </form>
    </div>
  );
}
