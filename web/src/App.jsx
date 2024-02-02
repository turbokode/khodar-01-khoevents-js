import { useFetch } from './services/api';
import { Router } from './routes';
import { AuthProvider } from './contexts/auth';
import './App.css';

export default function App() {
  const { data: status } = useFetch('/status');
  return (
    <AuthProvider>
      <div id="api-status" className={status ? 'running' : ''}></div>
      <Router />
    </AuthProvider>
  );
}
