import React from 'react'
import  CardItem from './CardItem'
import './Cards.css'

export default function Cards() {
  return (
    <div className='cards'>
      <h1> “Nunca pares, nunca te conformes, hasta que lo bueno sea mejor y lo mejor excelente”.</h1>
      <h1>  Deion Sanders.</h1>
      <div className='cards__containerlist'>
        <div className='cards__wrapper'>
            <ul className='cards__items'>
                <CardItem 
                src = "images/img-9.jpg"
                text = "Leonardo"
                label= 'Persistencia'
                path= '/services'
                />
                 <CardItem 
                src = "images/img-9.jpg"
                text = "Leonardo"
                label= 'Persistencia'
                path= '/services'
                />
                 <CardItem 
                src = "images/img-9.jpg"
                text = "Leonardo"
                label= 'Persistencia'
                path= '/services'
                />
                 <CardItem 
                src = "images/img-9.jpg"
                text = "Leonardo"
                label= 'Persistencia'
                path= '/services'
                />
                 <CardItem 
                src = "images/img-9.jpg"
                text = "Leonardo"
                label= 'Persistencia'
                path= '/services'
                />
                <CardItem 
                src = "images/PauDeporte.jpg"
                text = "Paula"
                label= 'Disciplina'
                path= '/services'
                />
                <CardItem 
                src = "images/img-9.jpg"
                text = "Mateo"
                label= 'Constancia'
                path= '/services'
                />
                <CardItem 
                src = "images/img-9.jpg"
                text = "Leonardo"
                label= 'Constancia'
                path= '/services'
                />
            </ul>
        </div>
      </div>
      <h2 >El momento es ahora máquinas! Estos son los planes con los que puedes comenzar!</h2>

      <div className='card__container'>
        <div className='cards__wrapper'>
            <ul className='cards__items'>
               <CardItem 
                src = "images/img-9.jpg"
                text = "Asesoría completa con Plan de Entrenamiento Personalizado"
                label= 'Constancia'
                path= '/services'
                />
                <CardItem 
                src = "images/img-9.jpg"
                text = "Plan de Acondicionamiento Deportivo"
                label= 'Constancia'
                path= '/services'
                />
                <CardItem 
                src = "images/img-9.jpg"
                text = "Plan de Rehabilitación - Fisioterapia"
                label= 'Constancia'
                path= '/services'
                />
            </ul>
        </div> 
      </div> 
    </div> 
    )
}
