import { useLoaderData, Link } from 'react-router-dom';
import Back from '../../assets/Back.png';
import DataWave from '../../assets/DataWave.png';
import './DetalhesEvento.css';
import { useFetch } from '../../services/api';

export async function loader({ params }) {
  return params;
}

export default function DetalhesEvento() {
  const { id } = useLoaderData();
//   const { data } = useFetch(`/events/${id}`);
//   console.log(data);
  return (
    <div className="DetalhesEvento">
      <Link to="/home">
        <img className="ImagemVoltar" src={Back} alt="Ícone Voltar" />
      </Link>
      <section className="BoxConteudoEvento">
        <div className="overlay">
          <img src={DataWave} alt="Imagem do evento" />

          <section className="OverviewEvento">
            <article>
              <h2 className="NomeEvento">Data Wave</h2>
              <p className="DataEvento">Data: 05 de Agosto de 2023 | Hora: 08:30</p>
              <p className="LocalEvento">UEM-FENG</p>
            </article>

            <a href="#">
              <button className="BotaoInscrever">+</button>
            </a>
          </section>
        </div>
        <h2 className="Descricao" id="DescricaoTitulo">
          Oque é DataWave?
        </h2>
        <p className="Descricao">
          Data Wave é uma conferência sobre Dados e ramo de Inteligência Artificial que irá contar com painéis,
          palestras e sessões práticas denominadas codelabs, de modo a garantir que os participantes possam ter uma
          contextualização sobre a relevância do campo de ciência de dados, entender conceitos básicos e poder criar os
          seus primeiros modelos.
        </p>
      </section>
    </div>
  );
}
