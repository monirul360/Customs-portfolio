import React from 'react';
import monirul from './../../Img/logo.png'
import { Link } from 'react-router-dom';
const Hero = () => {
    return (
        <div>
            <div className="section section-padding">
                <div className="container">
                    <div className="row hero">
                        <div className="col-md-7">
                            <div className="hero-text">
                                <h1>Hi, i'm <span>Moirul360</span></h1>
                                <h1>Mern stack developer</h1>
                                <br />
                                <p>I'm Md Monirul Islam from a small beautiful country Bangladesh. I’m a passionate and progmatic front end developer with 2 years of professional experience, specializing in full-stack development using Node js Technologies on the backend.</p>
                                <div className="find-section">
                                    <p className='lead'>FIND WITH ME</p>
                                    <Link to='/'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                                    </Link>
                                    <Link to='/'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-instagram"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                                    </Link>
                                    <Link to='/'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-5">
                            <div className='hero-img'>
                                <img className='img-fluid' src={monirul} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;