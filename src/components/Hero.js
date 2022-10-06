import React, { Fragment } from 'react'

export default function Hero() {
    return (
        <Fragment>
            {/* <!-- Start Hero --> */}
            <div id="home" className="hero-section hero-section-bg jarallax" data-jarallax='{"speed": 0.2}'>
                <canvas className="canvasParticles"></canvas>
                <div className="line_wrap">
                    {/* <!-- line animation --> */}
                    <div className="line_item"></div>
                    <div className="line_item"></div>
                    <div className="line_item"></div>
                    <div className="line_item"></div>
                    <div className="line_item"></div>
                </div>
                {/* <!-- end line animation --> */}
                <div className="container sidebar-toptext">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="head-top-contact">
                                <span className="phone_contact">+92 333 5061406</span>
                                <span className="email_contact">hamzamehboob612@gmail.com</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="top-contact">
                    <a href="#contact" className="top-contact-btn smooth-scroll">
                        <i className="icofont-envelope"></i>
                    </a>
                </div>
                <div className="hero-single sidebar-hero-bg">
                    <div className="container">
                        {/* <!-- start container --> */}
                        <div className="row">
                            {/* <!-- start row --> */}
                            <div className="col-md-6 offset-md-1 col-sm-12 pl-20">
                                {/* <!-- hero text left --> */}
                                <div className="hero-content wow fadeInUp" data-wow-duration=".5s" data-wow-delay=".6s">
                                    <h2 data-splitting className="top-title pt-30 wow fadeInUp" data-wow-duration=".001s" data-wow-delay=".001s">Hamza <span className="colored">Mehboob.</span></h2>
                                    <div className="typed-strings">
                                        <p> <span className="type_color">Creative Designer</span></p>
                                        <p> <span className="type_color">React Developer</span></p>
                                        <p> <span className="type_color">Laravel Developer</span></p>
                                        <p> <span className="type_color">Graphic Designer</span></p>
                                        <p> <span className="type_color">MERN Stack Experties</span></p>
                                    </div>
                                    <p className="text-16 header_type_text text-white mb-2 mb-md-3">
                                        <span className="typed"></span>
                                    </p>
                                    <p className="header-intro-text wow fadeInUp pt-10" data-wow-duration=".6s" data-wow-delay=".8s">I have been working since 2016. I am proficient in designing & developing <strong>Single Page Applications</strong> (SPA).</p>
                                    <div className="hro-btn wow fadeInUp" data-wow-duration=".6s" data-wow-delay=".9s">
                                        <a href="#" className="theme-btn">
                                            Download CV
                                        </a>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- hero left text end --> */}
                            <div className="col-md-5 col-sm-12 mt-50">
                                {/* <!-- col-6 --> */}
                                <div className="right-social-icon">
                                    <ul className="social-icon">
                                        {/* <li><a href="#"><i className="fab fa-facebook-f"></i></a></li> */}
                                        {/* <li><a href="#"><i className="fab fa-dribbble"></i></a></li> */}
                                        {/* <li><a href="#"><i className="fab fa-behance"></i></a></li> */}
                                        <li><a href="https://www.linkedin.com/in/hamza-mehboob-834038189/"><i className="fab fa-linkedin-in"></i></a></li>
                                        <li><a href="https://github.com/HamzaODE"><i className="fab fa-github"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                            {/* <!-- end col-6 --> */}
                        </div>
                    </div>
                </div>
                {/* <!-- single Hero End --> */}
                <div className="about-scroll-down text-center">
                    <a href="#about" className="scroll-down-arrow scroll_down smooth-scroll"><i className="icofont-scroll-bubble-down"></i></a>
                </div>
            </div>
            {/* <!-- End Hero --> */}
        </Fragment>
    )
}
