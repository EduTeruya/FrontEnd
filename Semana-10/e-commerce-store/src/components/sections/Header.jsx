import { Link } from 'react-router-dom';
import logo from '../../assets/img/logo.webp';

const Header = () => {
    return (
        <header className="header">
            <nav className="nav">
                <div className="container f-elements f-elements--header">
                    <a>
                        <img src={logo} alt="logo e-commerce" className='nav__logo' width="32" height="32" />
                    </a>
                    <div className="modal modal--header">
                        <ul className="list list--header">
                            <li><Link to="/productos" className="list__link">Productos</Link>
                            </li>
                            <li><Link to="/servicios" className="list__link">Servicios</Link>
                            </li>
                            <li><Link to="/nosotros" className="list__link">Nosotros</Link>
                            </li>
                            <li><Link to="/contacto" className="list__link">Contacto</Link>
                            </li>
                        </ul>
                    </div>
                    <div className='f-elements f-elements--center'>
                        <select>
                            <option value="value1">🌑</option>
                            <option value="value2">☀</option>
                            <option value="value3">💻</option>
                        </select>
                        <button className='icon'>
                            🍔
                        </button>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;

