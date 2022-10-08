import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from './../../Img/logo.png';
const Nav = () => {
    const [menunav, setMenunav] = useState(false)
    return (
        <div>
            <section>
                <div className="nav-section">
                    <div className="nav">
                        <div className="logo">
                            <Link to='/'>
                                <div className="d-flex justify-content-center align-items-center">
                                    <div className='logo-img'>
                                        <img src={logo} alt="" />
                                    </div>
                                    <div className="logo-text">
                                        <h6>Monirul360</h6>
                                    </div>
                                </div>
                            </Link>
                        </div>

                        <div className={`nav-items ${menunav ? '.nav .nav-items' : 'nav-hide'}`}>
                            <ul>
                                <li><Link to='/'>Home</Link></li>
                                <li><Link to='/'>About</Link></li>
                                <li><Link to='/'>Skills</Link></li>
                                <li><Link to='/'>Projects</Link></li>
                                <li><Link to='/'>Contact</Link></li>
                                <li><Link to='/'>Resume</Link></li>
                                <li><Link to='/'>Blogs</Link></li>
                            </ul>
                        </div>
                        <div className="smail-nav">
                            <div
                                onClick={() => setMenunav(!menunav)}
                            >{
                                    menunav ? <div className='click-nav'>X</div>
                                        :
                                        <div className='click-close'>
                                            <div></div>
                                            <div></div>
                                            <div></div>
                                        </div>

                                }</div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Nav;