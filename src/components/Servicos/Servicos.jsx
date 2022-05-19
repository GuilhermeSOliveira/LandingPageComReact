import './Servicos.modules.css'
import servicos from '../../images/servicos.png'

function Servicos () {
    return (
        <div className='servicos'>
            <img src={servicos} alt="" className='imagemServicos'/>
            <h1 className='tituloServicos'>Nossos Serviços</h1>
            <ul className='listaServicos'>
                <li className='itemServicos'>&#129520; Elétrica residencial, predial e comercial</li>
                <li className='itemServicos'>&#129520; Leitura de projetos</li>
                <li className='itemServicos'>&#129520; Instalação de ar-codicionado</li>
                <li className='itemServicos'>&#129520; Manutenção e higienização de ar-codicionado</li>
                <li className='itemServicos'>&#129520; Vendas de ar-codicionado e materiais elétricos</li>
            </ul>
        </div>
    )
}

export default Servicos