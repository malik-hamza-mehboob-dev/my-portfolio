import React, { Fragment } from 'react'

function Certificates() {
    return (
        <Fragment>
            {/* <!-- About us --> */}
            <div id="about" className="about-area de-padding">
                <div className="line_wrap">
                    {/* <!-- line animation --> */}
                    <div className="line_item"></div>
                    <div className="line_item"></div>
                    <div className="line_item"></div>
                    <div className="line_item"></div>
                    <div className="line_item"></div>
                </div>
                {/* <!-- end line animation --> */}
                <div className="about-wpr mt-20">
                    {/* <!-- start about --> */}
                    <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignContent: 'center', alignItems: 'center' }} className="container pl-20">
                        {/* <!-- container --> */}
                        <div className="row">
                            {/* <!-- row --> */}
                            <div style={{ display: 'flex', justifyContent: "center", flexDirection: 'column', alignItems: 'center' }} className="col-md-12 mb-50" >
                                <span className="top-title">Certificates</span>
                                <h2 data-splitting className="about-tl-3 gr-2 wow fadeInUp" data-wow-duration=".01s" data-wow-delay=".1s">
                                    React JS Certificate
                                </h2>
                                <div style={{ display: 'flex', justifyContent: 'center' }} className="about-left wow fadeInUp" data-wow-duration=".6s" data-wow-delay=".2s">
                                    <div className="about-header-img">
                                        <img src="img/certificates/react-1.png" alt="about me" className="responsive-fluid bounce-animate" />
                                    </div>
                                </div>
                            </div>
                            {/* <!-- about left text end --> */}
                            <div className="col-md-7">
                                {/* <!-- col-7 --> */}
                                <div className="about-right wow fadeInUp" data-wow-duration=".8s" data-wow-delay=".5s">
                                    {/* <span className="top-title">Certificates</span>
                                    <h2 data-splitting className="about-tl-3 gr-2 wow fadeInUp" data-wow-duration=".01s" data-wow-delay=".1s">
                                        React JS Certificate
                                    </h2> */}
                                    <p className="wow fadeInUp" data-wow-duration=".2s" data-wow-delay=".2s">
                                        This certificate is rewarded by <em>Great Learning Community</em> after successfully completing the
                                        react course along with the 85% aggregate in all the Quizzies and Project in this Course.

                                        <a className="theme-btn" target="_blank" href="https://olympus1.mygreatlearning.com/course_certificate/CZGJMBUT">  View Online</a>
                                    </p>
                                    {/* <!-- end row --> */}
                                </div>
                                {/* <!-- end about right --> */}
                            </div>
                            {/* <!-- end col-7 --> */}
                        </div>
                        {/* <!-- end row --> */}

                        {/* <!-- container --> */}
                        <div className="row">
                            {/* <!-- row --> */}
                            <div style={{ display: 'flex', justifyContent: "center", flexDirection: 'column', alignItems: 'center' }} className="col-md-12 mb-50" >
                                <h2 data-splitting className="about-tl-3 gr-2 wow fadeInUp" data-wow-duration=".01s" data-wow-delay=".1s">
                                    MySQL Certificate
                                </h2>
                                <div style={{ display: 'flex', justifyContent: 'center' }} className="about-left wow fadeInUp" data-wow-duration=".6s" data-wow-delay=".2s">
                                    <div className="about-header-img">
                                        <img src="img/certificates/sql-1.png" alt="about me" className="responsive-fluid bounce-animate" />
                                    </div>
                                </div>
                            </div>
                            {/* <!-- about left text end --> */}
                            <div className="col-md-7">
                                {/* <!-- col-7 --> */}
                                <div className="about-right wow fadeInUp" data-wow-duration=".8s" data-wow-delay=".5s">
                                    {/* <span className="top-title">Certificates</span>
                                    <h2 data-splitting className="about-tl-3 gr-2 wow fadeInUp" data-wow-duration=".01s" data-wow-delay=".1s">
                                        React JS Certificate
                                    </h2> */}
                                    <p className="wow fadeInUp" data-wow-duration=".2s" data-wow-delay=".2s">
                                        This certificate is rewarded by <em>Hackerrank Community</em> after successfully clearing all
                                        the Test with 100% result. <br />

                                        <a className="theme-btn" target="_blank" href="https://www.hackerrank.com/certificates/32ab9ac3cbea">  View Online</a>
                                    </p>
                                    {/* <!-- end row --> */}
                                </div>
                                {/* <!-- end about right --> */}
                            </div>
                            {/* <!-- end col-7 --> */}
                        </div>
                        {/* <!-- end row --> */}

                        {/* <!-- end counter --> */}
                    </div>
                    {/* <!-- end container --> */}
                </div>
                {/* <!-- end about wrp --> */}
            </div>
            {/* <!-- About us --> */}
        </Fragment>
    )
}

export default Certificates