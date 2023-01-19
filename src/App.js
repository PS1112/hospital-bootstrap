import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import About_us from './components/about_us';
import Departments from './components/departments';
import Home from './components/home';
import Services from'./components/services';
import Appointment_form from './components/appointment_form';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.min.js";
import './styles/App.css'

export default class App extends Component {
  render() {
    return (
      <>
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='about_us' element={<About_us/>}/>
        <Route path='departments' element={<Departments/>}/>
        <Route path='services' element={<Services/>}/>
        <Route path='appointment_form' element={<Appointment_form/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
        
      </>
    )
  }
}
