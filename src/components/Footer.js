import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Anímate a unirte al cambio saludable
        </p>
        <p className='footer-subscription-text'>
          Inscríbete!
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Tu correo'
            />
            <Button buttonStyle='btn--outline'>Subscribete</Button>
          </form>
        </div>
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          
          <div class='footer-link-items'>
            <h2>Contáctame</h2>
            <Link to='/contact'>Contacto</Link>
            <Link to='/'>Soporte</Link>
          </div>
          <div class='footer-link-items'>
            <h2>General</h2>
            <Link to='/sign-up'>Cómo funciona</Link>
            <Link to='/'>Testimonios</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Redes Sociales</h2>
            <Link to='/'>Instagram</Link>
            <Link to='/'>Youtube</Link>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              DREYFIT
              <i class='fab fa-typo3' />
            </Link>
          </div>
          <small class='website-rights'>DREYFIT © 2024</small>
          <div class='social-icons'>
            <Link
              class='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link>
          </div>
        </div>
      </section><section  style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
  <     small className='website-rights'>Desarrollado por Paula Acosta</small>
      </section>
    </div>
  );
}

export default Footer;
