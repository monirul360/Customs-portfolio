import React from 'react';
import { Link } from 'react-router-dom';

const Service = () => {
    return (
        <div id='m-service-scroll'>
            <section>
                <div className="container">
                    <h1 className='text-white ms-2'>My Service</h1>
                    <div className="row service">
                        {/* start */}
                        <div className="col-lg-6 col-xl-4 col-md-6 col-sm-12 col-12 mt--50 mt_md--30 mt_sm--30 aos-init aos-animate">
                            <div className='service-items'>
                                <div className="icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-menu"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
                                </div>
                                <div className="content">
                                    <h4 class="title"><Link to="/">Business Stratagy</Link></h4>
                                    <p class="description"> I throw myself down among the tall grass by the stream as I lie close to the earth.</p>
                                </div>
                                <div className="link">
                                    <Link class="read-more-button" to="/"><i class="feather-arrow-right"></i></Link>
                                </div>
                            </div>
                        </div>
                        {/* col end */}
                        {/* start */}
                        <div className="col-lg-6 col-xl-4 col-md-6 col-sm-12 col-12 mt--50 mt_md--30 mt_sm--30 aos-init aos-animate">
                            <div className='service-items'>
                                <div className="icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-book-open"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>
                                </div>
                                <div className="content">
                                    <h4 class="title"><Link to="/">App Development</Link></h4>
                                    <p class="description"> It uses a dictionary of over 200 Latin words, combined with
                                        a handful of model sentence.</p>
                                </div>
                                <div className="link">
                                    <Link class="read-more-button" to="/"><i class="feather-arrow-right"></i></Link>
                                </div>
                            </div>
                        </div>
                        {/* col end */}
                        {/* start */}
                        <div className="col-lg-6 col-xl-4 col-md-6 col-sm-12 col-12 mt--50 mt_md--30 mt_sm--30 aos-init aos-animate">
                            <div className='service-items'>
                                <div className="icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-tv"><rect x="2" y="7" width="20" height="15" rx="2" ry="2"></rect><polyline points="17 2 12 7 7 2"></polyline></svg>
                                </div>
                                <div className="content">
                                    <h4 class="title"><Link to="/">App Development</Link></h4>
                                    <p class="description">I throw myself down among the tall grass by the stream as I lie close to the earth.
                                    </p>
                                </div>
                                <div className="link">
                                    <Link class="read-more-button" to="/"><i class="feather-arrow-right"></i></Link>
                                </div>
                            </div>
                        </div>
                        {/* col end */}
                        {/* start */}
                        <div className="col-lg-6 col-xl-4 col-md-6 col-sm-12 col-12 mt--50 mt_md--30 mt_sm--30 aos-init aos-animate">
                            <div className='service-items'>
                                <div className="icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-twitch"><path d="M21 2H3v16h5v4l4-4h5l4-4V2zm-10 9V7m5 4V7"></path></svg>
                                </div>

                                <div className="content">
                                    <h4 class="title"><Link to="/">Mobile App</Link></h4>
                                    <p class="description">There are many variations of passages of Lorem Ipsum available, but the majority.</p>
                                </div>
                                <div className="link">
                                    <Link class="read-more-button" to="/"><i class="feather-arrow-right"></i></Link>
                                </div>
                            </div>
                        </div>
                        {/* col end */}
                        {/* start */}
                        <div className="col-lg-6 col-xl-4 col-md-6 col-sm-12 col-12 mt--50 mt_md--30 mt_sm--30 aos-init aos-animate">
                            <div className='service-items'>
                                <div className="icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-wifi"><path d="M5 12.55a11 11 0 0 1 14.08 0"></path><path d="M1.42 9a16 16 0 0 1 21.16 0"></path><path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path><line x1="12" y1="20" x2="12.01" y2="20"></line></svg>
                                </div>

                                <div className="content">
                                    <h4 class="title"><Link to="/">CEO Marketing</Link></h4>
                                    <p class="description">always free from repetition, injected humour, or non-characteristic words etc.</p>
                                </div>
                                <div className="link">
                                    <Link class="read-more-button" to="/">
                                        <i class="feather-arrow-right"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        {/* col end */}
                        {/* start */}
                        <div className="col-lg-6 col-xl-4 col-md-6 col-sm-12 col-12 mt--50 mt_md--30 mt_sm--30 aos-init aos-animate">
                            <div className='service-items'>
                                <div className="icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-slack"><path d="M14.5 10c-.83 0-1.5-.67-1.5-1.5v-5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5z"></path><path d="M20.5 10H19V8.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"></path><path d="M9.5 14c.83 0 1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5S8 21.33 8 20.5v-5c0-.83.67-1.5 1.5-1.5z"></path><path d="M3.5 14H5v1.5c0 .83-.67 1.5-1.5 1.5S2 16.33 2 15.5 2.67 14 3.5 14z"></path><path d="M14 14.5c0-.83.67-1.5 1.5-1.5h5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-5c-.83 0-1.5-.67-1.5-1.5z"></path><path d="M15.5 19H14v1.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z"></path><path d="M10 9.5C10 8.67 9.33 8 8.5 8h-5C2.67 8 2 8.67 2 9.5S2.67 11 3.5 11h5c.83 0 1.5-.67 1.5-1.5z"></path><path d="M8.5 5H10V3.5C10 2.67 9.33 2 8.5 2S7 2.67 7 3.5 7.67 5 8.5 5z"></path></svg>
                                </div>

                                <div className="content">
                                    <h4 class="title"><Link to="/">Personal Portfolio April</Link></h4>
                                    <p class="description">
                                        It uses a dictionary of over 200 Latin words, combined with a handful of model sentence.</p>
                                </div>
                                <div className="link">
                                    <Link class="read-more-button" to="/"><i class="feather-arrow-right"></i></Link>
                                </div>
                            </div>
                        </div>
                        {/* col end */}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Service;