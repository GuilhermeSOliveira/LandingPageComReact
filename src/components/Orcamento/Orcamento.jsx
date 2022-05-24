import './Orcamento.modules.css'
import TituloPadrao from "../TituloPadrao"

function Orcamento () {
    return (
        <div className="orcamento">
            <TituloPadrao titulo=" Faça seu orçamento" id="tituloOrcamento"/>
            <form className='formOrcamento'>
                <div>
                    <label className='formItem'>Serviços:</label>
                    <select className='formSelect'>
                        <option className='opcoesServicos'>Elétrica residencial, predial ou comercial</option>
                        <option className='opcoesServicos'>Instalação de ar-condicionado</option>
                        <option className='opcoesServicos'>Compra de ar-condicionado ou materiais elétricos</option>
                        <option className='opcoesServicos'>Leitura de projetos</option>
                        <option className='opcoesServicos'>Manutenção e higienização de ar-condicionado</option>
                        <option className='opcoesServicos'>Outros</option>
                    </select>
                
                    <label className='formItem'>Nome</label>
                    <input className='formInput' type="text"></input>

                    <label className='formItem' for="descricao">Descrição do serviço</label>
                    <textarea className='formInput' cols="70" rows="10" id="descricao"></textarea>
                
                    <label className='formItem' for="cidade">Cidade:</label>
                    <input className='formInput' type="text" id="cidade"></input>

                    <label className='formItem' for="telefone">Contato:</label>
                    <input className='formInput' type="tel" id="telefone" placeholder='(XX) XXXXX-XXXX'></input>

                    <button className='botaoOrcamento'>Enviar Orçamento</button>
                </div>
            </form>
        </div>
    )
}

export default Orcamento