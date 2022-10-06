import React, { Fragment } from 'react'

function FAQ() {
    return (
        <Fragment>
            {/* <!-- Start Faq --> */}
            <div className="fq-area de-padding">
                <div className="container pl-20">
                    {/* <!-- start container --> */}
                    <div className="row">
                        <div className="col-md-8 offset-md-2">
                            <div className="faq-wpr">
                                {/* <!-- start faq-wpr --> */}
                                <div className="fq-right">
                                    <div className="faqs-title pb-30 text-center">
                                        <span className="resume-title">FAQS</span>
                                        <h2 data-splitting className="faqs-subtitle about-tl-3 gr-2 wow fadeInUp" data-wow-duration=".01s" data-wow-delay=".01s"> Have any questions?</h2>
                                    </div>
                                    <div className="site-title wow fadeInUp" data-wow-duration=".5s" data-wow-delay=".2s">
                                        <div className="accordion" id="accordionExample">
                                            <div className="accordion-item">
                                                <h2 className="accordion-header" id="headingOne">
                                                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                        1. What services do I offer ?
                                                    </button>
                                                </h2>
                                                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                                    <div className="accordion-body">
                                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusitempor is  exercitation ullamco laboris.Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <!-- End accordion item --> */}
                                            <div className="accordion-item">
                                                <h2 className="accordion-header" id="headingTwo">
                                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                        2. How will I complete your project?
                                                    </button>
                                                </h2>
                                                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                                    <div className="accordion-body">
                                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusitempor is  exercitation ullamco laboris.Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <!-- End accordion item --> */}
                                            <div className="accordion-item">
                                                <h2 className="accordion-header" id="headingThree">
                                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                        3. How will you pay me?
                                                    </button>
                                                </h2>
                                                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                                    <div className="accordion-body">
                                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusitempor is  exercitation ullamco laboris.Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <!-- End accordion item --> */}
                                            <div className="accordion-item">
                                                <h2 className="accordion-header" id="headingFour">
                                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseThree">
                                                        4. Why will you hire for your proejdct?
                                                    </button>
                                                </h2>
                                                <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                                    <div className="accordion-body">
                                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusitempor is  exercitation ullamco laboris.Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <!-- End accordion item --> */}
                                            <div className="accordion-item">
                                                <h2 className="accordion-header" id="headingFive">
                                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseThree">
                                                        5. How will you get final project?
                                                    </button>
                                                </h2>
                                                <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                                                    <div className="accordion-body">
                                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusitempor is  exercitation ullamco laboris.Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <!-- End accordion item --> */}
                                            <div className="accordion-item">
                                                <h2 className="accordion-header" id="headingSix">
                                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseThree">
                                                        6. What is the process & my time zone?
                                                    </button>
                                                </h2>
                                                <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
                                                    <div className="accordion-body">
                                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusitempor is  exercitation ullamco laboris.Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <!-- End accordion item --> */}
                                        </div>
                                        {/* <!-- End accordion --> */}
                                    </div>
                                    {/* <!-- end site-title --> */}
                                </div>
                                {/* <!-- end faq-right --> */}
                            </div>
                            {/* <!-- End faq-wpr --> */}
                        </div>
                        {/* <!-- end col-8 --> */}
                    </div>
                    {/* <!-- end row --> */}
                </div>
                {/* <!-- end container --> */}
            </div>
            {/* <!-- End Faq --> */}
        </Fragment>
    )
}

export default FAQ