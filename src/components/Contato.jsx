import Instagram from '../images/instagram.png'
import Whatsapp from '../images/whatsapp.png'
import Endereco from '../images/endereco.png'
import Email from '../images/email.png'
import '../components/modules/Contato.modules.css'
import TituloPadrao from './TituloPadrao'

function Contato () {
    return (
        <>
            <TituloPadrao titulo="Contatos"/>
            <div className='contato'>
                <div>
                    <img src={Instagram} alt="" className="instagram"/>
                    <p className='instagramP'>@andrad_refrigeracao_e_eletrica</p>
                </div>

                <div>
                    <img src={Email} alt="" className="email"/>
                    <p className='emailP'>assistenciaeletrica@hotmail.com</p>
                </div>

                <div>
                    <img src={Endereco} alt="" className="endereco"/>
                    <p className='enderecoP'>Rua Guilherme Correia de Souza, SN, Cicero Dantas - BA</p>
                </div>

                <div>
                    <img src={Whatsapp} alt="" className="whatsapp"/>
                    <p className='whatsappP'>(75) 99808-9452 Moises  (75) 99808-9453 Mateus</p>
                </div>    
            </div>
        </>   
    )
}

export default Contato