import './Styles/CustomStyles.css'
import './Styles/NavBar.css'
import { BsCart3 } from "react-icons/bs";
import { BiMenu } from "react-icons/bi";
import { useState, useEffect } from 'react'
import Stackblack from '../../assets/Stackblack.png'
import StackWhite from '../../assets/StackWhite.png'
import { NavLink, Link } from 'react-router-dom'
const Navbar = () => {
    const [theme, setTheme] = useState(false);
    const [menuBtn, setMenuBtn] = useState(false);

    const handleMenuBtn = () => {
        setMenuBtn(prevStatus => !prevStatus)
    }

    const handleTheme = () => {
        setTheme((prevTheme) => !prevTheme);
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
        <header>
            <nav className={`flex items-center fixed w-full z-20 justify-between shadow-xl transition-all duration-500 px-2 h-16 ${theme ? 'bg-black' : 'bg-gray-200'}`}>
                <div className={`block md:hidden relative text-5xl ${theme ? 'text-white' : 'text-black'}`}>
                    {/* Menu Mobile */}
                    <BiMenu onClick={handleMenuBtn} />
                    <ul className={`font_rubik -left-2 pt-4 ps-4 overflow-hidden absolute rounded-b-lg pe-3 transition-all duration-500 flex-col text-xl 
                ${theme ? 'default_theme_Navbar' && 'bg-black' : 'text-black' && 'bg-gray-200'} 
                ${menuBtn ? 'navbarMobileOpen' : 'navbarMobileClose'}
                `}>
                        {routes.map(route => (
                            <li className='flex' key={route.path}>  <NavLink to={route.path} className={({ isActive }) => `underline-animation ${isActive ? 'activeNav' : ''}`} key={route.path}>{route.text}</NavLink></li>
                        ))}
                    </ul>
                    {/* Menu Mobile */}
                </div>
                <section className="flex items-center h-full">
                    <img className='w-20' src={`${theme ? StackWhite : Stackblack}`} alt="" />
                </section>
                <ul className={`hidden font_rubik font-semibold md:flex items-center gap-x-5 select-none ${theme ? 'default_theme_Navbar' : 'text-black'}`}>
                    {routes.map(route => (
                        <NavLink to={route.path} className={({ isActive }) => `underline-animation ${isActive ? 'activeNav' : ''}`} key={route.path}>{route.text}</NavLink>
                    ))}
                </ul>
                <section className='flex items-center gap-x-4'>
                    <div className='relative'>
                        <BsCart3 className={`text-4xl relative ${theme ? 'text-white' : 'text-black'}`} />
                        <span className='absolute -top-2 -right-2 bg-red-500 rounded-full w-5 text-center text-white font-bold select-none'>0</span>
                    </div>

                    <div className={`darkTheme_Container border ${theme ? 'border-white' : 'border-black'}`} onClick={handleTheme}>
                        <div className={`darkTheme_toggle ${theme ? 'active_darktheme' : 'inactive_darktheme'}`}></div>
                    </div>
                </section>
            </nav>
        </header>
    )
}

export default Navbar