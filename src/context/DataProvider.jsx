import React, { createContext, useContext, useState } from 'react'
const ToastContext = createContext();
export const useToast = () => useContext(ToastContext);

const DataProvider = ({ children }) => {
    const [show, setShow] = useState(false);
    const [timer, setTimer] = useState();
    const [message, setMessage] = useState();
    const [type, setType] = useState('');


    const handleClick = () => {
        setShow(false);
    }

    const getType = (type) => {
        switch (type) {
            case 'success':
                return 'bg-green-500';
            case 'error':
                return 'bg-red-500';
            case 'warning':
                return 'bg-yellow-500';
            default:
                return 'bg-gray-500';
        }
    };

    const showToast = (message, type, time) => {
        const bgColorClass = getType(type);
        setShow(true);
        setTimer(time);
        setMessage(message);
        setType(bgColorClass);

        if (timer) {
            clearTimeout(timer);
        }

        setTimeout(() => {
            setShow(false);
        }, timer);
    }

    return (
        <ToastContext.Provider value={{ show, type, handleClick, showToast,message }} >
            {children}
        </ToastContext.Provider>
    )
}

export default DataProvider;
