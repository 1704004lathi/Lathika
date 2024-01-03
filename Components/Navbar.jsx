import React from 'react';
import './Navbar.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import logo from '../assets/logo.png';
import { useNavigate } from 'react-router-dom';
const Navbar=()=>
{
    const navigate= useNavigate();
    return(
        <div className='navbar'>

            <img src={logo} alt="" className='logo'/>
            <h1 className='H'>HEALTHY</h1> <h1 className='L'>LIVING</h1>

            <ul>
                <a href='/HomePage'><li>Home</li></a>
                <a href='/About'><li>About</li></a>
                <a href='/Rating'><li>Review</li></a>
                <a href='/ContactForm'><li>Contact</li></a>
            </ul>
            <div className='search-box'>
                <input type="text" placeholder='Search'/><FontAwesomeIcon icon={faSearch} className='co'/>
            </div>
            <button className="tin" onClick={() => navigate('/Login')}>LOGIN</button>

        </div>
    )
}
export default Navbar;