import React, { useState, useEffect } from 'react'
import { BsTwitter, BsInstagram, BsGithub, BsFacebook, BsDribbble } from "react-icons/bs";
import Stackblack from '../assets/Stackblack.png'
import StackWhite from '../assets/StackWhite.png'
import { useTheme } from '../components/Context/ThemeProvider';

const Footer = () => {
    const [showFooter, setShowFooter] = useState(false);
    const { theme } = useTheme()
    useEffect(() => {
        const timer = setTimeout(() => {
            setShowFooter(true);
        }, 100);

        return () => {
            clearTimeout(timer);
        };
    }, []);


    return (
        <footer className={` flex justify-center  items-center h-[20rem] w-full transition-all duration-200 
        ${showFooter ? 'opacity-100' : 'opacity-0 pointer-events-none'}
        ${theme === 'light' ? 'bg-gray-200' : 'bg-gradient-to-r from-[#1a202c] to-[#141c25]'}
        `}
        >
            <section className={`w-full transition-all duration-200 flex-col justify-center items-center h-auto shadow-xl max-w-5xl  mx-auto p-5 rounded-xl
                                ${theme === 'light' ? 'bg-gray-300 text-gray-500' : 'bg-gray-800 text-gray-200'}`}>
                <article className="flex border-gray-400 flex-col gap-y-10 lg:gap-y-0 lg:flex-row justify-center items-center pb-14 border-b-2 ">
                    <figure className="flex lg:w-2/6 h-full">
                        <img className="flex w-40 transition-all duration-500" src={theme === 'light'?  Stackblack : StackWhite} alt="" />
                    </figure>
                    <article className={`flex lg:w-4/6 justify-center gap-x-6
                   `}>
                        <ul className={`flex flex-col  gap-y-3`}>
                            <p className="font-bold">ABOUT</p>
                            <li>Tailwind CSS</li>
                            <li>REACT</li>
                        </ul>
                        <ul className={`flex flex-col  gap-y-3`}>
                            <p className="font-bold">FOLLOW US</p>
                            <li>Github</li>
                            <li>Discord</li>
                        </ul>
                        <ul className="flex flex-col   gap-y-3">
                            <p className="font-bold">LEGAL</p>
                            <li>Privacy Policy</li>
                            <li>Terms & Conditions</li>
                        </ul>
                    </article>
                </article>
                <article className="flex justify-between pt-3 items-center">
                    <span className="font-semibold">&copy; 2023 Stack™</span>
                    <ul className="flex gap-x-3">
                        <li><BsTwitter /></li>
                        <li><BsInstagram /></li>
                        <li><BsGithub /></li>
                        <li><BsFacebook /></li>
                        <li><BsDribbble /></li>
                    </ul>
                </article>
            </section>
        </footer>
    )
}

export default Footer