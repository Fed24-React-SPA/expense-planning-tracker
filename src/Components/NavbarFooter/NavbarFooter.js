import React from 'react'
import './NavbarFooter.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faCreditCard, faChartSimple, faUser } from '@fortawesome/free-solid-svg-icons';


const NavbarFooter = () => {
    return (
        <div>
            <footer className='navbar-footer__icons'>
                <FontAwesomeIcon icon={faHouse} className='faHouse' />
                <FontAwesomeIcon icon={faCreditCard} className='faCreditCard' />
                <FontAwesomeIcon icon={faChartSimple} className='faChartSimple' />
                <FontAwesomeIcon icon={faUser} className='faUser' />
            </footer>
        </div>
    );
}

export default NavbarFooter;