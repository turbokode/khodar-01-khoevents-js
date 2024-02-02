import { Link } from 'react-router-dom';
import './styles.css';

export default function Logo() {
  return (
    <Link className="Logo" to="/home">
      <h1>
        <span>Kho</span>Event
      </h1>
    </Link>
  );
}
