import React from 'react'
import s from './BurgerMenu.module.scss'
import logo from '../../assets/logo.png'
import Footer from '../Footer/Footer'

const BurgerMenu = ({ openModal, isOpened, setValue, blockRef1, blockRef2, blockRef3, scrollTo }) => {


  return (
    <div className={`${s.BurgerMenu} ${isOpened ? s.active : ""}`}>
      <div className={s.header}>
        <div className={s.itemsCon}>
          <div onClick={() => {
            scrollTo(blockRef1.current)
            setValue(false)
          }}>О нас</div>
          <div onClick={() => {
            scrollTo(blockRef2.current)
            setValue(false)
          }}>Услуги</div>
          <div onClick={() => {
            scrollTo(blockRef3.current)
            setValue(false)
          }}>Отзывы</div>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default BurgerMenu