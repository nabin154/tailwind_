import React from 'react'
import { FaCloudDownloadAlt, FaGithub,FaReact  } from "react-icons/fa";
import { SiTailwindcss ,SiVercel } from "react-icons/si";
import { AiFillAndroid ,AiFillFire } from "react-icons/ai";
import Toast from './components/Toast';
import { useToast } from '../context/DataProvider';

const Home = () => {
const {showToast}=  useToast();
    const handleClick = () =>{
        showToast("Custom Success message", "success", 5000);
    }
    return (
        <>
            <div className='bg-body py-20 px-7 md:px-10'>
                <div className=' flex  '>
                    <div className='w-100 md:w-1/2'>
                        <h1 className='text-5xl md:text-7xl font-bold'>
                            Marketing website done with Astro
                        </h1>
                        <p className='mt-8 text-xl text-para'>
                            Astroship is a starter template for startups, marketing websites & landing pages.Built with Astro.build and TailwindCSS. You can quickly create any website with this starter.
                        </p>
                        <div className='mt-8 flex items-center flex-col md:flex-row '>
                            <button className='flex items-center w-full md:w-auto px-5 py-2 rounded-sm text-white text-lg bg-black '
                                onClick={() => showToast("Warning message", "warning", 5000)}>
                                <FaCloudDownloadAlt />
                                <span className='ml-2'>Download for free</span>
                            </button>
                            <button className='flex  items-center w-full mt-3 md:mt-0 md:w-auto px-5 py-1 md:ml-5    rounded-sm border-2 text-lg border-black border-solid'
                            onClick={handleClick}>
                                <FaGithub />
                                <span className='ml-2'>Github Repo</span>
                            </button>
                        </div>
                    </div>
                    <div className='hidden md:inline-block'>
                        <img src="/hero.png" alt="" />
                    </div>
                </div>
            </div>

            <Toast />

            {/* end ofthe  hero section */}


            <div >
                <div className='px-8   py-20' >
                    <h1 className='text-4xl md:text-5xl font-bold'>
                        Everything you need to start a website
                    </h1>
                    <p className='mt-4 text-xl text-para'>
                        Astro comes batteries included. It takes the best parts of state-of-the-art tools and adds its own innovations.

                    </p>
                </div>

                {/* start ofthe  grid */}
                
                <div className='px-12 grid sm:grid-cols-2 md:grid-cols-3 gap-10 '>
                    <div className='flex  items-start shadow-lg    p-2'>
                        <FaGithub fontSize={'50px'} />
                        <div className='ml-3'>
                            <h3 className='font-bold  text-xl'>Bring Your Own Framework</h3>
                            <p className='mt-3 text-lg text-para'>Build your site using React, Svelte, Vue, Preact, web components, or just plain ol' HTML + JavaScript.</p>
                        </div>
                    </div>
                    <div className='flex  items-start shadow-lg   p-2'>
                        <FaGithub fontSize={'50px'} />
                        <div className='ml-3'>
                            <h3 className='font-bold  text-xl'>Bring Your Own Framework</h3>
                            <p className='mt-3 text-lg text-para'>Build your site using React, Svelte, Vue, Preact, web components, or just plain ol' HTML + JavaScript.</p>
                        </div>
                    </div>
                    <div className='flex  items-start shadow-lg   p-2 '>
                        <FaGithub fontSize={'50px'} />
                        <div className='ml-3'>
                            <h3 className='font-bold  text-xl'>Bring Your Own Framework</h3>
                            <p className='mt-3 text-lg text-para'>Build your site using React, Svelte, Vue, Preact, web components, or just plain ol' HTML + JavaScript.</p>
                        </div>
                    </div>
                    <div className='flex  items-start shadow-lg   p-2'>
                        <FaGithub fontSize={'50px'} />
                        <div className='ml-3'>
                            <h3 className='font-bold  text-xl'>Bring Your Own Framework</h3>
                            <p className='mt-3 text-lg text-para'>Build your site using React, Svelte, Vue, Preact, web components, or just plain ol' HTML + JavaScript.</p>
                        </div>
                    </div>
                    <div className='flex  items-start shadow-lg    p-2 '>
                        <FaGithub fontSize={'50px'} />
                        <div className='ml-3'>
                            <h3 className='font-bold  text-xl'>Bring Your Own Framework</h3>
                            <p className='mt-3 text-lg text-para'>Build your site using React, Svelte, Vue, Preact, web components, or just plain ol' HTML + JavaScript.</p>
                        </div>
                    </div>
                    <div className='flex  items-start shadow-lg   p-2'>
                        <FaGithub fontSize={'50px'} />
                        <div className='ml-3'>
                            <h3 className='font-bold  text-xl'>Bring Your Own Framework</h3>
                            <p className='mt-3 text-lg text-para'>Build your site using React, Svelte, Vue, Preact, web components, or just plain ol' HTML + JavaScript.</p>
                        </div>
                    </div>

                </div>

                {/* end ofthe  grid */}
                <div className='mt-20'>
                    <p className='text-center text-md text-para'>Works with your technologies</p>
                    <div className='flex gap-5  md:gap-20 px-20 justify-around md:justify-center  mt-10  pb-20 '>
                     <FaReact fontSize={'50px'}/>
                     <FaGithub fontSize={'50px'}/>
                     <SiTailwindcss fontSize={'50px'}/>
                     <SiVercel SiVercel  fontSize={'50px'}/>
                     <AiFillAndroid fontSize={'50px'}/>
                     <AiFillFire  fontSize={'50px'}/>
                   
                    </div>
                </div>
            </div>

             {/* end ofthe  second section */}

             <div className=' px-7 md:px-32 py-15 mb-10'>
                <div className='bg-black rounded-xl py-16 flex flex-col items-center'>
                    <h1 className='text-6xl text-center text-white'>Build faster websites.</h1>
                    <p className='text-para text-xl mt-4 text-center'>Pull content from anywhere and serve it fast with Astro's next-gen island architecture.</p>
                    <button className='bg-white rounded px-6 py-2 text-lg text-center text-gray-800 mt-4'>Get started</button>
                </div>
             </div>

             {/* end ofthe  third section */} 

          
        </>
    )
}

export default Home
