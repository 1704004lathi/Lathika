import './App.css';
import {Routes,Route} from 'react-router-dom';
import React from 'react';
import {SignInNo} from './Components/Signup.jsx';
import { LogInNo } from './Components/login.jsx';
import {AdressNo} from './Components/Address.jsx';
//import Pancard from './Components/pan.js';
import Navbar from './Components/Navbar.jsx';
import Home from './Components/Home.jsx';
import Footer from './Components/Footer/Footer.jsx';
import Terms from './Components/hf pages/Terms.jsx';
import Privacy from './Components/hf pages/Privacy.jsx';
import About from './Components/hf pages/About.jsx';
import Rating from './Components/hf pages/Rating.jsx';
import ContactForm from './Components/hf pages/ContactForm.jsx';
import HomePage from './Components/hf pages/HomePage.js';
import Faq from './Components/hf pages/Faq.jsx';
import Legal from './Components/hf pages/Legal.jsx';

function App() {
  return (
    <>     
    <Navbar/>
    <Routes>
      <Route index element={<Home />} />
      <Route exact path='/terms'element={<Terms/>}/>
      <Route exact path='/privacy'element={<Privacy/>}/>
      <Route exact path='/about'element={<About/>}/>
      <Route exact path='/About'element={<About/>}/>
      <Route exact path='/Rating'element={<Rating/>}/>
      <Route exact path='/ContactForm'element={<ContactForm/>}/>
      <Route exact path='/HomePage'element={<HomePage/>}/>
      <Route exact path='/Faq'element={<Faq/>}/>
      <Route exact path='/Legal'element={<Legal/>}/>
      <Route exact path='/Login'element={<LogInNo/>}/>
      <Route exact path='/Signup'element={<SignInNo/>}/>
      <Route exact path='/Adress'element={<AdressNo/>}/>
      
      
        </Routes>
    <Footer />
    </>
  );
}

export default App;
