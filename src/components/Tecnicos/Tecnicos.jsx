import TituloPadrao from "../TituloPadrao"
import './Tecnicos.modules.css'
import Moises from '../../images/Moises.png'
import Mateus from '../../images/Mateus.png'

function Tecnicos() {
    return (
        <div>
            <TituloPadrao titulo="Técnicos Responsaveis" />
            <section className="tecnicos">
                <h2 className="tituloTecnicos">Moisés Andrade</h2>
                
                <h2 className="tituloTecnicos">Mateus Andrade</h2>
                
            </section>
            <section className="fotoTecnicos">
                <img src={Moises} alt="Moisés Andrade" className="imagemTecnicos"/>
                <img src={Mateus} alt="Mateus Andrade" className="imagemTecnicos"/>
            </section>
        </div>
    )
}

export default Tecnicos