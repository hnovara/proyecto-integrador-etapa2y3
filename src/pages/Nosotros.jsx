import React from 'react';

import Banner from '../components/Banner';
import Text from '../components/Text';
import Mapa from '../components/Map';

function Nosotros() {
    return (
        <div className='nosotros__container'>
            <Banner/>
            <Text 
                renderAs="h2"
                content={'Quiénes Somos'}
                componentsProps={{ className: '' }}
            />
            <Text 
                renderAs="h3"
                content={'¡Hola! Juguetería Cósmica es una marca de juguetes para chicos y grandes'}
                componentsProps={{ className: '' }}
            />
            <div className='text-container'>
                <img src={`../img/Juguetería-vidriera.jpg`} className='image' alt={`vidriera de la jugueteria, con muchos colores y muchos juguetes`}  />
                <Text 
                    renderAs="p"
                    content={'En la primera etapa de la vida, toda la energía está puesta en descubrir, aprender y co-crear el entorno y el mundo interior. Y nosotros queremos acompañar a los peques a apropiarse de sus capacidades y hacerlas gigantes. Nos gusta pensarnos como hacedores de diseño consciente. Buscamos estimular, divertir e inspirar valores ligados al respeto, a la libertad y al cuidado de nuestra tierra.'}
                    componentsProps={{ className: '' }}
                />
            </div>
            <div className='text-container'>
                <Text 
                    renderAs="p"
                    content={'Estamos convencidos de que detrás del juego hay mucho más! Es por esto que nuestras creaciones invitan a despertar la sensibilidad, estimular la imaginación y, también, el aprendizaje acerca del mundo que nos rodea. Todo está confeccionado con materia prima cuidada y segura para bebés y niños. Y, además, trabajamos para ser cada día más eco-responsables, contribuyendo a la disminución del impacto ambiental de consumo.'}
                    componentsProps={{ className: '' }}
                />
                <img src={`../img/estanteria.jpg`} className='image' alt={`estantería de la jugueterpia con muchos colores y muchos juguetes`}  />
            </div>
            <div className='map-container'>
                <Mapa/> 
            </div>
        </div>
    );
}

export default Nosotros;