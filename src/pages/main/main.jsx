import React from 'react';
import './main.css';

import Navbar from 'components/Navbar'
import Banner from 'components/Banner'
import Content from 'components/Content'
import CallToAction from 'components/CallToAction'
import Footer from 'components/Footer'

const Main = () => {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Content />
      <CallToAction />
      <Footer />
      <div className="App-body">

      </div>
    </div>
  );
}

export default Main;
