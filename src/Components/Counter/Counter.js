import React, { useState } from 'react';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';




const Counter = () => {

const [counterOn, setCounterOn]=useState(false)

    return (
        <div className='bg-base-200'>

<ScrollTrigger onEnter={()=>setCounterOn(true)} onExit={()=>setCounterOn(false)} >




<div  style={{

width:'100%',


padding:'50px',

        }}   >
            
<h1 className='text-5xl font-bold text-orange-600'>

{counterOn &&    <CountUp start={100} end={20} duration={2} delay={0}></CountUp>}
+ Projects   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
{counterOn &&    <CountUp start={100} end={10} duration={2} delay={0}></CountUp>}
+ Skills  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

{counterOn &&    <CountUp start={10} end={1} duration={2} delay={0}></CountUp>}
+ Y Learning

</h1>





        </div>
</ScrollTrigger>



        </div>
    );
};

export default Counter;