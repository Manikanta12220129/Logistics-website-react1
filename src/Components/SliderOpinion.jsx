import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderOpinion = ({ reviews }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <>
<h1 className="text-center pt-3 mt-4 fw-bold">Our Clients Review</h1>
<Slider {...settings} className="mb-5">
  {reviews.map((review, index) => (
    <div key={index} className="client-review-slide">
      <div className="text-center">
        <div className="d-flex justify-content-center">
          <img className="img-fluid rounded-pill" src={review.clientImage} alt="" />
        </div>
        <h3 className="fw-bold">{review.clientName}</h3>
        <p className="fs-5 fw-bold">{review.comment}</p>
      </div>
    </div>
  ))}
</Slider>

    </>
  );
};

export default SliderOpinion;
