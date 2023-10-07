import React, { useContext, createContext, useState, useEffect } from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth'
import { auth } from '../Firebase/firebaseConfig';
const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState('')
  const [user, setUser] = useState(null)

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
  const logout = () => signOut(auth)

  useEffect(()=>{
    onAuthStateChanged(auth, currentUser => {
      setUser(currentUser)
    })
  },[])
  return (
    <AuthContext.Provider value={{ singin, singup, isModalOpen, modalType, toggleModal, user, logout }}>
      {children}
    </AuthContext.Provider>
  )
}
export const useAuth = () => useContext(AuthContext)
export default AuthProvider