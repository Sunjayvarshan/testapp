import React from 'react';
import { Article } from '../../components';
import{blog01,blog02,blog03,blog04,blog05} from './imports'
import './blog.css';

const Blog = () => {
  return (
    <div className='gpt3__blog section__padding' id='blog'>
      <div className='gpt3__blog-heading'>
        <h1 className='gradient__text'>React Labs: What We've Been Working On – June 2022</h1>
      </div> 
      <div className='gpt3__blog-container'>
        <div className='gpt3__blog-container_groupA'>
          <Article imgUrl={blog01} date='Nov 05, 2015' title='We announced an experimental demo of React Server Components (RSC) in December 2020'/>
        </div>
        <div className='gpt3__blog-container_groupB'>
          <Article imgUrl={blog02} date='Jun 03, 2019' title='assets like scripts, external styles, fonts, and images are typically preloaded and loaded using external systems'/>
          <Article imgUrl={blog03} date='Sep 15, 2019' title='Static Site Generation (SSG) and Incremental Static Regeneration (ISR) are great ways to get performance'/>
          <Article imgUrl={blog04} date='Mar 29, 2021' title='It’s a compiler that automatically generates the equivalent of useMemo'/>
          <Article imgUrl={blog05} date='Dec 25, 2022' title=' React has two profiling tools. The original Profiler shows an overview of all the commits in a profiling session'/>
        </div>
      </div>  
    </div>
  )
}

export default Blog