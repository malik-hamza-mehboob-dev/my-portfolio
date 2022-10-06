import PropTypes from 'prop-types'
import React, { Component } from 'react'

export class Nav extends Component {
    static propTypes = {}

    render() {
        return (
            <div>
                {/* <!-- Start header --> */}
                <header className="header">
                    <div className="main-navigation sd-nav">
                        <div className="navbar navbar-expand-lg bsnav bsnav-sidebar bsnav-scrollspy bsnav-sidebar-left">
                            <a className="navbar-brand mb-20" href="index.html">
                                <img src="/img/profile-avatar-2.jpg" className="logo-display" alt="thumb" />
                                <span className="profile_name">Hamza Mehboob</span>
                            </a>
                            <button className="navbar-toggler toggler-spring"><span className="navbar-toggler-icon"></span></button>
                            <div className="collapse navbar-collapse justify-content-sm-center pt-20">
                                <ul className="navbar-nav navbar-mobile mr-0">
                                    <li className="nav-item"><a className="nav-link smooth-scroll" href="#home"><i className="icofont-home"></i> Home</a></li>
                                    <li className="nav-item"><a className="nav-link smooth-scroll" href="#about"><i className="icofont-contact-add"></i> About</a></li>
                                    <li className="nav-item"><a className="nav-link smooth-scroll" href="#service"><i className="icofont-file-document"></i> Service</a></li>
                                    <li className="nav-item"><a className="nav-link smooth-scroll" href="#work"><i className="icofont-briefcase-1"></i> Portfolio</a></li>
                                    <li className="nav-item"><a className="nav-link smooth-scroll" href="#feed"><i className="icofont-quote-left"></i>Testimonial</a></li>
                                    <li className="nav-item"><a className="nav-link smooth-scroll" href="#blog"><i className="icofont-blogger"></i> Blog</a></li>
                                    <li className="nav-item"><a className="nav-link smooth-scroll" href="#contact"><i className="icofont-envelope"></i> Contact</a></li>
                                </ul>
                            </div>
                            <div className="sidebar-copyright pt-10">
                                {/* <p className="copyright">Give your idea life</p> */}
                            </div>
                        </div>
                        <div className="bsnav-mobile">
                            <div className="bsnav-mobile-overlay"></div>
                            <div className="navbar"></div>
                        </div>
                    </div>
                </header>
                {/* <!-- Header End --> */}

            </div>
        )
    }
}

export default Nav