import React from 'react';
import { Button } from 'react-neon-ui'


const Skills = () => {


    return (
        <div className='ml-8' >
            
            <h1   className="text-5xl font-bold text-orange-600 text-center mt-4 mb-4">Skills</h1>
            <div className=' mt-16 mb-16 sm:grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7'>



            <div className=''>


           
           <Button variant='secondary' size='large' className='mb-8'> Javascript  </Button>

            <Button variant='secondary' size='large'> React </Button>

            </div>

            
            <div>
            <Button variant='secondary' size='large' className='mb-8'> React-Bootstarp </Button>
            <Button variant='secondary' size='large'> Tailwind CSS </Button>
            </div>
            
            <div>
            <Button variant='secondary' size='large' className='mb-8'> Daisy UI </Button>
            <Button variant='secondary' size='large'> Material UI </Button>
            </div>
            
            <div>
            <Button variant='secondary' size='large' className='mb-8'> Firebase </Button>
            <Button variant='secondary' size='large'> MongoDB </Button>
            </div>
            
            <div>
            <Button variant='secondary' size='large' className='mb-8'> Node JS </Button>
            <Button variant='secondary' size='large'> Express JS </Button>
            </div>
           
            <div>
            <Button variant='secondary' size='large' className='mb-8'> On Page SEO </Button>
            <Button variant='secondary' size='large'> GitHub </Button>
            </div>
            
            <div>
            <Button variant='secondary' size='large' className='mb-8'> Visual Studio </Button>
            <Button variant='secondary' size='large'> Figma </Button>
            </div>
           
            </div>
            
          
            

        </div>
    );
};

export default Skills;