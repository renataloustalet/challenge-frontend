import React from 'react'
import css from '../styles/Products.module.scss'
import griego from '../assets/products/img-vitalinea-griego.png'
import sinAzucar from '../assets/products/img-vitalinea-sin-azucar.png'
import bebible from '../assets/products/img-vitalinea-bebible.png'

function Products() {
  return (
    <div className={css.products} id='products'>
      <p>LA FAMILIA VITALÍNEA</p>
      <div className={css.vitalineaFamily}>
        <div className={css.product}>
          <img src={griego} className={css.greek} alt='griego' />
          <p>Vitalínea Griego</p>
        </div>
        <div className={css.product}>
          <img src={sinAzucar} className={css.sugarfree} alt='sin azucar' />
          <p>Vitalínea Sin Azúcar</p>
        </div>
        <div className={css.product}>
          <img src={bebible} className={css.drinkable} alt='bebible' />
          <p>Vitalínea Bebible</p>
        </div>
      </div>
    </div>
  )
}

export default Products