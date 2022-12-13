import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import About from '../Aboutme/About';
import Aboutme from '../Aboutme/Aboutme';
// import AppFooter from '../AppFooter/AppFooter';

import Contact from '../Contact/Contact';
import Counter from '../Counter/Counter';

import Projects from '../Projects/Projects';
import Skills from '../Skills/Skills';

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






      {/* <a href="Resume.pdf" 

download="Resume Resume.pdf"

>

<button className="btn btn-primary   bg-orange-600 text-stone-200">Resume</button>


</a> */}
<a
          className="p-2 cursor-pointer rounded-lg relative px-10 w-max flex items-center mt-4 space-x-4 border bg-slate-200"
          href={'https://drive.google.com/file/d/1bxW6LyRZge0qBJPJegq1vv516rKVWMhD/view?usp=share_link'}
          target={'_blanck'}
          rel="noreferrer"
        >





            
            
          <div>Resume</div>
          <img
            className="h-6 w-6"
            src="https://img.icons8.com/material-outlined/48/000000/link--v1.png"
            alt=""
          ></img>
        </a>
 
    </div>
  </div>
</div>
<Counter></Counter>
<Skills></Skills>

<Projects></Projects>
{/* <Aboutme></Aboutme> */}
<About></About>
<Contact></Contact>
{/* <AppFooter></AppFooter> */}

        </div>
    );
};

export default Home;