import Lupa from '../../assets/Lupa.png'
import MenuBurguer from '../../assets/MenuBurguer.png'
import MozdevzLogo from '../../assets/MozdevzLogo.png'
import './Home.css'

import { useState } from 'react'

export default function Home(){
    const [Menu, setMenu]=useState(false);

    function mostrarmenu(){
        setMenu(!Menu);
    }
    return(
        <div className="Home">
            <div className={Menu ? 'NavBar visible' : 'NavBar invisivel' } id='NavBar'>
    <a to="#">Sua comunidade</a>
    <a to="#">Login</a>
</div>

            <section className='ConteudoPrincipal'>


                <div className='HeaderBar'>
                    <div className="Campo" id='CampoPesquisa'>
                        <input type="text" id="ProcurarEvento"  placeholder="Procurar Evento"/>
                        <img src={Lupa} alt="Foto mostrar password"/>
                    </div>

                    <img src={MenuBurguer} alt="Foto MenuBurguer" className='MenuBurguer' onClick={mostrarmenu} />
                </div>

                <div className='DashbordPrincipal'>
                    <div className='Comunidades'>
                        <h2>Comunidades</h2>
                        <section className='BoxComunidades'>
                            <div>
                                <img src={MozdevzLogo} alt="Logotipo da Mozdevz"  />
                                <h2>MOZDEVZ</h2>
                                <p>Eventos:<span>18</span> </p>
                            </div>

                            <div>
                                <img src={MozdevzLogo} alt="Logotipo da Mozdevz"  />
                                <h2>MOZDEVZ</h2>
                                <p>Eventos:<span>18</span> </p>
                            </div>

                            <div>
                                <img src={MozdevzLogo} alt="Logotipo da Mozdevz"  />
                                <h2>MOZDEVZ</h2>
                                <p>Eventos:<span>18</span> </p>
                            </div>
                        </section>

                    </div>
                    <div className='ProximosEventos'>
                        <h2>Próximos Eventos</h2>
                        <section className='BoxEventos'>
                            <div className='BoxEventoConteudo' id='Evento1' >
                               <div className='overlay'>
                                <p className='NomeComunidade'>MOZDEVZ</p>
                                <article>
                                    <h2 className='NomeEvento'>Data Wave</h2>
                                    <p className='DataHora'>05/08/2023 | 08h - 16h</p>
                                    <p className='LocalEvento'>UEM-FENG</p>
                                </article>
                               </div> 
                            </div>

                            <div className='BoxEventoConteudo' id='Evento2'>
                               <div className='overlay'>
                                <p className='NomeComunidade'>MOZDEVZ</p>
                                <article>
                                    <h2 className='NomeEvento'>Data Wave</h2>
                                    <p className='DataHora'>05/08/2023 | 08h - 16h</p>
                                    <p className='LocalEvento'>UEM-FENG</p>
                                </article>
                               </div> 
                            </div>
                            
                            <div className='BoxEventoConteudo' id='Evento1' >
                               <div className='overlay'>
                                <p className='NomeComunidade'>MOZDEVZ</p>
                                <article>
                                    <h2 className='NomeEvento'>Data Wave</h2>
                                    <p className='DataHora'>05/08/2023 | 08h - 16h</p>
                                    <p className='LocalEvento'>UEM-FENG</p>
                                </article>
                               </div> 
                            </div>

                            <div className='BoxEventoConteudo' id='Evento2'>
                               <div className='overlay'>
                                <p className='NomeComunidade'>MOZDEVZ</p>
                                <article>
                                    <h2 className='NomeEvento'>Data Wave</h2>
                                    <p className='DataHora'>05/08/2023 | 08h - 16h</p>
                                    <p className='LocalEvento'>UEM-FENG</p>
                                </article>
                               </div> 
                            </div>
                            
                            
                            
                        </section>
                    </div>
                </div>
                
        
            </section>
           


        </div>
    )
}