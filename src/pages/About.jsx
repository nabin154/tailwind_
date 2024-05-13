import React, { useEffect, useState } from 'react'
import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";
const About = () => {
const [curr , setCurr] = useState(0);

useEffect(()=>{
    setTimeout(() => {
        if(curr <=2){
        setCurr(curr+1);
        }
        else{
            setCurr(0);
        }

    }, 2000);
},[curr]);
    const images = [
        'https://res.cloudinary.com/dobmlogth/image/upload/v1710947099/eogl3hrvfwcd9jb6h61e.png',
        'https://res.cloudinary.com/dobmlogth/image/upload/v1708327435/oivymmr1tmsuw3pmuqao.jpg',
        'https://res.cloudinary.com/dobmlogth/image/upload/v1701332064/zyyufbwfbl7uts9mbnt6.png',
        'https://res.cloudinary.com/dobmlogth/image/upload/v1710945088/yxaxcxxajm1qv635aetv.png'
    ]
    const prev = () => (curr === 0 ? setCurr(images.length - 1) : setCurr(curr - 1));
    const next = () => (curr === images.length - 1 ? setCurr(0) : setCurr(curr + 1));

    return (
        <div className='flex items-center justify-around bg-gradient-to-r from-left to-right' >
        <div className=' flex max-w-lg overflow-hidden  relative '>
            {images.map((image, index) => {
                    return <img src={image} alt="" className='object-cover ' style={{
                        transform: `translateX(-${curr * 100}%)`
                    }} />
                    })};
            <div className='flex items-center absolute h-full w-full justify-between'>
                <button onClick={prev} className='bg-white rounded-xl  p-4'><FaChevronLeft /></button>
                <button onClick={next} className='bg-white rounded-xl  p-4'><FaChevronRight /></button>
            </div>

        </div>

        <div>
                <div className='h-96 w-96  p-1 rounded-2xl bg-gradient-to-r from-blue-400 via-yellow-400 to-pink-600'>
                    <div className='bg-white h-full w-full rounded-2xl flex items-center  justify-center'>
                        <h2 className='text-5xl font-bold  bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-yellow-400 to-pink-600c'>Nabin Bhandari</h2>
                    </div>
                    </div>
        </div>
        </div>
    )
}

export default About
