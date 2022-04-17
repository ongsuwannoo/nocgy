import React from 'react';
import './Banner.css';

let bannerData = {
  title: "React landing page",
  desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat porro hic praesentium fugit excepturi sit ullam cum soluta at ex consectetur provident quidem ipsam ipsa earum voluptate, voluptas architecto tenetur."
}

function Banner() {
  return (
    <div className='banner-bg'>
      <div className="container">
        <div className="banner-con">
          <div className="banner-text">
            <h1>{bannerData.title}</h1>
            <p>
              {bannerData.desc}
            </p>
            <a href="#learnmore" className='banner-btn'>Learn More</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;