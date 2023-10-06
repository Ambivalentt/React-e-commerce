import React, { useContext, createContext, useState } from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../Firebase/firebaseConfig';
const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState('')

  const toggleModal = (type) => {
    setModalType(type)
    setIsModalOpen(true)
  }
 
  const singup = (name, email, password) => {
   return createUserWithEmailAndPassword(auth, email, password)
  }
  const singin = (email, password) =>{
    return signInWithEmailAndPassword(auth, email, password)
  }
  return (
    <AuthContext.Provider value={{ singin, singup, isModalOpen, modalType, toggleModal }}>
      {children}
    </AuthContext.Provider>
  )
}
export const useAuth = () => useContext(AuthContext)
export default AuthProvider