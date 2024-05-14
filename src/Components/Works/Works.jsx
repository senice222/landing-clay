import React from 'react'
import s from './Works.module.scss'
import { HeartRotate } from './Svgs'
import a1 from '../../assets/a1.png'
import b1 from '../../assets/b1.png'
import c1 from '../../assets/c1.png'
import d1 from '../../assets/d1.png'
import e1 from '../../assets/e1.png'
import f1 from '../../assets/f1.png'
import g1 from '../../assets/g1.png'


const Works = () => {
    return (
        <div className={s.Works}>
            <div className={s.titleDiv}>
                <div className={s.heart}>
                    <HeartRotate /></div>
                <h1 className={s.textExample}>Примеры работ наших <span>учеников</span></h1>
            </div>
            <div className={s.blocks}>
                <div className={s.leftContainer}>
                    <div className={s.verticalDiv}>
                        <img className={s.firstImg} src={a1} alt="img" />
                        <img className={s.secondImg} style={{ marginLeft: "35px" }} src={b1} alt="img" />
                        <img className={s.thirdImg} style={{ marginLeft: "35px" }} src={c1} alt="img" />
                    </div>
                    <div className={s.verticalDiv}>
                        <div>
                        <img className={s.fourthImg} src={d1} alt="img" />
                        <img className={s.FifthImg} style={{ marginLeft: "120px" }} src={e1} alt="img" />
                        </div>
                        <img className={s.SixthImg} style={{ marginLeft: "15" }} src={f1} alt="img" />
                        <img className={s.seventh} src={g1} alt='img' />
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Works