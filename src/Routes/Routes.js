import { createBrowserRouter } from "react-router-dom";
import Aboutme from "../Components/Aboutme/Aboutme";
import Blog from "../Components/Blog/Blog";
import Contact from "../Components/Contact/Contact";
import Counter from "../Components/Counter/Counter";
import Footer from "../Components/Footer/Footer";

import Home from "../Components/Home/Home";
import Projectone from "../Components/ProjectDetails/Projectone";
import Projectthree from "../Components/ProjectDetails/Projectthree";
import Projecttwo from "../Components/ProjectDetails/Projecttwo";
import Projects from "../Components/Projects/Projects";
import Main from "../Layout/Main";












export const router=createBrowserRouter([


{
path:'/',
element:<Main></Main>,
children:[

    {

        path:'/',
        element:<Home></Home>
        
        
        },

{

path:'/contact',
element:<Contact></Contact>




},

{

path:'/projects',
element:<Projects></Projects>



},






        {

path:'/footer',
element:<Footer></Footer>



        },
        {

                path:'/blog',
                element:<Blog></Blog>
                
                
                
                        },


                        {

path:'/projectone',
element:<Projectone></Projectone>

                        },
                        {
path:'/projecttwo',
element:<Projecttwo></Projecttwo>


                        },
                        {
path:'/projectthree',
element:<Projectthree></Projectthree>


                        },
                        {

path:'/about',
element:<Aboutme></Aboutme>


                        },
                        {

path:'/counter',
element:<Counter></Counter>


                        }

        







]

},







{
path:'*',
// element:<PageNotFound></PageNotFound>


}



])
export default router