import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Services from './components/Services'
import Certificates from './components/Certificates'
import Hire from './components/Hire'
import Portfolio from './components/Portfolio'
import FAQ from './components/FAQ'
import Feedback from './components/Feedback'
import Footer from './components/Footer'
import { Fragment } from 'react';

function App() {
  return (
    <Fragment>
      {/* Header */}
      <Header />
      <div className="clearfix"></div>

      <div className="main-area-width">

        <main className="main">

          {/* Hero */}
          <Hero />
          {/* About */}
          <About />
          {/* Education and Experience */}
          <Experience />
          {/* Services */}
          <Services />
          {/* Certificates */}
          <Certificates />
          {/* Hire Me */}
          <Hire />
          {/* FAQ */}
          <FAQ />
          {/* Portfolio */}
          <Portfolio />
          {/* FeedBack */}
          <Feedback />

          <div className="clearfix"></div>

          {/* Footer */}
          <Footer />

        </main>
      </div>
      {/* <!-- Start Scroll top --> */}
      <a href="#home" id="scrtop" className="smooth-scroll"><i className="icofont-rounded-up"></i></a>
      {/* <!-- End Scroll top--> */}

      {/* <!-- CURSOR --> */}
      <div className="mouse-cursor cursor-outer"></div>
      <div className="mouse-cursor cursor-inner"></div>
      {/* <!-- /CURSOR --> */}
    </Fragment >
  );
}

export default App;
