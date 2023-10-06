import React, { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import './NavBarActive.css'
import './font.css'

const NavbarProducts = () => {
    const [showNav, setShowNav] = useState(false);
    useEffect(() => {
        const timer = setTimeout(() => {
            setShowNav(true);
        }, 1000);

        return () => {
            clearTimeout(timer);
        };
    }, []);


    const routes = [
        {
            path: '/',
            text: 'Home'
        },
        {
            path: '/smartphones',
            text: 'Moviles'
        },
        {
            path: '/laptops',
            text: 'Laptops'
        },
        {
            path: '/home-decoration',
            text: 'HomeDecoration'
        },
        {
            path: '/furniture',
            text: 'Furniture'
        }
    ]
    return (
        <nav className={`pt-[6rem] sticky z-20 pb-8 lg:ms-[4rem]  transition-opacity duration-[2s]  ${showNav ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}
        >
            <ul className='flex flex-wrap items-center justify-center lg:justify-start ps-1 gap-x-3 md:gap-x-3 font-bold uppercase text-sm font-mono'>
                {routes.map((product) => (
                    <li key={product.path} className='font-custom'>
                        <NavLink to={`/products${product.path}`}
                        className={({isActive}) => `navbar-active  ${isActive ? ' active' : ''}`}
                        >{product.text}</NavLink>
                    </li>
                ))}
            </ul>
        </nav>
        
    )
}

export default NavbarProducts