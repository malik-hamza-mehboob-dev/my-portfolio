import React, { Fragment } from 'react'

function Hire() {
    return (
        <Fragment>
            {/* <!-- Start Hire Me --> */}
            <div className="hireme-area de-padding jarallax d-flex" data-jarallax='{"speed": 0.2}'>
                <div className="container pl-20">
                    {/* <!-- start container--> */}
                    <div className="hire-title">
                        <h2 data-splitting className="tl-3 text-white text-center wow fadeInUp" data-wow-duration=".01s" data-wow-delay=".01s"> Interested in working with me?</h2>
                    </div>
                    <div className="row">
                        {/* <!-- hire me btn --> */}
                        <div className="col-md-6 text-center">
                            <div className="video-hire-btn mt-30">
                                <div className="video-left-img-area wow fadeInUp" data-wow-duration=".6s" data-wow-delay=".3s">
                                    <div className="video-box fl-wrap">
                                        <a className="video-box-btn color-bg popup-vimeo image-popup" href="https://www.youtube.com/watch?v=SMKPKGW083c"><i className="fa fa-play" aria-hidden="true"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="btn-content">
                                <div className="hire-btn mt-20">
                                    {/* <!-- start btn--> */}
                                    <a href="#contact" className="theme-btn hire-btn smooth-scroll">
                                        Hire Me
                                    </a>
                                </div>
                                {/* <!-- end btn--> */}
                            </div>
                            {/* <!-- end btn content --> */}
                        </div>
                        {/* <!-- end col-6 --> */}
                    </div>
                    {/* <!-- end row --> */}
                </div>
                {/* <!-- end container --> */}
            </div>

            {/* <!-- End Hire Me--> */}
        </Fragment>
    )
}

export default Hire