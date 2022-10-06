import React, { Fragment } from 'react'

function Services() {
    return (
        <Fragment>
            {/* <!-- Start Services --> */}
            <div id="service" className="service-area de-padding">
                <div className="container pl-20">
                    <div className="site-title text-center">
                        {/* <!-- service section title --> */}
                        <span className="resume-title">My Services</span>
                        <h2 data-splitting className="about-tl-3 gr-2 wow fadeInUp" data-wow-duration=".01s" data-wow-delay=".01s">
                            A brief of Offerting Services
                        </h2>
                    </div>
                    <div className="row">
                        {/* <!-- start row --> */}
                        <div className="col-md-4 col-sm-6">
                            <div className="service-box mt-30 wow fadeInUp" data-wow-duration=".5s" data-wow-delay=".3s">
                                <div className="service-icon service-one">
                                    <i className="icofont-vector-path"></i>
                                </div>
                                <div className="service-info">
                                    <h2>Frontend Technologies</h2>
                                    <ul>
                                        <li>React JS</li>
                                        <li>Vue Js</li>
                                        <li>Angular Js</li>
                                        <li>HTML5</li>
                                        <li>CSS</li>
                                        <li>Bootstrap6</li>
                                        <li>Tailwind</li>
                                    </ul>
                                </div>
                            </div>
                            {/* <!-- end service one --> */}
                        </div>
                        {/* <!-- end col-4 --> */}
                        <div className="col-md-4 col-sm-6">
                            <div className="service-box mt-30 wow fadeInDown" data-wow-duration=".7s" data-wow-delay=".6s">
                                <div className="service-icon service-two">
                                    <i className="icofont-ui-browser"></i>
                                </div>
                                <div className="service-info">
                                    <h2>Backend Technologies</h2>
                                    <ul>
                                        <li>Node JS</li>
                                        <li>PHP core</li>
                                        <li>Laravel</li>
                                        <li>CodeIgniter</li>
                                        <li>MySQL Database</li>
                                        <li>MongoDB Database</li>
                                        <li>Express Database</li>

                                    </ul>
                                </div>
                            </div>
                            {/* <!-- end service two --> */}
                        </div>

                        <div className="col-md-4 col-sm-6">
                            <div className="service-box mt-30 wow fadeInUp" data-wow-duration=".5s" data-wow-delay=".3s">
                                <div className="service-icon service-one">
                                    <i className="icofont-ship-wheel"></i>
                                </div>
                                <div className="service-info">
                                    <h2>Graphic Design</h2>
                                    <ul>
                                        <li>Logo Designer</li>
                                        <li>WireFrame</li>
                                        <li>Prototype</li>
                                        <li>Package Design</li>
                                        <li>Email Signature</li>
                                        <li>Social Media Banner</li>
                                    </ul>
                                </div>
                            </div>
                            {/* <!-- end service one --> */}
                        </div>

                        {/* <!-- end col-4 --> */}
                    </div>
                    {/* <!-- end row --> */}
                </div>
                {/* <!-- end container --> */}
            </div>
            {/* <!-- End Services --> */}
        </Fragment>
    )
}

export default Services 