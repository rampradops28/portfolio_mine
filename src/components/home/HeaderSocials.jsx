// import React from 'react';
// import { FaGithub, FaLinkedinIn} from 'react-icons/fa'; 

// const HeaderSocials = () => {
//     return (
//         <div className='home__socials'>
//             <a href='https://github.com/rampradops28' className='home__social-link' target='_blank' rel='noreferrer'>
//                 <FaGithub />
//             </a>  

//             <a href='https://www.linkedin.com/in/ram-pradop-b81571259/' className='home__social-link' target='_blank' rel='noreferrer'>
//                 <FaLinkedinIn />
//             </a>
//         </div>
//     );
// };

// export default HeaderSocials;

import React from 'react';   
import AOS from 'aos';
import 'aos/dist/aos.css';
import './headersocials.css'; 


// Initialize AOS
AOS.init();

/* Multi idioma */ 

const HeaderSocials = () => {
  return (
 

    <section className="contactos" id="contactos"> 
        <div className="icons"> 
            <a href="https://www.linkedin.com/in/ram-pradop-b81571259/" target="_blank" rel="noopener noreferrer" data-aos="zoom-in">
                <div className="layer">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span className="fab fa-linkedin-in"></span>
                </div> 
            </a>
            <a href="https://github.com/rampradops28" target="_blank" rel="noopener noreferrer" data-aos="zoom-in">
                <div className="layer">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span className="fab fa-github-square"></span>
                </div> 
            </a>
        </div>
    </section>
 
 
  )
}

export default HeaderSocials