import React from 'react'
import s from './Footer.module.scss'
import { Mail } from './Svgs'
const Footer = () => {
    return (
        <div className={s.Footer}>
            <div className={s.topDiv}>
                <p>© ООО “Глиняное сердце”</p>
                <div>
                    <p>Все права защищены</p>
                    <p>Для лиц старше 18 лет</p>
                </div>
            </div>
            <div className={s.bottomDiv}>
                <div>
                    <p>Пользовательское соглашение</p>
                    <p>Политика конфеденциальности</p>
                </div>

                <div className={s.mail}>
                    <Mail />
                    <h2>glininoe.serdce@gmail.ru</h2>
                </div>
            </div>
        </div>
    )
}

export default Footer