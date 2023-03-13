import React from 'react';
import img1 from './../../Img/Work/portfolio-01.jpg';
import img2 from './../../Img/Work/portfolio-02.jpg';
import img3 from './../../Img/Work/portfolio-03.jpg';
import img4 from './../../Img/Work/portfolio-04.jpg';
import img5 from './../../Img/Work/portfolio-05.jpg';
import img6 from './../../Img/Work/portfolio-01.jpg';
const Work = () => {
    return (
        <div id='m-work-scroll'>
            <div className="work-section">
                <div className="container">
                    <p className='work-title mb-4'>VISIT MY PROJECT AND KEEP YOUR FEEDBACK
                    </p>
                    <h1 className='text-white text-center mb-3'>My Project</h1>
                    <div className="row work">
                        {/* work-col-start */}
                        <div className="col-lg-6 col-xl-4 col-md-6 col-sm-12 col-12 mt--50 mt_md--30 mt_sm--30 aos-init aos-animate">
                            <div className="work-items">
                                <div className="work-img">
                                    <img className='img-fluid' src={img1} alt="" />
                                </div>
                                <div className="content">
                                    <p className='sub-title'>development</p>
                                    <h4>App Design Development.</h4>
                                </div>
                            </div>
                        </div>
                        {/* work-col-end */}
                        {/* work-col-start */}
                        <div className="col-lg-6 col-xl-4 col-md-6 col-sm-12 col-12 mt--50 mt_md--30 mt_sm--30 aos-init aos-animate">
                            <div className="work-items">
                                <div className="work-img">
                                    <img className='img-fluid' src={img2} alt="" />
                                </div>
                                <div className="content">
                                    <p className='sub-title'>Application</p>
                                    <h4>Mobile app landing design</h4>
                                </div>
                            </div>
                        </div>
                        {/* work-col-end */}
                        {/* work-col-start */}
                        <div className="col-lg-6 col-xl-4 col-md-6 col-sm-12 col-12 mt--50 mt_md--30 mt_sm--30 aos-init aos-animate">
                            <div className="work-items">
                                <div className="work-img">
                                    <img className='img-fluid' src={img3} alt="" />
                                </div>
                                <div className="content">
                                    <p className='sub-title'>Photoshop</p>
                                    <h4>Logo design creativity &amp; Application
                                    </h4>
                                </div>
                            </div>
                        </div>
                        {/* work-col-end */}
                        {/* work-col-start */}
                        <div className="col-lg-6 col-xl-4 col-md-6 col-sm-12 col-12 mt--50 mt_md--30 mt_sm--30 aos-init aos-animate">
                            <div className="work-items">
                                <div className="work-img">
                                    <img className='img-fluid' src={img4} alt="" />
                                </div>
                                <div className="content">
                                    <p className='sub-title'>figma</p>
                                    <h4>Mobile app landing design &amp;
                                        Services</h4>
                                </div>
                            </div>
                        </div>
                        {/* work-col-end */}
                        {/* work-col-start */}
                        <div className="col-lg-6 col-xl-4 col-md-6 col-sm-12 col-12 mt--50 mt_md--30 mt_sm--30 aos-init aos-animate">
                            <div className="work-items">
                                <div className="work-img">
                                    <img className='img-fluid' src={img5} alt="" />
                                </div>
                                <div className="content">
                                    <p className='sub-title'>web design</p>
                                    <h4>Design for tecnology &amp; services</h4>
                                </div>
                            </div>
                        </div>
                        {/* work-col-end */}
                        {/* work-col-start */}
                        <div className="col-lg-6 col-xl-4 col-md-6 col-sm-12 col-12 mt--50 mt_md--30 mt_sm--30 aos-init aos-animate">
                            <div className="work-items">
                                <div className="work-img">
                                    <img className='img-fluid' src={img6} alt="" />
                                </div>
                                <div className="content">
                                    <p className='sub-title'>web design</p>
                                    <h4>App for tecnology & services</h4>
                                </div>
                            </div>
                        </div>
                        {/* work-col-end */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Work;