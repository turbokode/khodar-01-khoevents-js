import './App.css';
// import Login from './paginas/Login/Login'
import SignUp from './paginas/SignUp/SignUp';
import Home from './paginas/Home/Home';
import DetalhesEvento from './paginas/DetalhesEvento/DetalhesEvento';
import { api, useFetch } from './services/api';
import { useState, useEffect } from 'react';

export default function App() {
  const { data: status } = useFetch('/status');
  console.log(status);

  return (
    <>
      <div id="api-status" className={status ? 'running' : ''}></div>
      <SignUp />
    </>
  );
}
