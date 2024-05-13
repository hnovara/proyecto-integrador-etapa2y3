import React from 'react'
import SocialMedia from '../components/SocialMedia'

function Footer() {
    return (
        <footer className='footer__container'>
            <div className='footer__wrapper'>
                <div>
                    <p><b>Juguetería Cósmica</b></p>
                    <p>Teléfono: (11) 5809-7999</p>
                    <p>hola@jugueteria-cosmica.com</p>
                </div>
                <SocialMedia />
            </div>
        </footer>
    )
}

export default Footer