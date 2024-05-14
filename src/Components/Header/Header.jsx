import React, { useState } from 'react'
import s from './Header.module.scss'
import logo from '../../assets/logo.png'
import './Header.scss'
import BurgerMenu from '../BurgerMenu/BurgerMenu'

const Header = ({ blockRef1, blockRef2, blockRef3, scrollTo, openModal }) => {
    const [value, setValue] = useState(false)

    return (
        <>
            <div>
                <BurgerMenu openModal={openModal} isOpened={value} setValue={setValue} blockRef1={blockRef1} blockRef2={blockRef2} blockRef3={blockRef3} scrollTo={scrollTo} />
            </div>
            <div className={`${s.Header} ${value ? s.fixed : ""}`}>
                <img src={logo} alt='logo' />
                <div className={s.btnsWrapper}>
                    <p onClick={() => scrollTo(blockRef1.current)}>О нас</p>
                    <p onClick={() => scrollTo(blockRef2.current)}>Услуги</p>
                    <p onClick={() => scrollTo(blockRef3.current)}>Отзывы</p>
                </div>
                <div className={s.responsibleBtns}>
                    <input
                        id="menu__toggle"
                        type="checkbox"
                        checked={value}
                        onChange={(e) => setValue(e.target.checked)}
                    />
                    <label className="menu__btn" htmlFor="menu__toggle">
                        <span></span>
                    </label>
                </div>
            </div>
        </>
    )
}

export default Header