import Slider from "../../Layouts/SliderHome"
import Footer from "../../Layouts/Footer"
import HomeSectionShow from "./HomeFeatures/HomeShowItems"
import { useTheme } from "../Context/ThemeProvider"
const Home = () => {
    const {theme} = useTheme()
    
    return (
     <>
        <main className={`pt-[100px] flex flex-col gap-y-16
                        ${theme === 'light'? 'bg-white': 'bg-gradient-to-r  from-[#1a202c] to-[#2d3748]'}
        `}>
            <Slider/>
            <HomeSectionShow/>
        </main>
        <Footer/>
     </>
    )
}

export default Home