import React from 'react'
import'../App.css'
import { Button } from './Button'
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src={require('../videos/video-3.mp4')} autoPlay loop muted></video> 
      <h1>Salud, ejercicio y cuidado a tu medida </h1>
      <p>¿Qué estás esperando?</p>
      <div className='hero-btns'>
        <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
            COMIENZA
        </Button>
        <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large' >
            VER VIDEO <i className='far fa-play-circle' ></i>
        </Button>
      </div>

    </div>
  )
}

export default HeroSection
