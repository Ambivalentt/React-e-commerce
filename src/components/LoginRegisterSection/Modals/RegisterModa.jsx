import React, { useState, useContext, useRef, useEffect } from "react"
import { BsFillXCircleFill } from "react-icons/bs";
import { useAuth } from "../../Context/AuthProvider";
import { useNavigate } from "react-router-dom";


const RegisterModal = () => {
    const { toggleModal, singup, setIsModalOpen } = useAuth()
    const focusRef = useRef(null);
    const navigate = useNavigate()
    const [error, setError] = useState ()
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
    });

    useEffect(() => {
        focusRef.current.focus();
    }, [])

    const handleEscapekey = (e) => {
        if (e.key === 'Escape') {
            toggleModal('')
        }
    }

    const handleModalClose = (e) => {
        e.preventDefault()
        toggleModal('')
    }

    const handleInputChange = ({ target: { name, value } }) => {
        setFormData({ ...formData, [name]: value });
    }

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        try {
           await singup(formData.name, formData.email, formData.password)
            navigate('/')
            toggleModal('')
            setError('')
        }catch(error){
            setError(error.message)
        }
    }


    return (
        <section  onKeyDown={handleEscapekey} className="bg-black fixed inset-0 z-50 bg-opacity-60 ">
            <main className="bg-white  absolute inset-0 rounded-lg shadow-xl max-w-lg max-h-96 xl:max-h-56 m-auto">
                <button onClick={handleModalClose} className=" absolute right-5 top-3 text-xl text-red-900">
                    <BsFillXCircleFill />
                </button>
                <span className="text-red-900 text-sm fixed">{error}</span>
                <form onSubmit={handleFormSubmit} className="flex justify-center gap-y-2 items-center flex-col  h-full p-10" action="">
                    <div className="flex gap-x-5 flex-col xl:flex-row items-center">
                        <label className="xl:w-20 font-semibold text-black" htmlFor="name ">Name</label>
                        <input className="border-2 text-black  border-gray-400"
                            type="text"
                            name="name"
                            ref={focusRef}
                            value={formData.name}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className="flex gap-x-5 flex-col xl:flex-row items-center">
                        <label className="xl:w-20 font-semibold text-black" htmlFor="email">Email</label>
                        <input className="border-2 text-black   border-gray-400"
                            type="email"
                            name="email"
                            autoComplete="off"
                            value={formData.email}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className="flex gap-x-5 flex-col xl:flex-row items-center">
                        <label className="xl:w-20 font-semibold text-black" htmlFor="password ">Password</label>
                        <input className="border-2  text-black  border-gray-400"
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleInputChange}
                        />
                    </div>

                    <button className="bg-blue-950 w-72 py-1 text-white font-semibold rounded-lg" type="submit">Register</button>
                </form>
            </main>
        </section>
    )
}

export default RegisterModal