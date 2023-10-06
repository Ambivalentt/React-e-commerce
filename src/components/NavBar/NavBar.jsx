import './Styles/CustomStyles.css'
import './Styles/NavBar.css'

import { BiMenu } from "react-icons/bi";
import { useState, useEffect, useContext, useRef } from 'react'
import { useTheme } from '../Context/ThemeProvider'
import Stackblack from '../../assets/Stackblack.png'
import StackWhite from '../../assets/StackWhite.png'
import { NavLink, Link } from 'react-router-dom'
import LoginRegisterHandle from '../LoginRegisterSection/useModal';
import { BsFillPersonFill } from "react-icons/bs";
import { CartWidget } from '../CartWidget/CartWidget'

const Navbar = () => {
    // const [theme, setTheme] = useState(false);
    const [menuBtn, setMenuBtn] = useState(false);
    const [loginBtn, setLoginBtn] = useState(false)
    const { theme, handleTheme } = useTheme()

    const handleMenuBtn = () => {
        setMenuBtn(prevStatus => !prevStatus)
    }
    const handleThemeBtn = () => {
        handleTheme()
    }

    const handleLoginBtn = () => {
        setLoginBtn(prev => !prev)
    }
    const routes = [
        {
            path: '/',
            text: 'Home'
        },
        {
            path: '/products',
            text: 'Products'
        },
        {
            path: '/promotions',
            text: 'Promotions'
        },
        {
            path: '/about-us',
            text: 'About-us'
        },
        {
            path: '/contact',
            text: 'Contact'
        }
    ]
    return (
        <header className='relative w-full'>
            <nav className={`flex items-center fixed w-full  z-50 justify-between shadow-xl  px-2 md:px-10 h-16 
                            ${theme === "light" ? 'bg-gradient-to-r from-[#ffffff] to-[#e6e4e4] text-black' : ' text-white bg-gradient-to-r from-[#1a202c] to-[#0a0e13]'}`}>
                <section className={`block md:hidden transition duration-500 relative text-5xl ${theme === "light" ? 'text-black' : 'text-white'}`}>
                    <BiMenu onClick={handleMenuBtn} />
                </section>
                <section className="flex items-center h-full">
                    <img className='w-20' src={`${theme === "light" ? Stackblack : StackWhite}`} alt="" />
                </section>
                <ul className={`hidden font_rubik font-semibold md:flex duration-500 items-center gap-x-5 select-none ${theme === "light" ? 'text-black' : 'default_theme_Navbar'}`}>
                    {routes.map(route => (
                        <NavLink to={route.path} className={({ isActive }) => `underline-animation ${isActive ? 'activeNav' : ''}`} key={route.path}>{route.text}</NavLink>
                    ))}
                </ul>
                <section className='flex items-center gap-x-4'>
                    <section className='hidden xl:block'>
                        <LoginRegisterHandle />
                    </section>
                    <section className='text-4xl xl:hidden relative'>
                        <button className='flex items-center'
                            onClick={handleLoginBtn}>
                            <BsFillPersonFill />
                        </button>
                        <div className={`absolute w-40 -left-[3.6rem] -bottom-12 bg-gray-300 h-12 flex items-center justify-center rounded-xl
                                ${loginBtn ? 'block' : 'hidden'}`}>
                            <LoginRegisterHandle />
                        </div>
                    </section>
                    <CartWidget/>
                    <div className={`darkTheme_Container border ${theme === "light" ? 'border-white' : 'border-black'}`} onClick={handleThemeBtn}>
                        <div className={`darkTheme_toggle ${theme === "light" ? 'active_darktheme' : 'inactive_darktheme'}`}></div>
                    </div>
                </section>
            </nav>
            {/* NavbarMovile */}
            <nav className={`fixed flex top-[60px] z-40 overflow-hidden  rounded-b-lg w-full  transition-all duration-500 
                ${theme === "light" ? ' bg-gray-200 text-black' : 'text-white bg-gradient-to-r from-[#1a202c] to-[#0a0e13]'} 
                ${menuBtn ? 'navbarMobileOpen' : 'navbarMobileClose'}
                `}>
                <ul className='font_rubik flex flex-wrap justify-center items-center w-full gap-x-8 flex-row text-xl '>
                    {routes.map(route => (
                        <li className='flex' key={route.path}>  <NavLink to={route.path} className={({ isActive }) => `underline-animation ${isActive ? 'activeNav' : ''} `} key={route.path}>{route.text}</NavLink></li>
                    ))}
                </ul>
            </nav>
            {/* /////// */}
        </header>
    )
}

export default Navbar