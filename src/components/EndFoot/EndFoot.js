import React from 'react';
import './EndFoot.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const EndFoot = () => {
    return (
        <div className='footer'>
            <article className="talk w-50 mw5 mw8-ns br3 hidden ba b--black-10 mv4 shadow-5">
                <p className='f2'>Let's Talk</p>
                <p className='f6'>I'm always looking <br></br>for oppurtunities</p>
                <p className='cnt-btn'>Contact Me</p>
            </article>
            <div className='row'>
                <div className='links'>
                    <a className='icon dim' href='https://github.com/Stefhakan'><FontAwesomeIcon icon= {faGithub} /></a>
                    <a className='icon dim' href='https://www.linkedin.com/in/stefan-hakansson-11b787127/'><FontAwesomeIcon icon= {faLinkedin} /></a>
                    <p className='icon dim' ><FontAwesomeIcon icon= {faEnvelope} /></p>
                </div>
                <p id='copyright'>Copyright Stefan Hakansson</p>
            </div>
        </div>
    )
}

export default EndFoot;
