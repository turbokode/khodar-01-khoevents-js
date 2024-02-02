
import './CriarEvento.css'
import Text from '../../assets/Text.png'
import Location from '../../assets/Location.png'
import Data from '../../assets/Data.png'
import Time from '../../assets/Time.png'
import Description from '../../assets/Description.png'
import Imagem from '../../assets/Imagem.png'


export default function CriarEvento(){
    return(
        <div className="CriarEvento">
            
            <form action="#">
                <div className='FormButtonDecision'>
                    <input type="submit" value="Cancelar" className="FormButtonRed"/>
                    <input type="submit" value="Guardar" className="FormButtonGreen"/>
                </div>

                <div className='InputImagemDIV'>
                    <label htmlFor="InputImagem"><img src={Imagem} alt="Input Imagem"  /></label>
                    <input type="file" id="InputImagem"  className='InputImagem'/>
                </div>
                
         
            
  
            <div className="Campo">
                <label htmlFor="Text1"><img src={Text} alt="Ícone texto" /></label>
                <input type="text" id="Text1"  placeholder="Titulo do evento"/>
            </div>

            <div className="Campo">
                <label htmlFor="Location"><img src={Location} alt="Ícone Localização" /></label>
                <input type="text" id="Location"  placeholder="Localização"/>
            </div>

            <div className="Campo">
                <label htmlFor="Data"><img src={Data} alt="Ícone Data" /></label>
                <input type="date" id="Data"  placeholder="Data"/>
            </div>

            <div className="Campo">
                <label htmlFor="Time"><img src={Time} alt="Ícone tempo" /></label>
                <input type="time" id="Time"  placeholder="Hora do evento"/>
            </div>

            <div className="Campo">
                <label htmlFor="Descricao"><img src={Description} alt="Ícone descrição" /></label>
                <input type="text" id="Descricao"  placeholder="Descrição do evento"  className='CriaEventoDescricao'/>
            </div>
            
        </form>
        </div>
    )
}