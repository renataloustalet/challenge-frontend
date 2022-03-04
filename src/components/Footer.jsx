import React from 'react'
import css from '../styles/Footer.module.scss'
import danone from '../assets/logos/img-logo-danone.png'
import logo from '../assets/logos/img-logo-vitalinea.png'

function Footer() {
    return (
        <footer className={css.footer}>
            <div className={css.sections}>
                <div className={css.imagesMobile}>
                    <a href='https://www.grupodanone.com.mx/' target='_blank' rel='noreferrer'>
                        <img src={danone} alt='logo danone' />
                    </a>
                    <img src={logo} alt='logo vitalinea' className={css.logoMobile} />
                </div>
                <div className={css.information}>
                    <a href='https://www.grupodanone.com.mx/' target='_blank' rel='noreferrer'>
                        <img src={danone} className={css.danone} alt='logo dadone' />
                    </a>
                    <div>
                        <section className={css.terms}>
                            <a href='http://www.vitalinea.com.mx/terminos-y-condiciones/' target='_blank' rel='noreferrer'>
                                Términos y condiciones
                            </a>
                            <p>|</p>
                            <a href='http://www.vitalinea.com.mx/politicas-de-privacidad/' target='_blank' rel='noreferrer'>
                                Políticas de privacidad
                            </a>
                            <p>|</p>
                            <a href='http://www.vitalinea.com.mx/aviso-de-provacidad/' target='_blank' rel='noreferrer'>
                                Aviso de privacidad
                            </a>
                        </section>
                        <section className={css.rightsReserved}>
                            <p>Danone de México 2017 ©. Todos los derechos reservados 2017</p>
                        </section>
                    </div>
                </div>
                <a href='#home'>
                    <img src={logo} className={css.logo} alt='logo vitalinea' />
                </a>
            </div>
        </footer>
    )
}

export default Footer