import React from 'react';

import p1 from '../../Images/p1.JPG'
import p2 from '../../Images/p2.JPG'
import p3 from '../../Images/p3.JPG'
import { Link } from 'react-router-dom';
import './Projects.css'

const Projects = () => {
    return (
      
        <div  className=" project  ">
       <h1   className="text-5xl font-bold text-orange-600 text-center mt-4 mb-4">Projects</h1>
          {/* flex flex-row items-center justify-center w-full mx-auto mt-32  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 */}
         
          <div className='sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3  grid grid-cols-1  gap-10'>

          <div className="card w-96 glass ml-8">
  <figure><img src={p1} alt="car!"/></figure>
  <div className="card-body">
    <h2 className="card-title text-stone-200">Bidyapith Academy</h2>
    <p className='text-stone-200'>Utilized: React Js,React-Bootstarp,Firebase,Express Js</p>
    <div className="card-actions justify-start">
   


<Link to='./projectone'><button className="btn btn-primary mx-4 text-stone-200 bg-orange-600">Deatils</button></Link>

<a href="https://bidyapith-client.web.app/" className="href"><button className="btn btn-primary text-stone-200 mx-4 bg-orange-600">Live Link</button></a>

   <a href="https://github.com/mustafa-arkan/bidyapith-clientside" className="href"><button className="btn btn-primary text-stone-200 bg-orange-600">Clientside Link</button></a>
      <a href="https://github.com/mustafa-arkan/bidyapith-serverside" className="href"><button className="btn btn-primary text-stone-200  mx-2  bg-orange-600">Serverside Link</button></a>
      
    </div>
  </div>
</div>  

           {/*  */}

           <div className="card w-96 glass ">
  <figure><img src={p2} alt="car!"/></figure>
  <div className="card-body">
    <h2 className="card-title text-stone-200">Fitbazz</h2>
    <p className='text-stone-200'>Utilized: React Js,React-Bootstarp-,Firebase,Express js,Mongo DB</p>
    <div className="card-actions justify-start">
    <Link to='./projecttwo'><button className="btn btn-primary mx-4 text-stone-200 bg-orange-600">Deatils</button></Link>
<a href="https://fitbazz-731e4.web.app/" className="href"><button className="btn btn-primary  mx-4 bg-orange-600">Live Link</button></a>

   <a href="https://github.com/mustafa-arkan/fitbazz-clientside" className="href"><button className="btn btn-primary bg-orange-600">Clientside Link</button></a>
      <a href="https://github.com/mustafa-arkan/bidyapith-serverside" className="href"><button className="btn btn-primary  mx-2 bg-orange-600">Serverside Link</button></a>
    </div>
  </div>
</div>
{/*  */}

<div className="card w-96 glass">
  <figure><img src={p3} alt="car!"/></figure>
  <div className="card-body">
    <h2 className="card-title text-stone-200">Eat-Code-Gym</h2>
<p className='text-stone-200'>Utilized: React Js,React-Bootstarp</p>
    <div className="card-actions justify-start">
    <Link to='./projectthree'><button className="btn btn-primary mx-4 text-stone-200 bg-orange-600">Deatils</button></Link>
<a href="https://jade-licorice-6affc2.netlify.app/" className="href"><button className="btn btn-primary  mx-4 bg-orange-600">Live Link</button></a>

   <a href="https://github.com/mustafa-arkan/eat-code-gym" className="href"><button className="btn btn-primary bg-orange-600">Code Link</button></a>
     
    </div>
  </div>
</div>




          </div>

        </div>
    );
};

export default Projects;