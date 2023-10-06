import React, { useState } from 'react'
import '../../components/NavBar/Styles/CustomStyles.css'
import { useAuth } from '../Context/AuthProvider';
import LoginModal from './Modals/LoginModal';
import RegisterModal from './Modals/RegisterModa';

export const LoginRegisterHandle = () => {
    const { toggleModal, isModalOpen, modalType } = useAuth()
   
    const handleLoginClick = () => {
        toggleModal('login');
    };

    const handleRegisterClick = () => {
        toggleModal('register');
    };

    return (
        <>
            <div className="flex text-sm flex-row gap-x-4 font_rubik items-center font-semibold">
                <button onClick={handleLoginClick} className="bg-gray-900 text-white px-2 py-1.5 rounded-lg hover:bg-gray-700">Sing in</button>
                <button onClick={handleRegisterClick} className="bg-gray-900 text-white px-2 py-1.5 rounded-lg hover:bg-gray-700">Sing Up</button>
            </div>
            <section>
                {isModalOpen && (
                    <>
                        {modalType === 'login' ?  <LoginModal /> : null }
                        {modalType === 'register'?  <RegisterModal /> :  null }
                    </>
                )}
            </section>
        </>
    )
}

export default LoginRegisterHandle