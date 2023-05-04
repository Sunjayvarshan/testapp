import React from 'react';
import './possibility.css';
import future from '../../assets/react4.png'

const Possibility = () => {
  return (
    <div className='gpt3__possibility section__padding' id='possibility'>
      <div className='gpt3__possibility-image'>
        <img src={future} alt='possibility'/>
      </div>
      <div className='gpt3__possibility-content'>
        <h4>A component based library</h4>
        <h1 className='gradient__text'>Introducing React Hooks</h1>
        <p>Hooks are functions that let you “hook into” React state and lifecycle features from function components. Hooks don’t work inside classes — they let you use React without classes</p>
        <h4>Try the new useState hook</h4>
      </div>
    </div>
  )
}

export default Possibility
