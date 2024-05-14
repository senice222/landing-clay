import { Header } from '../../Components/Header/Header'
import gsap from 'gsap';
import { useRef, useState } from 'react'
import ScrollToPlugin from 'gsap/ScrollToPlugin'
import s from './Main.module.scss'
import img from '../../assets/mainImg.png'
import StagesOfWork from '../../Components/StagesOfWork/StagesOfWork'
import Services from '../../Components/Services/Services'
import { MasterClass } from '../../Components/MasterClass/MasterClass'
import Works from '../../Components/Works/Works'
import Reviews from '../../Components/Reviews/Reviews'
import Footer from '../../Components/Footer/Footer'
import { Modal } from '../../Components/Modal/Modal';

const Main = () => {
    gsap.registerPlugin(ScrollToPlugin)
    const blockRef1 = useRef(null)
    const blockRef2 = useRef(null)
    const blockRef3 = useRef(null)
    const scrollTo = (target) => gsap.to(window, { duration: 1, scrollTo: target })
    const [isOpened, setIsOpened] = useState(false)
    const [activeProduct, setActiveProduct] = useState()
    return (
        <>
            <Modal activeProduct={activeProduct}  isOpened={isOpened} setOpened={() => setIsOpened(!isOpened)}/>
            <Header openModal={() => setIsOpened(true)} blockRef1={blockRef1} blockRef2={blockRef2} blockRef3={blockRef3} scrollTo={scrollTo} />
            <div className={s.mainContainer}>
                <div className={s.row}>
                    <img className={s.img} src={img} alt='/' />
                    <StagesOfWork blockRef1={blockRef1} />
                    <MasterClass />
                    <Services setActiveProduct={setActiveProduct} blockRef2={blockRef2} setIsOpened={setIsOpened} />
                    <Works />
                    <Reviews blockRef3={blockRef3} />
                    <Footer />
                </div>
            </div>
        </>
    )
}

export default Main