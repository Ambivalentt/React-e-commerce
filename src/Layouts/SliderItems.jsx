import React, { useEffect, useRef, useState } from 'react';
import { Autoplay, Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FiStar } from "react-icons/fi";
import { FiShoppingCart } from "react-icons/fi";
import { useTheme } from '../components/Context/ThemeProvider';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
const SliderItems = ({ products }) => {
    const swiperRef = useRef(null); // any o swiperType
    const [showContent, setShowContent] = useState(false);
    const { theme } = useTheme()
    useEffect(() => {
        const timer = setTimeout(() => {
            setShowContent(true);
        }, 100);

        return () => {
            clearTimeout(timer);
        };
    }, []);

    const goNext = () => {
        if (swiperRef.current) {
            swiperRef.current.slideNext();
        }
    };

    const goPrev = () => {
        if (swiperRef.current) {
            swiperRef.current.slidePrev();
        }
    };

    return (
        <section className={` transition-opacity ${showContent ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}>
            <article className='relative flex justify-center lg:max-w-[440px] md:max-w-2xl xl:max-w-[35rem] mx-auto'>
                <Swiper
                    onSwiper={(swiper) => (swiperRef.current = swiper)}
                    modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={5}
                    slidesPerView={2}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false
                    }}
                    loop
                    scrollbar={{
                        hide: true,
                    }}
                    onSlideChange={() => null}>
                    {products.map((product) => (
                        <SwiperSlide key={product.id} >
                            <article className={`flex flex-col rounded-xl h-72 duration-500 transition-all font-semibold border-gray-300 border 
                                               ${theme === 'light' ? 'bg-white text-black' : 'bg-gray-500 text-white'}`}>
                                <figure className='h-3/4 relative overflow-hidden rounded-t-xl'>
                                    <img className='object-fill h-full w-full' src={product.images[0]} alt="" />
                                    <p className='absolute text-white top-2 left-4 flex items-center bg-red-700 rounded-xl px-2'><FiStar /> {product.rating}</p>
                                    <span className='absolute top-2 right-4 flex text-xl bg-red-700 text-white rounded-xl items-center justify-center px-2 py-1'><FiShoppingCart /></span>
                                </figure>
                                <div className='text-center h-1/4 flex-col font-semibold items-center flex justify-center'>
                                    <p>{product.title}</p>
                                    <span className='text-sm font-light'>stock:{product.stock}</span>
                                </div>
                            </article>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <button className='hidden lg:block custom-btn top-[44%] -left-7 opacity-60' onClick={goPrev}> <FaChevronLeft /> </button>
                <button className='hidden lg:block custom-btn top-[44%] -right-7 opacity-60' onClick={goNext}><FaChevronRight /></button>

            </article>
        </section>
    )
}

export default SliderItems

