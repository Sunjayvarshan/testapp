import React from 'react';
import './footer.css';
import react3 from '../../assets/react.png.png'

const Footer = () => {
  return (
    <div className='gpt3__footer section__paadding'>
      <div className='gpt3__footer-heading'>
        <h1 className='gradient__text'>Get Started , Take the Tutorial</h1>
      </div>
      <div className='gpt3__footer-btn'>
        <p>Get started</p>
      </div>
      <div className='gpt3__footer-links'>
        <div className='gpt3__footer-links_logo'>
          <img src={react3} alt='logo'/>
          <p>Facebook open source</p>
        </div>
        <div className='gpt3__footer-links_div'>
          <h4>Channels</h4>
          <p>GitHub</p>
          <p>Reactiflux Forums</p>
          <p>Stack Overflow</p>
          <p>Dev Community</p>
          <p>Facebook</p>
        </div>
        <div className='gpt3__footer-links_div'>
          <h4>Docs</h4>
          <p>Installation</p>
          <p>Maain concepts</p>
          <p>Advanced Guides</p>
          <p>API reference</p>
          <p>Hooks</p>
        </div>
        <div className='gpt3__footer-links_div'>
          <h4>More</h4>
          <p>Tutorial</p>
          <p>Blog</p>
          <p>Acknowledgements</p>
          <p>React Native</p>
          <p>Privacy</p>
          <p>Terms</p>
        </div>
      </div>
      <div className='gpt3__footer-copyright'>
        <p>Copyright © 2023 Meta Platforms, Inc</p>
      </div>
    </div>
  )
}

export default Footer
