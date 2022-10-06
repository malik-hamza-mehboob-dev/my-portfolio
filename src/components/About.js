import React, { Fragment } from 'react'

function About() {
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
                    <div className="container pl-20">
                        {/* <!-- container --> */}
                        <div className="row">
                            {/* <!-- row --> */}
                            <div className="col-md-5 mb-50">
                                <div className="about-left wow fadeInUp" data-wow-duration=".6s" data-wow-delay=".2s">
                                    <div className="about-header-img">
                                        <img src="img/profile-avatar-2.jpg" height="200px" alt="about me" className="responsive-fluid bounce-animate" />
                                    </div>
                                </div>
                            </div>
                            {/* <!-- about left text end --> */}
                            <div className="col-md-7">
                                {/* <!-- col-7 --> */}
                                <div className="about-right wow fadeInUp" data-wow-duration=".8s" data-wow-delay=".5s">
                                    <span className="top-title">About Me</span>
                                    <h2 data-splitting className="about-tl-3 gr-2 wow fadeInUp" data-wow-duration=".01s" data-wow-delay=".1s">
                                        Software Engineer & Graphic Designer
                                    </h2>
                                    <p className="wow fadeInUp" data-wow-duration=".2s" data-wow-delay=".2s">
                                        I'm an enthusiastic and diligent software technology professional.
                                        I have been working as Full Stack Developer for 4+ years. Worked on many project for many companies. Hard-working listing programmer with a flair for creating elegant solutions in the least amount of time.

                                        <br />
                                        I am an enthusiastic, self-motivated, reliable, responsible and hard working person.

                                        I code and create web elements for amazing people around the world. I like work with new people.
                                        New people new Experiences.
                                    </p>
                                    <div className="row">
                                        {/* <!-- row --> */}
                                        <div className="col-md-6 col-sm-12">
                                            {/* <!-- col-6 --> */}
                                            <div className="about-cn">
                                                <ul>
                                                    <li><i className="fas fa-user-tie"></i> Hamza Mehboob</li>
                                                    <li><a href="https://join.skype.com/invite/ccEslDRHVyrn"></a><i className="fab fa-skype"></i> hamza@mehboob</li>
                                                    <li><i className="far fa-envelope"></i> hamzamehboob612@gmail.com</li>
                                                </ul>
                                            </div>
                                        </div>
                                        {/* <!-- end col-6 --> */}
                                        <div className="col-md-6 col-sm-12">
                                            {/* <!-- col-6 --> */}
                                            <div className="about-cn">
                                                <ul>
                                                    <li><i className="fas fa-map-marker-alt"></i> 205 NewYork, USA</li>
                                                    <li><i className="fas fa-birthday-cake"></i> 19 Sept, 1997</li>
                                                    <li><i className="fab fa-whatsapp"></i> +92 333 5061406</li>
                                                </ul>
                                            </div>
                                        </div>
                                        {/* <!-- end col-6 --> */}
                                    </div>
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

export default About        