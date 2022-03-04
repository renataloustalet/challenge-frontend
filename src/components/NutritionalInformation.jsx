import React from 'react'
import css from '../styles/NutritionalInformation.module.scss'
import fresa4 from '../assets/strawberries/img-fresas-4.png'
import fresa5 from '../assets/strawberries/img-fresas-5@2x.png'
import fresa6 from '../assets/strawberries/img-fresas-6.png'
import fresa7 from '../assets/strawberries/img-fresas-7.png'
import fresa8 from '../assets/strawberries/img-fresas-8.png'
import fresa9 from '../assets/strawberries/img-fresas-9.png'

function NutritionalInformation() {
    return (
        <div className={css.information} id='nutritionalInformation'>
            <img src={fresa4} alt='fresa' className={css.fresa4} />
            <img src={fresa5} alt='fresa' className={css.fresa5} />
            <div className={css.data}>
                <div className={css.bebibleData}>
                    <p className={css.title}>Información nutrimental</p>
                    <div className={css.left}>
                        <ul>
                            <li>Vitalínea® Bebible Guayaba 217gr</li>
                            <li>Valor promedio por porción de 217gr</li>
                            <li>Porciones por envase: 1</li>
                        </ul>
                        <div className={css.ingredients}>
                            <h3 className={css.ingredientsTitle}>Ingredientes:</h3>
                            <p className={css.ingredientsList}>
                                Leche descremada pasteurizada y/o
                                reconstituida pasteurizada de vaca.
                                3.5% preparado de fruta guayaba
                                (acesulfame K y sucralosa (27.2mg/
                                100g)), crema, almidón modificado,
                                maltodextrina y cultivos lácticos.
                            </p>
                        </div>
                    </div>
                    <div className={css.right}>
                        <div className={css.informationList}>
                            <ul className={css.informationTitle}>
                                <li>Contenido energético kJ/kcal</li>
                                <li>Proteínas (g)</li>
                                <li>Grasas (lípidos) (g)</li>
                                <li>Grasas saturadas (g)</li>
                                <li>Carbohidratos (Hidratos de carbono) (g)</li>
                                <li>Azúcares (g)</li>
                                <li>Azúcares añadidos (g)</li>
                                <li>Fibra dietética (g)</li>
                                <li>Sodio (mg)</li>
                                <li>Calcio (mg)</li>
                                <li>%VNR*</li>
                            </ul>
                            <ul className={css.informationData}>
                                <li>413,2/97,9</li>
                                <li>5.3</li>
                                <li>2.1</li>
                                <li>1.4</li>
                                <li>12.4</li>
                                <li>7.7</li>
                                <li>0.1</li>
                                <li>0.0</li>
                                <li>92.7</li>
                                <li>199.6</li>
                                <li>22</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <img src={fresa6} alt='fresa' className={css.fresa6} />
            <img src={fresa7} alt='fresa' className={css.fresa7} />
            <img src={fresa8} alt='fresa' className={css.fresa8} />
            < img src={fresa9} alt='fresa' className={css.fresa9} />
        </div>
    )
}

export default NutritionalInformation