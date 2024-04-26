import React, { useState } from 'react';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="font-Noto bg-body py-4 px-4">
            <div className="container mx-auto flex justify-between items-center">

                <div className="flex-shrink-0">
                    <a href="#" className="text-gray-800  ">
                        <span className='text-xl font-bold'>Astro</span>
                        <span className='text-xl'>ship</span>
                    </a>
                </div>


                <div className="hidden md:flex items-center space-x-6">
                    <select name="features" id="features" class="border-none bg-body">
                        <option value="4"  selected class="">Features</option>
                        <option value="1">Feature 1</option>
                        <option value="2">Feature 2</option>
                        <option value="3">Feature 3</option>
                    </select>
                    <a href="#" className="text-gray-800 hover:text-gray-300">Pricing</a>
                    <a href="#" className="text-gray-800 hover:text-gray-300">About</a>
                    <a href="#" className="text-gray-800 hover:text-gray-300">Blog</a>
                    <a href="#" className="text-gray-800 hover:text-gray-300">Contact</a>
                    <a href="#" className="text-gray-800 hover:text-gray-300">Pro Version
                        <span className='bg-primary-200 text-xs px-2 text-white  ml-1 rounded-xl '>NEW</span></a>
                </div>


                <div className="flex md:hidden">
                    <button onClick={toggleMenu} className="text-black focus:outline-none">
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                d="M4 6h16M4 12h16m-7 6h7"></path>
                        </svg>
                    </button>
                </div>

                <div className="hidden md:flex items-center space-x-4">
                    <a href="#" className="text-gray-800">Login</a>
                    <a href="#" className="bg-black text-white py-2 px-4 rounded">Sign Up</a>
                </div>
            </div>


            {isMenuOpen && (
                <div className="md:hidden">
                    <div className="container mx-auto py-2">
                        <a href="#" className="text-gray-800 hover:text-gray-300">Features</a>
                        <a href="#" className="block text-gray-800 hover:text-gray-300">Pricing</a>
                        <a href="#" className="block text-gray-800 hover:text-gray-300">About</a>
                        <a href="#" className="block text-gray-800 hover:text-gray-300">Blog</a>
                        <a href="#" className="block text-gray-800 hover:text-gray-300">Contact</a>
                        <a href="#" className="block text-gray-800 hover:text-gray-300">Pro Version
                            <span className=' bg-primary-200 text-xs px-2 text-white  ml-1 rounded-xl '>NEW</span></a>
                        <div className='mt-3'>
                            <a href="#" className="text-gray-800">Login</a>
                            <a href="#" className="bg-black text-white py-2 px-4 ml-4 rounded">Sign Up</a>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
