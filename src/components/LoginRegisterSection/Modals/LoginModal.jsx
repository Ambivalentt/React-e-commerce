import React, { useState, useContext, useRef, useEffect } from "react"
import { BsFillXCircleFill } from "react-icons/bs";
import { useAuth } from "../../Context/AuthProvider";
import { useNavigate } from "react-router-dom";

const LoginModal = () => {
    const { toggleModal, singin } = useAuth()
    const [error, setError] = useState('')
    const focusRef = useRef(null);
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
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
            await singin(formData.email, formData.password)
            navigate('/')
        } catch (error) {
            console.log(error.message);
        }
    }


   
    return (
        <section onKeyDown={handleEscapekey} className="bg-black fixed flex justify-center items-center inset-0 z-50 bg-opacity-60">
            <main className="bg-white absolute flex rounded-lg shadow-xl max-w-lg  max-h-96  ">
                <button onClick={handleModalClose} className=" absolute right-5 top-3 text-xl text-red-900">
                    <BsFillXCircleFill />
                </button>
                <form onSubmit={handleFormSubmit} className="flex p-3 justify-center gap-y-2 items-center flex-col h-full lg:p-10" action="">
                    <div className="flex gap-x-5 flex-col xl:flex-row items-center">
                        <label className="xl:w-20 text-black font-semibold " htmlFor="email">Email</label>
                        <input className="border-2 w-64 text-black  border-gray-400"
                            type="email" name="email"
                            autoComplete="off"
                            value={formData.name}
                            ref={focusRef}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className="flex gap-x-5 flex-col xl:flex-row items-center">
                        <label className="xl:w-20 font-semibold text-black" htmlFor="password ">Password</label>
                        <input className="border-2 w-64  border-gray-400 text-black"
                            type="password"
                            value={formData.password}
                            name="password"
                            onChange={handleInputChange}
                        />
                    </div>
                    <button className="bg-blue-950 w-72 py-1 text-white font-semibold rounded-lg" type="submit">Login</button>
                </form>
            </main>
        </section>
    )
}

export default LoginModal