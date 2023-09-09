import React, { useRef } from 'react';
import { Autoplay, Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import maxresdefault from '../assets/maxresdefault.jpg';
import Banner1 from '../assets/Banner1.webp';
import Banner2 from '../assets/Banner2.webp';
import Banner3 from '../assets/Banner3.webp';
import Banner4 from '../assets/Banner4.webp';
import Banner0 from '../assets/Banner0.jpg';
import Banner23 from '../assets/Banner23.jpg';
import './slider.css'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Slider = () => {
    const swiperRef = useRef(null); // any o swiperType
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
        <section className='relative w-full md:max-w-7xl mx-auto'>
            <Swiper className='md:max-w-7xl mx-6'
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={0}
                slidesPerView={1}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false
                }}
                loop
                pagination={{ clickable: true }}
                onSlideChange={() => null}>
                <SwiperSlide><img src={Banner2} alt="" /></SwiperSlide>
                <SwiperSlide><img src={Banner1} alt="" /></SwiperSlide>
                <SwiperSlide><img src={maxresdefault} alt="" /></SwiperSlide>
                <SwiperSlide><img src={Banner0} alt="" /></SwiperSlide>
                <SwiperSlide><img src={Banner3} alt="" /></SwiperSlide>
                <SwiperSlide><img src={Banner4} alt="" /></SwiperSlide>
                <SwiperSlide><img src={Banner23} alt="" /></SwiperSlide>
            </Swiper>
            <div className='absolute inset-0 z-10 flex justify-between items-center px-1'>
                <button className='custom-btn text-xs' onClick={goPrev}>Anterior</button>
                <button className='custom-btn text-xs' onClick={goNext}>Siguiente</button>
            </div>
        </section>
    )
}

export default Slider