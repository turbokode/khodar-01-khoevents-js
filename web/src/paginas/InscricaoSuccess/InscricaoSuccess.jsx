import './InscricaoSuccess.css'
import Sticker from '../../assets/Sticker.png'

export default function InscricaoSuccess(){
    return(
        <div className="InscricaoSuccess">
                 <div className='InscreverForm'>
        <img src={Sticker} alt="Emogi"  />
        <h2 className="EntrarTitulo" id='EntrarTitulo'>Inscrito com sucesso</h2>
        <p id='ParagrafoTitulo'>A sua inscrição já foi efetuada, fique atento a comunidade para mais informações</p>

            <a href="#" ><input type="submit" value="Voltar" className="Submeter"/></a>
            
        </div>
        </div>
    )
}