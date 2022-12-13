import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import Aboutme from '../Aboutme/Aboutme';

import Contact from '../Contact/Contact';
import Counter from '../Counter/Counter';

import Projects from '../Projects/Projects';

import './Home.css'

const Home = () => {
    return (
        <div>
            
            <div className="hero ">
  <div className="hero-content flex-col lg:flex-row-reverse">
    {/* <img src="https://placeimg.com/260/400/arch" className="max-w-sm rounded-lg shadow-2xl" /> */}
    <div>
      
     


      <h1 className="text-5xl font-bold text-stone-200">
              Hi, This's <span>MUSTAFA ARKAN</span>
            </h1>
            <h2 className="text-5xl font-bold text-stone-200">
              a
              <span className='text-accent-focus'>
                <Typewriter words={[" React Developer.","Frontend Developer."," Professional Coder."]} loop cursor cursorStyle='|' typeSpeed={70} deleteSpeed={50} delaySpeed={1000} />
              </span>
            </h2>






      <a href="Resume.pdf" 

download="Resume Resume.pdf"

>

<button className="btn btn-primary   bg-orange-600 text-stone-200">Resume</button>


</a>
 
    </div>
  </div>
</div>
<Counter></Counter>
<Projects></Projects>
<Aboutme></Aboutme>
<Contact></Contact>


        </div>
    );
};

export default Home;