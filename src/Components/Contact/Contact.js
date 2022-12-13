import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";
import './Contact.css'


import logoform from '../../Images/form.png'


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_hd7xwlk",
        "template_xvr1ed9",
        form.current,
        "thpXIIXPuZ1tqz1r4"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (



<div className="contact">
<h1   className="text-5xl font-bold text-orange-600 lg:ml-96">Feel Free to Contact Me.</h1>

    
    <StyledContactForm className="lg:ml-96">
      <form   className=" hero-content    grid grid-cols-1   sm:grid-cols-1      md:grid-cols-2 lg:grid-cols-2 "    ref={form} onSubmit={sendEmail}>
        
        
{/*  sm:ml-3 */}


<div className="hero-content flex-col lg:flex-row-reverse  ">
    <div className="text-center      ">

    
      {/* lg:text-left */}
    <img src={logoform} alt="form" className="max-w-sm rounded-lg shadow-2xl    " />
    </div>
  
    <div className="  text-stone-200   card flex-shrink-0 w-full max-w-sm shadow-2xl ">
      
    
   

      <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
          
        </div>
      </div>
    
  


      </form>
    </StyledContactForm>



    </div>
  );
};

export default Contact;

// Styles
const StyledContactForm = styled.div`
  width: 400px;
  form {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
    font-size: 16px;
    input {
      width: 100%;
      height: 35px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);
      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }
    textarea {
      max-width: 100%;
      min-width: 100%;
      width: 100%;
      max-height: 100px;
      min-height: 100px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);
      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }
    label {
      margin-top: 1rem;
    }
    input[type="submit"] {
      margin-top: 2rem;
      cursor: pointer;
      background: rgb(249, 105, 14);
      color: white;
      border: none;
    }
  }
`;