import React from 'react';
import { Routes, Route, useNavigate} from 'react-router-dom';
import AuthForm from './components/form';
import Header from './components/header';
import Footer from './components/footer';
import AboutUs from './components/about_us';
import Departments from './components/departments';
import Home from './components/home';
import Services from'./components/services';
import { toast, ToastContainer } from 'react-toastify';
import { useState, useEffect } from 'react';
// import firebase_config from './components/firebase_config';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.min.js";
import './styles/App.css'

export default function App() {
  const Navigate = useNavigate()
  useEffect(() => {
    const authToken = sessionStorage.getItem('Auth Token')
    if (authToken) {
      Navigate('/home')
    }
  }, [])
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')
  const handleAction=(id)=>{
      const authentication= getAuth();
      if (id===1){
        signInWithEmailAndPassword(authentication, email, password)
        .then((response)=>{
          Navigate('/Home')
          sessionStorage.setItem('Auth Token', response._tokenResponse.refreshToken)
          toast.success("Logged in Successfully")
        })
        .catch((error)=>{
          if (error.code === 'auth/wrong-password'){
            toast.error(" Wrong password entered please check your password")
          }
          if(error.code === 'auth/user-not-found'){
            toast.error(" User not found please check if email is correct. ")
          }
        })
      }
      if (id===2){
        createUserWithEmailAndPassword(authentication, email, password)
        .then((response)=>{
          Navigate('/Home')
          sessionStorage.setItem('Auth Token', response._tokenResponse.refreshToken)
          toast.success("User Created")
        })
        .catch((error)=>{
          if(error.code === 'auth/email-already-in-use'){
            toast.error("E-mail already in use.")
          }
        })
      }   
  }
  const authToken = sessionStorage.getItem('Auth Token')
  return (
  <>
  {
    authToken ? <Header/>:<></>
  }
  
    <ToastContainer/>
      <Routes>
      <Route path='/' element={<AuthForm
                                title="Login"
                                setEmail={setEmail}
                                setPassword={setPassword}
                                handleAction={()=>handleAction(1)}/>}/>
      <Route path='/register' element={<AuthForm 
                                title="Register"
                                setEmail={setEmail}
                                setPassword={setPassword}
                                handleAction={()=>handleAction(2)}/>}/>
      <Route path='home' element={<Home/>}/>
      <Route path='about_us' element={<AboutUs/>}/>
      <Route path='departments' element={<Departments/>}/>
      <Route path='services' element={<Services/>}/>
      <Route path='home/about_us' element={<AboutUs/>}/>
      <Route path='home/services' element={<Services/>}/>
    </Routes>
{
 authToken ? <Footer/>:<></> 
}         
      </>
    )
}
