import './Styles/CustomStyles.css'
import './Styles/NavBar.css'
import { BsCart3 } from "react-icons/bs";
import { BiMenu } from "react-icons/bi";
import { useState, useEffect } from 'react'


const Navbar = () => {
    const [theme, setTheme] = useState(false);
    const [menuBtn, setMenuBtn] = useState(false);

    const handleMenuBtn = () =>{
        setMenuBtn(prevStatus => !prevStatus)
    }

    const handleTheme = () => {
        setTheme((prevTheme) => !prevTheme);
    }

    return (
        <nav className={`flex items-center justify-between transition-all duration-500 px-2 h-16 ${theme ? 'bg-black' : 'bg-gray-200'}`}>
            <div className={`block md:hidden relative text-5xl ${theme ? 'text-white' : 'text-black'}`}>
                <BiMenu onClick={handleMenuBtn} />
                <ul className={`font_rubik -left-2 pt-4 ps-4 overflow-hidden absolute rounded-b-lg transitio w-40 transition-all duration-500 flex-col select-none text-xl 
                ${theme ? 'default_theme_Navbar' && 'bg-black' : 'text-black' && 'bg-gray-200'} 
                ${menuBtn ? 'navbarMobileOpen': 'navbarMobileClose'}`}>
                    <li><a className='underline-animation' href="#">Home</a></li>
                    <li><a className='underline-animation' href="#">Products</a></li>
                    <li><a className='underline-animation' href="#">Promotions</a></li>
                    <li><a className='underline-animation' href="#">About Us</a></li>
                    <li><a className='underline-animation' href="#">Contact</a></li>
                </ul>
            </div>
            <section className="flex items-center h-full">
                <a href="#" className={`font-bold text-2xl pb-1.5 ${theme ? 'text-white' : 'text-black'}`}>Logo</a>
            </section>
            <ul className={`hidden font_rubik font-semibold md:flex items-center gap-x-5 select-none ${theme ? 'default_theme_Navbar' : 'text-black'}`}>
                <li className='underline-animation'><a href="#">Home</a></li>
                <li className='underline-animation'><a href="#">Products</a></li>
                <li className='underline-animation'><a href="#">Promotions</a></li>
                <li className='underline-animation'><a href="#">About Us</a></li>
                <li className='underline-animation'><a href="#">Contact</a></li>
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
    )
}

export default Navbar