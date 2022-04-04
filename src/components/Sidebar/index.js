import './index.scss'
import { Link, NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'

import Logo from '../../assets/images/b-logo-png-white.png'

const Sidebar = () => {
    return (
        <div className="nav-bar">
            <Link className="logo" to="/">
                <img src={Logo} alt="logo" />
                <p className="sub-logo">Bruno DaSilva</p>
            </Link>
            <nav className="nav">
                <NavLink exact="true" to="/" activeClassName="active">
                    <FontAwesomeIcon icon={faHome} color="#e76037" />
                </NavLink>
                <NavLink exact="true" to="/about" activeClassName="about-link">
                    <FontAwesomeIcon icon={faUser} color="#e76037" />
                </NavLink>
                <NavLink
                    exact="true"
                    to="/contact"
                    activeClassName="contact-link"
                >
                    <FontAwesomeIcon icon={faEnvelope} color="#e76037" />
                </NavLink>
            </nav>
        </div>
    )
}

export default Sidebar
