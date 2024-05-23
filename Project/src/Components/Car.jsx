import React from 'react'
import Slider from "react-slick";

const Car = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        speed: 2000,
        autoplaySpeed: 3000,
        cssEase: "linear"
      };
  return (
    <div>
        <div className="slider-container mar">
      <Slider {...settings}>
        <div>
          <img src="https://supro.noudeveloper.com/uploads/small_2b_c3aa5954dd.jpg" alt="" />
        </div>
        <div>
         <img src="https://supro.noudeveloper.com/uploads/small_1b_8a96b4f17a.jpg" alt="" />
        </div>
        <div>
         <img src="https://supro.noudeveloper.com/uploads/small_3b_ed18d940e7.jpg" alt="" />
        </div>
        <div>
          <img src="https://supro.noudeveloper.com/uploads/small_4b_43f5aea45d.jpg" alt="" />
        </div>
        <div>
          <img src="https://supro.noudeveloper.com/uploads/small_1b_8a96b4f17a.jpg" alt="" />
        </div>
      </Slider>
    </div>
    </div>
  )
}

export default Car
