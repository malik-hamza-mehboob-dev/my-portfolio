import React, { Fragment } from 'react'

function Footer() {
    return (
        <Fragment>
            {/* <!-- Start Footer --> */}
            <footer id="contact" className="footer">
                <div className="container pl-20">
                    {/* <!-- start container --> */}
                    <div className="site-title text-center pt-80">
                        <span className="resume-title contact-title wow fadeInUp" data-wow-duration=".4s" data-wow-delay=".6s">Contact</span>
                        <h2 data-splitting className="about-tl-3 wow fadeInUp" data-wow-duration=".01s" data-wow-delay=".01s">
                            Get in Touch
                        </h2>
                    </div>
                    <div className="row">
                        {/* <!-- start row --> */}
                        <div className="col-md-7">
                            <div className="contact-area">
                                <div className="contact-left mt-20">
                                    <form className="contact-form" id="contact-form" action="php/contact.php" method="POST">
                                        <div className="row g-4">
                                            <div className="col-md-12 wow fadeInUp" data-wow-duration=".6s" data-wow-delay=".2s">
                                                <input type="text" name="subject" className="form-control input-style-2" placeholder="Subject" />
                                            </div>
                                            <div className="col-md-12 wow fadeInUp" data-wow-duration=".6s" data-wow-delay=".3s">
                                                <input type="text" name="name" className="form-control input-style-2" placeholder="Your name" />
                                            </div>
                                            <div className="col-md-12 wow fadeInUp" data-wow-duration=".6s" data-wow-delay=".4s">
                                                <input type="email" name="email" className="form-control input-style-2" placeholder="Your Email Here" />
                                            </div>
                                            <div className="col-12 wow fadeInUp" data-wow-duration=".6s" data-wow-delay=".5s">
                                                <textarea className="form-control input-style-2" name="message" placeholder="Drop Message"></textarea>
                                            </div>
                                            <div className="col-12 text-center wow fadeInUp" data-wow-duration=".6s" data-wow-delay=".6s">
                                                <button type="submit" className="theme-btn send-me mt-30 text-center">
                                                    Send Me
                                                </button>
                                            </div>
                                            <div className="col-12 text-center">
                                                <p className="form-message"></p>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            {/* <!-- end contact-area --> */}
                        </div>
                        {/* <!-- end col-7 --> */}
                        <div className="col-md-5">
                            <div className="contact-right mt-40">
                                <ul>
                                    <li>
                                        <div className="addr mt-10 wow fadeInUp" data-wow-duration=".3s" data-wow-delay=".8s">
                                            <div className="contact-right-icon two">
                                                <i className="icofont-envelope"></i>
                                            </div>
                                            <p className="mb-0 contact_itext">
                                                chat@example.com
                                            </p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="addr mt-10 wow fadeInUp" data-wow-duration=".5s" data-wow-delay=".8s">
                                            <div className="contact-right-icon three">
                                                <i className="icofont-brand-whatsapp"></i>
                                            </div>
                                            <p className="mb-0 contact_itext">
                                                +123 456 7890
                                            </p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="addr mt-10 wow fadeInUp" data-wow-duration=".7s" data-wow-delay=".8s">
                                            <div className="contact-right-icon one">
                                                <i className="icofont-google-map"></i>
                                            </div>
                                            <p className="mb-0 contact_itext">
                                                208 Maliha Square,
                                                <br />
                                                Dubai, UAE
                                            </p>
                                        </div>
                                    </li>
                                </ul>
                                <div className="gmap-area mt-10">
                                    {/* <!-- start gmap --> */}
                                    {/* <iframe className="embed-responsive-item" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3607.9884675458907!2d55.47781281501099!3d25.270973383861868!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5fa631c9b3eb%3A0x8e1767fbdbb6f44d!2sMaliha%20Rd%20-%20Dubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sbd!4v1631169609660!5m2!1sen!2sbd" style="border:0;" allowfullscreen="" loading="lazy"></iframe> */}
                                </div>
                                {/* <!-- end gmap --> */}
                            </div>
                        </div>
                        {/* <!-- end col-5 --> */}
                    </div>
                    {/* <!-- end row --> */}
                </div>
                {/* <!-- end container --> */}
                <div className="copyright-area">
                    {/* <!-- start copyright --> */}
                    <div className="container">
                        {/* <!-- container --> */}
                        <div className="row">
                            <div className="col-md-5 mt-50">
                                <div className="copyright-left wow fadeInUp" data-wow-duration=".5s" data-wow-delay=".7s">
                                    <span className="copyright-text">all rights reserved by themetum.com 2021.</span>
                                </div>
                            </div>
                            {/* <!-- end col-5 --> */}
                            <div className="col-md-4 mt-50">
                                <div className="copyright-right wow fadeInUp" data-wow-duration=".5s" data-wow-delay=".8s">
                                    <div className="copyright-menu">
                                        <a href="#">Faqs   /</a>
                                        <a href="#">privacy policy   /</a>
                                        <a href="#">services</a>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- end col-4 --> */}
                            <div className="col-md-3 mt-50">
                                <div className="copyright-social wow fadeInUp" data-wow-duration=".5s" data-wow-delay=".9s">
                                    <ul className="footer-social">
                                        <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                        <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                        <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                            {/* <!-- end col-3 --> */}
                        </div>
                    </div>
                    {/* <!-- end container --> */}
                </div>
                {/* <!-- end copyright area --> */}
            </footer>
            {/* <!-- End Footer-->	 */}
        </Fragment>
    )
}

export default Footer