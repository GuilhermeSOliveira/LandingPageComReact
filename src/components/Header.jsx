import './Header.modules.css'

function Header () {
    return (
        <div className="HeaderContainer">
            <img src="" alt="Logo" />
            <ul className="headerNav">
                <li className='navMenu'>Servicos</li>
                <li className='navMenu'>Profissionais</li>
                <li className='navMenu'>Contato</li>
                <li className='navMenu'>Orcamento</li>
            </ul>
        </div>
    )
}

export default Header