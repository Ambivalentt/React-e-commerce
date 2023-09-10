import React,{useState, useEffect} from 'react'
import { BsTwitter, BsInstagram, BsGithub, BsFacebook, BsDribbble } from "react-icons/bs";
import Stackblack from '../assets/Stackblack.png'


const Footer = () => {

    const [showFooter, setShowFooter] = useState(false);

    useEffect(() => {
      const timer = setTimeout(() => {
        setShowFooter(true);
      }, 500);
  
      return () => {
        clearTimeout(timer);
      };
    }, []);


    return (
        <footer className={`bg-gray-100 h-72 w-full flex justify-end items-center transition-opacity ${
            showFooter ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
            <main className="bg-gray-200 w-full shadow-xl max-w-5xl h-64 mx-auto p-5 rounded-xl items-center  ">
                <section className="flex border-gray-400 pb-14 border-b-2 ">
                    <figure className="flex w-2/6 h-full">
                        <img className="flex w-40" src={Stackblack} alt="" />
                    </figure>
                    <article className="flex w-4/6 justify-center gap-x-6">
                        <ul className="flex flex-col text-gray-700 gap-y-3">
                            <p className="font-bold">ABOUT</p>
                            <li>Tailwind CSS</li>
                            <li>REACT</li>
                        </ul>
                        <ul className="flex flex-col text-gray-700  gap-y-3">
                            <p className="font-bold">FOLLOW US</p>
                            <li>Github</li>
                            <li>Discord</li>
                        </ul>
                        <ul className="flex flex-col text-gray-700  gap-y-3">
                            <p className="font-bold">LEGAL</p>
                            <li>Privacy Policy</li>
                            <li>Terms & Conditions</li>
                        </ul>
                    </article>
                </section>
                <section className="flex justify-between pt-3 items-center">
                    <span className="text-gray-500">&copy; 2023 Stack™</span>
                    <ul className="flex gap-x-3 text-gray-500">
                        <li><BsTwitter/></li>
                        <li><BsInstagram/></li>
                        <li><BsGithub/></li>
                        <li><BsFacebook/></li>
                        <li><BsDribbble/></li>
                    </ul>
                </section>
            </main>
        </footer>
    )
}

export default Footer