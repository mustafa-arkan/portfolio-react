import React from 'react';
import { FiFacebook, FiGithub, FiLinkedin, FiMail, FiTwitter } from 'react-icons/fi';
import { Divider } from 'react-neon-ui'

// import ProfilePic from '../assets/profilepic.jpg';
// import ProfilePic1 from '../assets/profilepic1.jpeg';
import ProfilePic1 from '../../Images/arknarn.jpg';
// import ResumeFile from '../assets/Vedant_Daigavane_Resume.pdf';

export default function About() {
  return (
    <div className=" max-w-6xl mx-auto p-5 py-20" id="about">
      <div className="text-6xl md:text-7xl text-center md:text-left font-medium text-orange-600 pb-4 mb-16">
        About Me
      </div>

      <div className="md:flex items-center space-y-8 md:space-y-0">
        <div className="md:order-last basis-1/3 h-full">
          <img src={ProfilePic1} className="rounded-full h-100 w-88 mx-auto" alt=""></img>
        </div>
        <div className="basis-2/3 space-y-4">
          <span className="text-gray-500 text-xl">Hi, I am </span>
          <div className="text-cyan-500 text-4xl font-bold">Md. Mustafa Arkan</div>
          <Divider variant='secondary' />
          <div className="text-xl text-gray-500 font-semibold">Passionate Coder & React Developer</div>
          <div className="font-light text-gray-400">
            I am a highly enthusiastic and competitive person who likes being around people who like
            to test my limits and I try to push theirs as well. I love to acquire new skills and
            share my knowledge. Taking up complex challenges is my passion. I don't like to stick to
            one technique for a longer time and quickly look for other ways to do a task. I strongly
            believe that being the jack of all trades and master of none is always better than being
            master of one.
          </div>
        </div>
      </div>
      <div className="md:flex justify-between">
        <div className="py-10 flex items-center space-x-4 justify-center">
          {/* {social.map((link) => {
            return (
              <a
                href={link.link}
                target={'_blank'}
                rel="noreferrer"
                className="relative rounded-full"
              >
                <img src={link.icon} className="h-10 w-10" alt=""></img>
              </a>
            );
          })} */}
          <ul className="flex gap-4 sm:gap-8">
						{socialLinks.map((link) => (
							<a
								href={link.url}
								target="__blank"
								key={link.id}
								className="text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer rounded-lg bg-gray-50 dark:bg-ternary-dark hover:bg-gray-100 shadow-sm p-4 duration-300"
							>
								<i className="text-xl sm:text-2xl md:text-3xl">
									{link.icon}
								</i>
							</a>
						))}
					</ul>
        </div>
        <a
          className="p-2 cursor-pointer rounded-lg relative px-10 w-max flex items-center m-auto space-x-4 border bg-slate-200"
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
  );
}

// const social = [
//   {
//     icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg',
//     link: 'https://www.linkedin.com/in/md-mustafa-arkan/',
//   },
//   {
//     icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
//     link: 'https://github.com/mustafa-arkan',
//   },
  
//   {
//     icon: 'https://cdn-icons-png.flaticon.com/512/732/732200.png',
//     link: 'mailto: arkancse@gmail.com',
//   },
// ];
const socialLinks = [
	{
		id: 1,
		icon: <FiGithub />,
		url: 'https://github.com/mustafa-arkan',
	},
	{
		id: 2,
		icon: <FiMail />,
		url: 'mailto: arkancse@gmail.com',
	},
	{
		id: 3,
		
        icon: <FiLinkedin />,
		url: 'https://www.linkedin.com/in/md-mustafa-arkan/',
	},
	{
		id: 4,
		icon: <FiFacebook />,
		url: 'https://www.facebook.com/profile.php?id=100008516529245',
	},
];