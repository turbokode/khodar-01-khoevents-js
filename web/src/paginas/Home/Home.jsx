import { createAvatar } from '@dicebear/core';
import { identicon } from '@dicebear/collection';
import Lupa from '../../assets/Lupa.png';
import MenuBurguer from '../../assets/MenuBurguer.png';
import MozdevzLogo from '../../assets/MozdevzLogo.png';
import './Home.css';
import DataWave2 from '../../assets/DataWave2.png';
import HackDay from '../../assets/HackDay.png';
import { useState } from 'react';
import { useFetch } from '../../services/api';

export default function Home() {
  const { data: communities } = useFetch('/communities');
  const { data: events } = useFetch('/events');
  const [Menu, setMenu] = useState(false);

  const defaultAvatar = createAvatar(identicon);

  function mostrarmenu() {
    setMenu(!Menu);
  }

  console.log(events);

  return (
    <div className="Home">
      <div className={Menu ? 'NavBar visivel' : 'NavBar invisivel'} id="NavBar">
        <a to="#">Sua comunidade</a>
        <a to="#">Login</a>
      </div>

      <section className="ConteudoPrincipal">
        <div className="HeaderBar">
          <div className="Campo" id="CampoPesquisa">
            <input type="text" id="ProcurarEvento" placeholder="Procurar Evento" />
            <img src={Lupa} alt="Foto mostrar password" />
          </div>

          <img src={MenuBurguer} alt="Foto MenuBurguer" className="MenuBurguer" onClick={mostrarmenu} />
        </div>

        <div className="DashbordPrincipal">
          <div className="Comunidades">
            <h2>Comunidades</h2>
            <section className="BoxComunidades">
              {communities?.map((community) => {
                return (
                  <div>
                    <img
                      src={community.avatar ? community.avatar.url : defaultAvatar.toDataUriSync()}
                      alt="Logotipo da Mozdevz"
                    />
                    <h2>{community.name}</h2>
                    <p>
                      Eventos:<span>18</span>
                    </p>
                  </div>
                );
              })}
            </section>
          </div>
          <div className="ProximosEventos">
            <h2>Próximos Eventos</h2>
            <section className="BoxEventos">
              {events?.map((event) => {
                return (
                  <div className="BoxEventoConteudo">
                    <div className="overlay">
                      <p className="NomeComunidade">{event.community.name}</p>
                      <img className="ImagemEvento" src={event.banner.url} alt="Icone Evento" />
                      <article>
                        <h2 className="NomeEvento">{event.title}</h2>
                        <p className="DataHora">
                          {new Date(event.date).toLocaleDateString('pt-MZ')} | {event.startTime} - {event.endTime}
                        </p>
                        <p className="LocalEvento">UEM-FENG</p>
                      </article>
                    </div>
                  </div>
                );
              })}
            </section>
          </div>
        </div>
      </section>
    </div>
  );
}
