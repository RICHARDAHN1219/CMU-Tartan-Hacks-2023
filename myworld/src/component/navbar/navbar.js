import React from 'react';
import './Navbar.css'
import logo from '../../img/logo.png'

const Navbar = () => {
    return (
        <div className='navbar'>
        <div to='/' className='head'>
        <a href="https://reactjs.org" target="_blank" rel="noreferrer">
          <img src={logo} width = {240} height = {150}></img>
        </a>
        

        </div>

        <div className='links'>
            <div to='#project' smooth className='nav project'>Project</div>
            <div to='#about' smooth className='nav'>About</div>
            <div className='nav' href='/'>Resume</div>
        </div>
        </div>
    );
};

export default Navbar;
