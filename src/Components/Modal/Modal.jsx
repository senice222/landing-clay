import Datepicker from '../DatePicker/DatePicker'
import s from './Modal.module.scss'
import axios from 'axios'
import { Select, Space } from 'antd';
import { Cross } from './Svgs';
import { useForm } from 'react-hook-form';

const Modal = ({ isOpened, setOpened, activeProduct }) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    
    const handleChange = (value) => {
        console.log(`selected ${value}`);
    };
    const onSubmit = (data) => {
        try {
            const response = axios.post('API_IP', {
                fullName: data.fullName, phoneNumber: data.phoneNumber, product: activeProduct
            })
            console.log(response.data)
        } catch (e) {
            console.log(e)
        }
    };

    return (
        <div onClick={setOpened} className={`${s.modalBg} ${isOpened ? s.active : ""}`}>
            <div onClick={(e) => e.stopPropagation()} className={s.content}>
                <div className={s.titleDiv}>
                    <div className={s.title1}>Оформление заказа</div>
                    <div className={s.cross} onClick={() => setOpened(false)}><Cross /></div>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className={s.form}>
                        <p className={s.title}>Мастер-класс на двоих</p>
                        <div className={s.inputs}>
                            <label>Укажите ФИО</label>
                            <input
                                {...register("fullName", { required: 'Обязательное поле' })}
                                className={s.formInput}
                                type="text"
                                placeholder='Фио'
                                style={{ height: "48px" }}
                            />
                            {errors.fullName && <span className={s.error}>{errors.fullName.message}</span>}
                            <label>Номер телефона</label>
                            <input
                                {...register("phoneNumber", { required: 'Обязательное поле' })}
                                className={s.formInput}
                                type="text"
                                placeholder='Номер телефона'
                                style={{ height: "48px" }}
                            />
                            {errors.phoneNumber && <span className={s.error}>{errors.phoneNumber.message}</span>}
                            <label>Почта</label>
                            <input
                                {...register("email", { required: 'Обязательное поле' })}
                                className={s.formInput}
                                type="text"
                                placeholder='Почта'
                                style={{ height: "48px" }}
                            />
                            {errors.email && <span className={s.error}>{errors.email.message}</span>}
                            <label>Выберите дату</label>
                            <Datepicker />
                            <label>Выберите время</label>
                            <Select
                                defaultValue="10:00"
                                className={s.select}
                                style={{
                                    height: "48px",
                                    fontSize: "26px",
                                    fontFamily: "Raleway, sans-serif"
                                }}
                                onChange={handleChange}
                                options={[
                                    { value: '10:00', label: '10:00' },
                                    { value: '11:00', label: '11:00' },
                                ]}
                            />
                            <button className={s.pay}>Оплатить</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Modal