import React from 'react'
import style from './Reviews.module.scss'
import { HeartRotate } from '../Works/Svgs'
import a2 from '../../assets/a2.png'
import b2 from '../../assets/b2.png'
import c2 from '../../assets/c2.png'
import c3 from '../../assets/c3.png'
import c4 from '../../assets/c4.png'
import c5 from '../../assets/c5.png'


const Reviews = ({ blockRef3 }) => {
    return (
        <div className={style.reviewsContainer} ref={blockRef3}>
            <div className={style.heartAbosolute}>
                <HeartRotate />
            </div>
            <div className={style.titleDiv}>
                <p className={style.titleServices}>Отзывы о нашей
                    мастерской</p>
            </div>
            <div className={style.reviewWrapper}>
                <div className={style.firstBlock}>
                    <div className={style.firstItem}>
                        <img src={a2} alt="/" />
                        <div className={style.descr}>
                            <h3>Анна, 23 года</h3>
                            <p>Были с мужем на прошлой неделе! Я даже не думала, что это так освежит нашу бытовуху! Чувства вспыхнули как в начале брака всем рекомендую!</p>
                        </div>
                    </div>
                    <div className={style.firstItem}>
                        <div className={style.descr}>
                            <h3>Андрей, 38 лет</h3>
                            <p>Были с мужем на прошлой неделе! Я даже не думала, что это так освежит нашу бытовуху! Чувства вспыхнули как в начале брака всем рекомендую! Были с мужем на прошлой неделе! Я даже не думала, что это так освежит нашу бытовуху! Чувства вспыхнули как в начале брака всем рекомендую!</p>
                        </div>
                    </div>
                </div>
                <div className={style.secondBlock}>
                    <div className={`${style.firstItem} ${style.marginBlock}`}>
                        <div className={style.descr}>
                            <h3>Глеб, 22 года</h3>
                            <p>Были с мужем на прошлой неделе! Я даже не думала, что это так освежит нашу бытовуху! Чувства вспыхнули как в начале брака всем рекомендую!</p>
                        </div>
                    </div>
                    <div className={`${style.firstItem} ${style.marginBlock}`}>
                        <img src={b2} alt="/" />
                        <div className={style.descr}>
                            <h3>Мария, 32 года</h3>
                            <p>Были с мужем на прошлой неделе! Я даже не думала, что это так освежит нашу бытовуху! Чувства вспыхнули как в начале брака всем рекомендую!</p>
                        </div>
                    </div>
                    <div className={`${style.firstItem} ${style.marginBlock}`}>
                        <div className={style.descr}>
                            <h3>Анастасия, 19 лет</h3>
                            <p>Были с мужем на прошлой неделе! Я даже не думала, что это так освежит нашу бытовуху! Чувства вспыхнули как в начале брака всем рекомендую!</p>
                        </div>
                    </div>
                </div>
                <div className={style.thirdBlock}>
                    <div className={`${style.firstItem} ${style.marginBlockWithImg}`}>
                        <img src={c2} className={style.littleImg} alt="/" />
                        <img src={c3} className={style.littleImg} alt="/" />
                        <img src={c4} className={style.littleImg} alt="/" />
                        <img src={c5} className={style.littleImg} alt="/" />
                        <div className={style.descr}>
                            <h3>Мария, 32 года</h3>
                            <p>Были с мужем на прошлой неделе! Я даже не думала, что это так освежит нашу бытовуху! Чувства вспыхнули как в начале брака всем рекомендую!</p>
                        </div>
                    </div>
                    <div className={`${style.firstItem} ${style.marginBlock}`}>
                        <div className={style.descr}>
                            <h3>Дарья, 21 год</h3>
                            <p>Были с мужем на прошлой неделе! Я даже не думала, что это так освежит нашу бытовуху! Чувства вспыхнули как в начале брака всем рекомендую!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Reviews