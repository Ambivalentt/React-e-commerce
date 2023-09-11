import img_1_section from '../../../assets/HomeShowSection/section_img_1.avif'
import img_2_section from '../../../assets/HomeShowSection/section_img_2.avif'
import img_3_section from '../../../assets/HomeShowSection/section_img_3.webp'
import img_4_section from '../../../assets/HomeShowSection/section_img_4.avif'
import img_5_section from '../../../assets/HomeShowSection/section_img_5.avif'
import HomeShow from './HomeShow'


const HomeShowItems = () => {
    return (
        <section className='flex flex-col gap-y-5 md:gap-y-0 md:flex-row pb-20 justify-center max-w-[83rem] mx-auto overflow-hidden '>
            <article className='flex flex-row gap-x-4 md:gap-x-0 md:flex-col gap-y-5 mx-5 rounded-xl overflow-hidden'>
                <HomeShow img={img_1_section} details={'tittle'} discount={'Discount status'} />
                <HomeShow img={img_2_section} details={'tittle'} discount={'Discount status'} />
            </article>
            <article className='mx-5'>
                <HomeShow img={img_3_section} details={'tittle'} discount={'Discount status '} />
            </article>
            <article className='flex flex-row gap-x-4 md:gap-x-0 md:flex-col gap-y-5 mx-5 rounded-xl overflow-hidden'>
                <HomeShow img={img_4_section} details={'tittle'} discount={'Discount status'} />
                <HomeShow img={img_5_section} details={'tittle'} discount={'Discount status'} />
            </article>
        </section>
    )
}

export default HomeShowItems