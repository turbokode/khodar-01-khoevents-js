import IconBack from '../../assets/Back.png'
import './SignUp.css'
import Message from '../../assets/Message.png'
import Lock from '../../assets/Lock.png'
import Hidden from '../../assets/Hidden.png'
import Profile from '../../assets/Profile.png'

import Logo from '../../componentes/Logo'


export default function SignUp(){
return(
    <div className="SignUp">
        <Logo/>
        
        <form action="#">
            <a to="#"><img src={IconBack} alt="Ícone Voltar"/></a>
            
        <h2 className="EntrarTitulo">Cadastro</h2>
            
            <div className="Campo">
                <label htmlFor="nome"><img src={Profile} alt="Ícone Usuário" /></label>
                <input type="text" id="nome"  placeholder="Nome completo"/>
            </div>

            <div className="Campo">
                <label htmlFor="email"><img src={Message} alt="Ícone email" /></label>
                <input type="email" id="email"  placeholder="E-mail"/>
            </div>

            <div className="Campo">
                <label htmlFor="password"><img src={Lock} alt="Ícone password" /></label>
                <input type="password" id="password"  placeholder="Sua senha"/>
                <img src={Hidden} alt="Foto mostrar password"/>
            </div>

            <div className="Campo">
                <label htmlFor="password"><img src={Lock} alt="Ícone password" /></label>
                <input type="password" id="password"  placeholder="Confirmar senha"/>
                <img src={Hidden} alt="Foto mostrar password"/>
            </div>

            <input type="submit" value="Entrar" className="Submeter"/>
        
            <p className="ContaCriar">Já tem uma comunidade😁?<a to="#" className="Inscrever">Entrar</a> </p>
        </form>
         
    </div>
)}