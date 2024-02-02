import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../../componentes/Logo';
import './StartScreen.css';
export default function StartScreen() {
    
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate('/home');
    }, 3000);
  }, []);

  return (
    <div className="StartScreen">
      <Logo />
    </div>
  );
}
