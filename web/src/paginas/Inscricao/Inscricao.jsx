
import Message from '../../assets/Message.png'
import './Inscricao.css'
import Profile from '../../assets/Profile.png'

export default function Inscricao(){
    return(
        <div className="Inscricao">
            <form className='InscreverForm' action="#">
        <h2 className="EntrarTitulo" id='EntrarTitulo'>Inscrição</h2>
        <p id='ParagrafoTitulo'>Preencha o formulário para se inscrever ao Data Wave</p>

            <div className="Campo">
                <label htmlFor="nome"><img src={Profile} alt="Ícone Usuário" /></label>
                <input type="text" id="nome"  placeholder="Nome completo"/>
            </div>  

            <div className="Campo">
                <label htmlFor="email"><img src={Message} alt="Ícone email" /></label>
                <input type="email" id="email"  placeholder="E-mail"/>
            </div>

            
            <input type="submit" value="Inscrever-se" className="Submeter"/>
            
        </form>
        </div>
    )
}