import './Header.modules.css'
import logo from '../../images/logo.png'

function Header () {
    return (
        <div className="HeaderContainer">
            <img src={logo} alt="Logo" />
            <ul className="headerNav">
                <li className='navMenu'>Serviços</li>
                <li className='navMenu'>Técnicos Responsáveis</li>
                <li className='navMenu'>Contato</li>
                <li className='navMenu'>Orçamento</li>
            </ul>
        </div>
    )
}

export default Header