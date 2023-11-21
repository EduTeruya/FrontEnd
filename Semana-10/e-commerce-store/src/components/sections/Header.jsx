import { Link } from 'react-router-dom';
import logo from '../../assets/img/logo.webp';
import { useRef } from 'react';

const Header = () => {

    const header = useRef();
    const modal = useRef();

    const showMenu = () => {
        header.current.classList.add('header--menu');
        modal.current.classList.add('modal--show');
    };

    const hideMenu = () => {
        header.current.classList.remove('header--menu');
        modal.current.classList.remove('modal--show');
    };

    return (
        <header
            className="header"
            ref={header}
        >

            <nav className="nav">
                <div className="container f-elements f-elements--header">
                    <Link to="/">
                        <img src={logo} alt="logo e-commerce" className='nav__logo' width="32" height="32" />
                    </Link>
                    <div
                        className="modal modal--header"
                        ref={modal}
                        onClick={hideMenu}
                    >
                        <ul className="list list--header">
                            <li><Link to="/productos" className="list__link">Productos</Link>
                            </li>
                            <li><Link to="/servicios" className="list__link">Servicios</Link>
                            </li>
                            <li><Link to="/nosotros" className="list__link">Nosotros</Link>
                            </li>
                            <li><Link to="/contacto" className="list__link">Contacto</Link>
                            </li>
                            <li className='icon icon--close'>
                                ❌
                            </li>
                        </ul>
                    </div>
                    <div className='f-elements f-elements--center'>
                        <select>
                            <option value="value1">🌚</option>
                            <option value="value2">🌞</option>
                            <option value="value3">💻</option>
                        </select>
                        <button className='icon'
                            onClick={showMenu}
                        >
                            🍔
                        </button>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;

