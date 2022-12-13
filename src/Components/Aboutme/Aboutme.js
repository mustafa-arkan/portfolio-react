import React from 'react';

import arkan from '../../Images/arknarn.jpg'
import './Aboutme.css'


const Aboutme = () => {
    return (
        <div className='ml-8'>
            
            <div className=" min-h-screen text-stone-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src={arkan} alt='arkan' className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold text-center">Who i am!</h1>
      <p className="py-6">My name is Arkan. technically I am a sophisticated React Developer who excels at creating clean, readable, and testable software solutions to rapidly evolving business problems. I have a proven record of building, deploying, and maintaining complex web applications and architectures in a variety of platforms. I have spent most of my career in web development—starting with Python, later working with JavaScript . I love working with great people, inspiring others, and being inspired.

My main skills are: JavaScript, React,Material Ui,Daisy ui,Firebase & familiar with Node js,MongoDb.</p>
     <div className=''>

     <button className="btn btn-primary">Hire me</button>
     </div>
    </div>
  </div>
</div>



        </div>
    );
};

export default Aboutme;