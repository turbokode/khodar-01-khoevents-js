import Logo from "../../componentes/Logo"
import './Login.css'
import Lock from '../../assets/Lock.png'
import Hidden from '../../assets/Hidden.png'
import Message from '../../assets/Message.png'

export default function Login(){
    return(
        <div className="Login">
            <Logo/>
            <form action="#">
        <h2 className="EntrarTitulo">Entrar</h2>
            <div className="Campo">
                <label htmlFor="email"><img src={Message} alt="Ícone email" /></label>
                <input type="email" id="email"  placeholder="E-mail"/>
            </div>

            <div className="Campo">
                <label htmlFor="password"><img src={Lock} alt="Ícone password" /></label>
                <input type="password" id="password"  placeholder="Sua senha"/>
                <img src={Hidden} alt="Foto mostrar password"/>
            </div>

            <input type="submit" value="Entrar" className="Submeter"/>
            <p className="ContaCriar">Não tens uma conta😥?<a to="/signup" className="Inscrever"> Cadastrar</a> </p>
        </form>
        </div>
    )
}
