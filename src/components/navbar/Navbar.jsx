import React from 'react';
import { useState } from 'react';
import {RiMenu3Line,RiCloseLine} from 'react-icons/ri'
import './navbar.css';
// import logo from '../../assets/logo.svg';
import react from '../../assets/react3.png.png';


const Menu =() =>(
  <>
    <p><a href='#home'>Home</a></p>
    <p><a href='#wgpt3'>What</a></p>
    <p><a href='#possibility'>Work</a></p>
    <p><a href='#features'>Features</a></p>
    <p><a href='#blog'>Library</a></p>
  </>
)

const Navbar = () => {
  const [toggleMenu,setToggleMenu] = useState(false)
  return (
    <div className='gpt3__navbar'>
      <div className='gpt3__navbar-links'>
        <div className='gpt3__navbar-links_logo'>
          <img src={react} alt="logo"/>
        </div>
        <div className='gpt3__navbar-links_container'>
          <Menu/>
        </div>
      </div>
      <div className='gpt3__navbar-sign'>
        <p>sign in</p>
        <button type="button">Sign up</button>
      </div>
      <div className='gpt3__navbar-menu'>
        {toggleMenu
          ?<RiCloseLine color='#fff' size={27} onClick={() =>setToggleMenu(false)}/>
          :<RiMenu3Line color='#fff' size={27} onClick={() =>setToggleMenu(true)}/>
        }
        {toggleMenu && (
          <div className='gpt3__navbar-menu_container scale-up-center'>
            <div className='gpt3__navbar-menu_container-links'>
              <Menu/>
              <div className='gpt3__navbar-menu-container-links-sign'>
                <p>sign in</p>
                <button type="button">Sign up</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar