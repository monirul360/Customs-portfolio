import React from 'react';
import img1 from './../../Img/Work/portfolio-01.jpg';
import img2 from './../../Img/Work/portfolio-02.jpg';
import img3 from './../../Img/Work/portfolio-03.jpg';
import img4 from './../../Img/Work/portfolio-04.jpg';
import img5 from './../../Img/Work/portfolio-01.jpg';
import img6 from './../../Img/Work/portfolio-01.jpg';
const Work = () => {
    return (
        <div>
            <div className="work-section">
                <div className="container">
                    <h1 className='text-white'>My Works</h1>
                    <div className="row work">
                        {/* work-col-start */}
                        <div className="col-lg-6 col-xl-4 col-md-6 col-sm-12 col-12 mt--50 mt_md--30 mt_sm--30 aos-init aos-animate">
                            <div className="work-items">
                                <div className="work-img">
                                    <img className='img-fluid' src={img1} alt="" />
                                </div>
                                <div className="content">
                                    <p className='sub-title'>Web</p>
                                    <h4>App Design Development.</h4>
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