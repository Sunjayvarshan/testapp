import React from 'react';
import './header.css';
import people from '../../assets/people.png'
import himage from '../../assets/react2.png.png'

const Header = () => {
  return (
    <div className='gpt3__header section__padding' id='home'>
      <div className='gpt3__header-content'>
        <h1 className='gradient__text'>Let's build something amazing with this open-source framework</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos excepturi consequuntur, quis sequi laboriosam laborum quod dolorum tempore cumque.</p>
        <div className='gpt3__header-content__input'>
          <input type='email' placeholder='Your Email Address'/>
          <button type='button'>Get Started</button>
        </div>
        <div className='gpt3__header-content__people'>
          <img src={people} alt='people'/>
          <p>React has a community of millions of developers</p>
        </div>
      </div> 
      <div className='gpt3__header-image'>
        <img src={himage} alt='logo'/>  
      </div> 
    </div>
  )
}

export default Header
