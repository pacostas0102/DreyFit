import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import logo from '../images/icon.jpg';

function Footer() {

  const urlInstagram = 'https://www.instagram.com/dreyfit_10?igsh=bXppY2hocnFtYTRi';
  const urlFacebook= 'https://www.facebook.com/diegoreyduque?mibextid=kFxxJD';

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
            <Link to={urlInstagram}>Instagram</Link>
            <Link to={urlFacebook}>Facebook</Link>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              <img src={logo} alt="Logo" style={{ width: '30px', height: '30px', paddingRight: '5px' }} /> 
              DREYFIT
            </Link>
          </div>
          <small class='website-rights'>IntelligenceGroup © 2024. Derechos Reservados</small>
          <div class='social-icons'>
            <Link
              class='social-icon-link instagram'
              to = {urlInstagram}
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link facebook'
              to={urlFacebook}
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
