import React from 'react'
import s from './MasterClass.module.scss'
import a from '../../assets/a.png'
import h from '../../assets/h.png'
import e from '../../assets/e.png'
import f from '../../assets/f.png'
import c from '../../assets/c.png'
import g from '../../assets/g.png'
import b from '../../assets/b.png'
import d from '../../assets/d.png'


const MasterClass = () => {
    return (
        <div className={s.MasterClass}>
            <h1 className={s.title}>Мастер-класс – это лепка руками или за гончарным кругом и декорирование в любой технике <span>сразу на занятии</span></h1>
            <div className={s.blocks}>
                <div className={s.verticalBlock}>
                    <img className={s.firstImg} src={a} alt='img' />
                    <img className={s.secondImg} src={h} alt='img' />
                </div>
                <div>
                    <div className={s.horizontalDiv}>
                        <img className={s.thirdImg} src={e} alt='img' />
                        <img className={s.fouthImg} src={f} alt='img' />
                    </div>
                    <div className={s.horizontalDiv}>
                        <img className={s.fifthImg} src={c} alt='img' />
                        <img className={s.sixthImg} src={g} alt='img' />
                    </div>
                </div>
                <div className={s.verticalBlock}>
                    <img className={s.seventhImg} src={b} alt='img' />
                    <img className={s.eightsImg} src={d} alt='img' />
                </div>
            </div>
            <div className={s.responsibleblocks}>
                <div className={s.flexovik}>
                    <div className={s.verticalBlock}>
                        <img className={s.firstImg} src={a} alt='img' />
                        <img className={s.secondImg} src={b} alt='img' />
                    </div>
                    <div className={s.verticalBlock}>
                        <img className={s.thirdImg} src={e} alt='img' />
                        <img className={s.fouthImg} src={f} alt='img' />
                    </div>
                </div>
            </div>
            <div className={s.responsibleblocks}>
                <div className={s.flexovik}>
                    <div className={s.verticalBlock}>
                        <img className={s.fifthImg} src={h} alt='img' />
                        <img className={s.sixthImg} src={g} alt='img' />
                    </div>
                    <div className={s.verticalBlock}>
                        <img className={s.seventhImg} src={c} alt='img' />
                        <img className={s.eightsImg} src={d} alt='img' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MasterClass