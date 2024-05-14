import React, { useState, useRef, useEffect } from 'react';
import './DatePicker.scss';
import { Arrow } from './Svgs';

const DatePicker = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [selectedDate1, setSelectedDate1] = useState(new Date())
    const [isOpen, setIsOpen] = useState(false);
    const datePickerRef = useRef(null);
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (datePickerRef.current && !datePickerRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const daysOfWeek = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];

    const togglePicker = () => {
        setIsOpen(!isOpen);
    };

    const renderWeekDays = () => {
        const firstDayOfWeek = selectedDate.getDay();
        const days = [];

        for (let i = 0; i < 7; i++) {
            let past = false
            const currentDate = new Date(selectedDate);
            const nowData = new Date()
            
            
            currentDate.setDate(selectedDate.getDate() + i - firstDayOfWeek + 1);
            
            if ((currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate()).valueOf() === (nowData.getFullYear(), nowData.getMonth(), nowData.getDate()).valueOf()) {
                past = false
            }
            else if (currentDate <= nowData) {
                past = true
            }
            const select = () => {
                if (!past) {
                    setSelectedDate1(currentDate)
                }
            }
            days.push(
                <div key={i} onClick={select} className={`day ${past ? "past" : ""}`}>
                    {currentDate.getDate()}
                </div>
            );
        }

        return days;
    };

    const prevWeek = () => {
        const prevWeekDate = new Date(selectedDate);
        prevWeekDate.setDate(selectedDate.getDate() - 7);
        setSelectedDate(prevWeekDate);
    };

    const nextWeek = () => {
        const nextWeekDate = new Date(selectedDate);
        nextWeekDate.setDate(selectedDate.getDate() + 7);
        setSelectedDate(nextWeekDate);
    };

    return (
        <div className={`date-picker ${isOpen ? "active" : ""}`} ref={datePickerRef}>
            <div className="inputDiv" onClick={togglePicker}>
                <input
                    className="input"
                    type="text"
                    value={selectedDate1.toLocaleDateString()}
                    readOnly
                />
                <div className="arrow">
                    <Arrow />
                </div>
            </div>

            <div className="pickWrapper">
                <div className="arrow fst" onClick={prevWeek}><Arrow /></div>
                <div className="picker">
                    <div className="days-of-week">
                        {daysOfWeek.map((day) => (
                            <div key={day} className="day-name">{day.toUpperCase()}</div>
                        ))}
                    </div>
                    <div className="week-days">
                        {renderWeekDays()}
                    </div>
                </div>
                <div className="arrow lst" onClick={nextWeek}><Arrow /></div>
            </div>
        </div>
    );
};

export default DatePicker;