import React from 'react';
import { Feature } from '../../components';
import './whatGPT3.css';

const WhatGPT3 = () => {
  return (
    <div className='gpt3__whatgpt3 section__margin' id="wgpt3">
      <div className='gpt3__whatgpt3-feature'>
        <Feature title="What is React" text="React is a JavaScript library created by Facebook ,React is a User Interface (UI) library React is a tool for building UI components"/>
      </div>
      <div className='gpt3__whatgpt3-heading'>
        <h1 className='gradient__text'>The possibilities are Endless!</h1>
        <p>The fastest framework</p>
      </div>
      <div className='gpt3__whatgpt3-container'>
        <Feature title="Declarative" text="React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes."/>
        <Feature title="Component-Based" text="Build encapsulated components that manage their own state, then compose them to make complex UIs"/>
        <Feature title="Learn Once, Write Anywhere" text="We don’t make assumptions about the rest of your technology stack, so you can develop new features in React without rewriting existing code."/>
      </div>
    </div>
  )
}

export default WhatGPT3
