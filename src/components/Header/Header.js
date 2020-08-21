import React from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';


const Header = () => {
    return (
        <div className='header'>
            <nav className='nav pr3'>
            <a className='icon dim' href='https://github.com/Stefhakan'><FontAwesomeIcon icon= {faGithub} /></a>
            <a className='icon dim' href='https://www.linkedin.com/in/stefan-hakansson-11b787127/'><FontAwesomeIcon icon= {faLinkedin} /></a>
            <p className='f5 link dim black  pointer'>Contact</p>
            </nav>
        </div>
    )
}

export default Header;
