import React from 'react'
import style from './StagesOfWork.module.scss'
import heart1 from '../../assets/heart1.png'
import heart2 from '../../assets/heart2.png'
import heart3 from '../../assets/heart3.png'

const StagesOfWork = ({blockRef1}) => {

    
    return (
        <div className={style.stagesContainer} ref={blockRef1}>
            <p className={style.masterText}>Проводим мастер-классы за гончарным кругом
                и по ручной <span>лепке из глины</span></p>
            <p className={style.descr}>Проведите время в кругу семьи и друзей, устройте романтичное свидание, а так же создайте прекрасное своими руками</p>
            <div className={style.stagesCarts}>
                <p className={style.title}>Этапы работы:</p>
                <div className={style.wrappItems}>
                    <div className={style.item}>
                        <div className={style.heartDiv}>
                            <img src={heart1} alt='/' />
                        </div>
                        <div className={style.content}>
                            <h3>Знакомство со школой и гончарным делом</h3>
                            <p>Нальем чай или кофе, угостим вкусняшками
                                и расскажем про разные техники работы
                                с глиной и этапы, которые проходит изделие
                                от комочка до функционального предмета.</p>
                        </div>
                    </div>
                    <div className={style.secondItem}>
                        <div className={style.heartDiv}>
                            <img src={heart2} alt='/' />
                        </div>
                        <div className={style.content}>
                            <h3>Лепка вместе с мастером</h3>
                            <p>Создаем изделие на гончарном круге или лепим вручную. Преподаватель направляет, помогает придать форму и подсказывает техники декора.</p>
                        </div>
                    </div>
                    <div className={style.item}>
                        <div className={style.heartDiv}>
                            <img src={heart3} alt='/' />
                        </div>
                        <div className={style.content}>
                            <h3>Обжиг готового изделия</h3>
                            <p>После мастер-класса изделие должно полностью высохнуть и пройти 2 длительных обжига в печи. Весь процесс может занимать несколько недель.
                                После второго обжига изделие становится пригодным для использования в быту, и его даже можно греть в микроволновке.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StagesOfWork