import Slider from "../../Layouts/SliderHome"
import Footer from "../../Layouts/Footer"
import HomeSectionShow from "./HomeFeatures/HomeShowItems"
const Home = () => {
    return (
     <>
        <main className="pt-[100px] flex flex-col gap-y-16">
            <Slider/>
            <HomeSectionShow/>
        </main>
        <Footer/>
     </>
    )
}

export default Home