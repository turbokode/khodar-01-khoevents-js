import Lupa from '../../assets/Lupa.png'
import MenuBurguer from '../../assets/MenuBurguer.png'
import Sticker2 from '../../assets/Sticker2.png'
import './HomeSemEvento.css'

import { useState } from 'react'




export default function HomeSemEvento(){
    const [Menu,setMenu]=useState(false);

    function mostrarmenu(){
        
       
            setMenu(!Menu);
         
    }
   
    return(
        <div className="HomeSemEvento">
            <div className={Menu?'NavBar visivel':'NavBar invisivel'}  id='NavBar'>
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

                <div className='DashbordPrincipal' id='DashbordPrincipal'>
                    <img src={Sticker2} alt="Emogi" />
                    <p>Você ainda não criou nenhum evento!</p>
                </div>

                <a href="#"><button id='BotaoInscrever'>+</button></a>
                
        
            </section>
           


        </div>
    )
}