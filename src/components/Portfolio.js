import React, { Fragment } from 'react'

function Portfolio() {
    return (
        <Fragment>
            {/* <!-- Start Project Area --> */}
            <section id="work" className="portfolio_bg de-padding">
                <div className="line_wrap">
                    {/* <!-- line animation --> */}
                    <div className="line_item"></div>
                    <div className="line_item"></div>
                    <div className="line_item"></div>
                    <div className="line_item"></div>
                    <div className="line_item"></div>
                </div>
                {/* <!-- end line animation --> */}
                <div className="container">
                    {/* <!-- start container --> */}
                    <div className="row">
                        {/* <!-- row --> */}
                        <div className="col-md-5 pl-20">
                            {/* <!-- col-5 --> */}
                            <div className="site-title work_section_title">
                                <span className="top-title wow fadeInUp" data-wow-duration=".4s" data-wow-delay=".3s">
                                    My Portfolio
                                </span>
                                <h2 data-splitting className="about-tl-3 gr-2 wow fadeInUp" data-wow-duration=".01s" data-wow-delay=".01s">
                                    Awesome Works
                                </h2>
                            </div>
                        </div>
                        {/* <!-- end col-5 --> */}
                        <div className="col-md-7">
                            {/* <!-- start col-7 --> */}
                            <ul className="col list-unstyled list-inline mb-0 text-uppercase work_menu mt-50" id="menu-filter">
                                <li className="list-inline-item"><a className="active" data-filter="*">All</a></li>
                                <li className="list-inline-item"><a className="" data-filter=".seo">UI/UX</a></li>
                                <li className="list-inline-item"><a className="" data-filter=".webdesign">Branding</a></li>
                                <li className="list-inline-item"><a className="" data-filter=".work">Design</a></li>
                                <li className="list-inline-item"><a className="" data-filter=".wordpress">Wordpress</a></li>
                            </ul>
                        </div>
                        {/* <!-- end col-7 --> */}
                    </div>
                    {/* <!-- end row --> */}
                    <div className="row row-full-width">
                        <div className="col-md-12">
                            {/* <!-- start col-9 --> */}
                            <div className="container portfolio-container">
                                {/* <!-- container --> */}
                                <div className="row work-filter">
                                    <div className="col-md-4 work_item work wordpress">
                                        <a href="img/portfolio/1.jpg" className="img-zoom">
                                            <div className="work_box">
                                                <div className="work_img">
                                                    <img src="img/portfolio/1.jpg" className="img-fluid mx-auto d-block rounded" alt="work-img" />
                                                </div>
                                                <div className="work_detail">
                                                    <p className="mb-2">Category</p>
                                                    <h4 className="mb-0">Project Title</h4>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    {/* <!-- end col-4 --> */}
                                    <div className="col-md-4 work_item webdesign wordpress">
                                        <a href="img/portfolio/2.jpg" className="img-zoom">
                                            <div className="work_box">
                                                <div className="work_img">
                                                    <img src="img/portfolio/2.jpg" className="img-fluid mx-auto d-block rounded" alt="work-img" />
                                                </div>
                                                <div className="work_detail">
                                                    <p className="mb-2">Category</p>
                                                    <h4 className="mb-0">Project Title</h4>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    {/* <!-- end col-4 --> */}
                                    <div className="col-md-4 work_item webdesign seo wordpress">
                                        <a href="img/portfolio/3.jpg" className="img-zoom">
                                            <div className="work_box">
                                                <div className="work_img">
                                                    <img src="img/portfolio/3.jpg" className="img-fluid mx-auto d-block rounded" alt="work-img" />
                                                </div>
                                                <div className="work_detail">
                                                    <p className="mb-2">Category</p>
                                                    <h4 className="mb-0">Project Title</h4>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    {/* <!-- end col-4 --> */}
                                    <div className="col-md-4 work_item work wordpress">
                                        <a href="img/portfolio/4.jpg" className="img-zoom">
                                            <div className="work_box">
                                                <div className="work_img">
                                                    <img src="img/portfolio/4.jpg" className="img-fluid mx-auto d-block rounded" alt="work-img" />
                                                </div>
                                                <div className="work_detail">
                                                    <p className="mb-2">Category</p>
                                                    <h4 className="mb-0">Project Title</h4>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    {/* <!-- end col-4 --> */}
                                    <div className="col-md-4 work_item webdesign wordpress">
                                        <a href="img/portfolio/5.jpg" className="img-zoom">
                                            <div className="work_box">
                                                <div className="work_img">
                                                    <img src="img/portfolio/5.jpg" className="img-fluid mx-auto d-block rounded" alt="work-img" />
                                                </div>
                                                <div className="work_detail">
                                                    <p className="mb-2">Category</p>
                                                    <h4 className="mb-0">Project Title</h4>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    {/* <!-- end col-4 --> */}
                                    <div className="col-md-4 work_item webdesign seo wordpress">
                                        <a href="img/portfolio/6.jpg" className="img-zoom">
                                            <div className="work_box">
                                                <div className="work_img">
                                                    <img src="img/portfolio/6.jpg" className="img-fluid mx-auto d-block rounded" alt="work-img" />
                                                </div>
                                                <div className="work_detail">
                                                    <p className="mb-2">Category</p>
                                                    <h4 className="mb-0">Project Title</h4>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    {/* <!-- end col-4 --> */}
                                </div>
                            </div>
                            {/* <!-- end container --> */}
                        </div>
                        {/* <!-- start col-9 --> */}
                    </div>
                    {/* <!-- end row --> */}
                </div>
                {/* <!-- end container --> */}
            </section>
            {/* <!-- End Project Area --> */}
        </Fragment>
    )
}

export default Portfolio    