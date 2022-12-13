import React, { useState } from 'react';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';

import './Counter.css'


const Counter = () => {

const [counterOn, setCounterOn]=useState(false)

    return (
        <div className='bg-base-200'>

<ScrollTrigger onEnter={()=>setCounterOn(true)} onExit={()=>setCounterOn(false)} >




<div className='count' style={{

width:'100%',


padding:'50px',







        }}   >
            
<div>






<h1 className='text-5xl font-bold text-orange-600 htag'>

{counterOn &&    <CountUp start={100} end={20} duration={2} delay={0}   ></CountUp>}
+ Projects   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;


{counterOn &&    <CountUp start={10} end={1} duration={2} delay={0} ></CountUp>}
Y+ Learning &nbsp;&nbsp;&nbsp;&nbsp;

{counterOn &&    <CountUp start={1} end={100000} duration={2} delay={0}></CountUp>}
+ Cup Coffee

</h1>










</div>





        </div>
</ScrollTrigger>



        </div>
    );
};

export default Counter;