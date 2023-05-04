import React from 'react';
import { Feature } from '../../components';
import './features.css';

const Features = () => {
  return (
    <div className='gpt3__features section__padding' id='features'>
      <div className='gpt3__features-heading'>
        <h1 className='gradient__text'>A JavaScript library for building user interfaces</h1>
        <p>Get Started!!</p>
      </div>
      <div className='gpt3__features-container'>
        <Feature title='A Simple Component' text='React components implement a render() method that takes input data and returns what to display. This example uses an XML-like syntax called JSX.'/>
        <Feature title='A Stateful Component' text='In addition to taking input data (accessed via this.props), a component can maintain internal state data (accessed via this.state).'/>
        <Feature title='An Application' text='Using props and state, we can put together a small Todo application. This example uses state to track the current list of items as well as the text that the user has entered.'/>
        <Feature title='A Component Using External Plugins' text='React allows you to interface with other libraries and frameworks. This example uses remarkable an external Markdown library'/>
      </div>
    </div>
  )
}

export default Features
