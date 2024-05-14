import React from 'react'
import style from './Services.module.scss'
import firstImg from '../../assets/5.png'
import secondImg from '../../assets/7.png'
import thirdImg from '../../assets/8.png'
import fourthImg from '../../assets/0.png'
import { HeartRotate } from '../Works/Svgs'
import { HeartIcon } from './Svgs'

const Services = ({blockRef2, setIsOpened, setActiveProduct}) => {
    return (
        <div className={style.serviceContainer} ref={blockRef2}>
            <div className={style.heartAbosolute}>
                <HeartRotate />
            </div>
            <div className={style.titleDiv}>
                <p className={style.titleServices}>НАШИ УСЛУГИ</p>
            </div>
            <div className={style.servicesWrapper}>
                <div className={style.item}>
                    <div className={style.textDiv}>
                        <p>Мастер-класс на одного</p>
                    </div>
                    <img src={firstImg} alt="/" />
                    <div className={style.descr}>
                        <div className={style.descrItem}>
                            <HeartIcon />
                            <p>Теоретическое введение</p>
                        </div>
                        <div className={style.descrItem}>
                            <HeartIcon />
                            <p>Лепка под присмотром мастера</p>
                        </div>
                        <div className={style.descrItem}>
                            <HeartIcon />
                            <p>Украшение</p>
                        </div>
                    </div>
                    <div className={style.btnDiv}>
                        <div className={style.amount}>
                            <p>1,5 часа/ 1499 ₽</p>
                        </div>
                        <div className={style.btnContainer}>
                            <button onClick={
                                () => {
                                    setActiveProduct({name: "Мастер-класс на одного", price: "1,5 часа/ 1499 ₽"})
                                    setIsOpened(true)
                            }}>Забронировать</button>
                        </div>
                    </div>
                </div>
                <div className={style.item}>
                    <div className={style.textDiv}>
                        <p>Мастер-класс для двоих</p>
                    </div>
                    <img src={secondImg} alt="/" />
                    <div className={style.descr}>
                        <div className={style.descrItem}>
                            <HeartIcon />
                            <p>Теоретическое введение</p>
                        </div>
                        <div className={style.descrItem}>
                            <HeartIcon />
                            <p>Лепка под присмотром мастера</p>
                        </div>
                        <div className={style.descrItem}>
                            <HeartIcon />
                            <p>Украшение</p>
                        </div>
                        <div className={style.descrItem}>
                            <HeartIcon />
                            <p>Предложим закуски и напитки</p>
                        </div>
                    </div>
                    <div className={style.btnDiv}>
                        <div className={style.amount}>
                            <p>2 часа/ 2990 ₽</p>
                        </div>
                        <div className={style.btnContainer}>
                            <button onClick={() => {
                                setIsOpened(true)
                                setActiveProduct({name: "Мастер-класс для двоих", price: "2 часа/ 2990 ₽"})
                                }}>Забронировать</button>
                        </div>
                    </div>
                </div>
                <div className={style.item}>
                    <div className={style.textDiv}>
                        <p>Подарочный сертификат</p>
                    </div>
                    <img src={thirdImg} alt="/" />
                    <div className={style.descr}>
                        <div className={style.descrItem}>
                            <HeartIcon />
                            <p>2 занятия по 2 часа для двоих</p>
                        </div>
                        <div className={style.descrItem}>
                            <HeartIcon />
                            <p>Все тоже, что в мастер-классах</p>
                        </div>
                        <div className={style.descrItem}>
                            <HeartIcon />
                            <p>Уединенная атмосфера</p>
                        </div>
                    </div>
                    <div className={style.btnDiv}>
                        <div className={style.amount}>
                            <p>4 часа/ 4990 ₽</p>
                        </div>
                        <div className={style.btnContainer}>
                            <button onClick={() => {
                                setIsOpened(true)
                                setActiveProduct({name: "Подарочный сертификат", price: "4 часа/ 4990 ₽"})
                            }
                                }>Забронировать</button>
                        </div>
                    </div>
                </div>
                <div className={style.item}>
                    <div className={style.textDiv}>
                        <p>Абонемент на 1 месяц</p>
                    </div>
                    <img src={fourthImg} alt="/" />
                    <div className={style.descr}>
                        <div className={style.descrItem}>
                            <HeartIcon />
                            <p>Основы работы гончарного круга</p>
                        </div>
                        <div className={style.descrItem}>
                            <HeartIcon />
                            <p>Основы ручной лепки</p>
                        </div>
                        <div className={style.descrItem}>
                            <HeartIcon />
                            <p>Основы глазировки изделий</p>
                        </div>
                    </div>
                    <div className={style.btnDiv}>
                        <div className={style.amount}>
                            <p>1 месяц/ 6990 ₽</p>
                        </div>
                        <div className={style.btnContainer}>
                            <button onClick={() => {
                                setIsOpened(true)
                                setActiveProduct({name: "Абонемент на 1 месяц", price: "1 месяц/ 6990 ₽"})
                                }}>Забронировать</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services