import React from 'react'
import css from '../styles/Home.module.scss'
import bote from '../assets/products/img-bote-fresa.png'
import selloAvalado from '../assets/logos/img-sello-avalado.png'
import flecha from '../assets/flecha.svg'
import kcal from '../assets/logos/img-100-kcal.png'
import fresa2 from '../assets/strawberries/img-fresas-2.png'
import fresa3 from '../assets/strawberries/img-fresas-3.png'
import fresa4 from '../assets/strawberries/img-fresas-4.png'
import fresa5 from '../assets/strawberries/img-fresas-5@2x.png'

function Home() {
    return (
        <div className={css.home} id='home'>
            <div className={css.component}>
                <img src={fresa2} alt='fresa 2' className={css.fresa2} />
                <div className={css.lala}>
                    <img src={bote} alt='bote' className={css.bote} />
                    <div className={css.presentation}>
                        <div className={css.flavor}>
                            <p>Sabor:</p>
                            <ul>
                                <li>Fresa</li>
                                <li>Guayaba</li>
                                <li>Toronja</li>
                            </ul>
                        </div>
                        <p className={css.title}>
                            Vitalínea® Bebible Fresa 217 gr.
                        </p>
                        <p className={css.description}>
                            ¡La presentación ideal para llevar contigo! Vitalínea bebible es la opción
                            si eres de las personas que siempre están activas y quieren probar algo
                            sano, rico y práctico.
                        </p>
                        <div className={css.btn}>
                            <a href='https://super.walmart.com.mx/productos?Ntt=vitalinea' target="_blank" rel="noreferrer">
                                <button>Comprar en Walmart</button>
                            </a>
                        </div>
                        <div className={css.images}>
                            <img src={selloAvalado} alt='sello avalado' className={css.image1} />
                            <img src={kcal} alt='100 kcal' className={css.image2} />
                        </div>
                        <a href='#nutritionalInformation' className={css.arrow}>
                            <img src={flecha} />
                        </a>
                    </div>

                </div>
                <img src={fresa3} alt='fresa 3' className={css.fresa3} /> 
             
            </div>
            <img src={fresa4} alt='fresa 4' className={css.fresa4} />
        </div>
    )
}

export default Home