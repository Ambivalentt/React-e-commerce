import {useState} from 'react'
import './HomeShow.css'

const HomeShow = ({ img, details, discount }) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <div className='relative overflow-hidden rounded-xl group'
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}>
            <img className='rounded-xl group-hover:scale-105 transition-transform duration-300' src={img} alt="" />
            <p className='absolute bottom-4 pb-4 sm:bottom-20 md:bottom-6 lg:bottom-12 w-full flex justify-center font-semibold text-black text-xl'>{details}</p>
            <div className='absolute inset-0 samsung-font flex flex-col sm:pb-6 md:pb-0 lg:pb-3  items-center justify-end  leading-none '>
                <span className={`span-transition   ${isHovered ? 'span-hidden' : ''}`}>{discount}</span>
                <button className={`button-transition btn_Default text-xs sm:text-base  p-0.5 sm:p-1 md:p-0.5 lg:p-1 ${isHovered ? 'button-visible' : ''}`}>Comprar ahora</button>
            </div>
        </div>
    );
};


export default HomeShow