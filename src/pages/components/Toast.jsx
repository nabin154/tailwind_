// Toast.js
import React, { useEffect, useState } from 'react';
import { useToast } from '../../context/DataProvider';
import { MdCancel } from "react-icons/md";
import { AiFillAlert } from "react-icons/ai";

const Toast = () => {
    const { show, type, handleClick, message }= useToast();
    return (
        <>
            {show && (
                <div className={`absolute top-0 left-1/3  shadow-md rounded-md text-white ${type}`}>
                    <button className='absolute top-0 right-0' onClick={handleClick}><MdCancel/></button>
                    <div className='flex gap-4 items-center px-7 py-2 text-xl'>
                        <AiFillAlert/>{message}</div>
                </div>
            )}
        </>
    );
};


export default Toast;