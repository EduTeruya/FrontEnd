import { useRef } from 'react';
import { BsList, BsXCircle } from 'react-icons/bs';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/img/logo.webp';

const Header = () => {

    const header = useRef();
    const modal = useRef();

    const showMenu = () => {
        header.current.classList.add('header--move');
        modal.current.classList.add('modal--show');
    };

    const hideMenu = () => {
        header.current.classList.remove('header--move');
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
                        <ul
                            className="list list--header"
                            onClick={e => e.stopPropagation()}
                        >
                            <li><NavLink
                                to="/productos"
                                className={({ isActive }) => isActive ? "list__link list__link--active" : "list__link"}
                                onClick={hideMenu}

                            >Productos
                            </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/servicios"
                                    className={({ isActive }) => isActive ? "list__link list__link--active" : "list__link"}
                                    onClick={hideMenu}
                                >
                                    Servicios
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/nosotros"
                                    className={({ isActive }) => isActive ? "list__link list__link--active" : "list__link"}
                                    onClick={hideMenu}
                                >
                                    Nosotros
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/contacto"
                                    className={({ isActive }) => isActive ? "list__link list__link--active" : "list__link"}
                                    onClick={hideMenu}
                                >
                                    Contacto
                                </NavLink>
                            </li>
                            <li
                                className='icon icon--close'
                                onClick={hideMenu}
                            >
                                <BsXCircle />
                            </li>
                        </ul>
                    </div>
                    <div className='f-elements f-elements--center'>
                        {/* <select>
                            <option value="value1">🌚</option>
                            <option value="value2">🌞</option>
                            <option value="value3">💻</option>
                        </select> */}
                        <button
                            className='icon icon--menu'
                            onClick={showMenu}
                        >
                            <BsList />
                        </button>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;

