import React, { useState } from 'react'
import css from '../styles/Navbar.module.scss'
import logo from '../assets/logos/img-logo-vitalinea.png'
import facebook from '../assets/socialMedia/img-social-facebook.svg'
import instagram from '../assets/socialMedia/img-social-instagram.svg'
import youtube from '../assets/socialMedia/img-social-youtube.svg'

function Navbar() {
    const [show, setShow] = useState(false);

    const handleClick = () => {
        setShow(!show);
    };

    return (
        <nav className={css.container}>
            <a href='#home'>
                <img src={logo} alt='logo-vitalinea' />
            </a>
            <div className={`${css.menu} ${show ? css.mobile: {}}`}>
                <a href='#products' onClick={handleClick}>Nuestros productos</a>
                <a href='#nutritionalInformation' onClick={handleClick}>Disfruta cuidarte</a>
                <a href='http://www.vitalinea.com.mx/blog/' target='_blank' rel='noreferrer' onClick={handleClick}>Blog</a>
                <div className={css.socialMedia}>
                    <a href='https://es-la.facebook.com/VitalineaMX/' target='_blank' rel='noreferrer'>
                        <img src={facebook} alt='facebook' onClick={handleClick} />
                    </a>
                    <a href='https://www.instagram.com/vitalineamx/' target='_blank' rel='noreferrer'>
                        <img src={instagram} alt='instagram' onClick={handleClick} />
                    </a>
                    <a href='https://www.youtube.com/channel/UCQ9QUtKWouX6TaAXyeOwb_Q' target='_blank' rel='noreferrer'>
                        <img src={youtube} alt='youtube' onClick={handleClick} />
                    </a>
                </div>
            </div>
            <div className={css.menuHamburger} onClick={handleClick}>
                <button>
                    <span className={css.topLine}></span>
                    <span className={css.middleLine}></span>
                    <span className={css.bottomLine}></span>
                </button>
            </div>
        </nav>
    )
}

export default Navbar