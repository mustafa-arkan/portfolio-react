import { createBrowserRouter } from "react-router-dom";
import Contact from "../Components/Contact/Contact";
import Footer from "../Components/Footer/Footer";
import Home from "../Components/Home/Home";
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

path:'/footer',
element:<Footer></Footer>



        }
        







]

},







{
path:'*',
// element:<PageNotFound></PageNotFound>


}



])
export default router