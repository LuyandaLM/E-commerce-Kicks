import React from "react";
import { Carousel } from "react-bootstrap";

const SneakerCarousel = () => {
  return (
    <div className="container text-center">
      <Carousel>
        <Carousel.Item>
          <div>
            <h2>LATEST RELEASES!!!</h2>
          </div>
          <video
            className="d-block w-100"
            autoPlay
            controls
            name="media"
            src="https://static.nike.com/a/videos/q_90,vc_vp9/dyrkm7tuztoh67dampbe/video.webm"
            alt="First slide"
            type="video/webm"
          />
        </Carousel.Item>
        <Carousel.Item>
          <h1>GET YOURS NOW!!!</h1>
          <video
            className="d-block w-100"
            autoPlay
            controls
            name="media"
            src="https://static.nike.com/a/videos/q_90,vc_vp9/6fa1975a-8252-4e38-9706-26f4c742bfe3/video.webm"
            alt="Second slide"
          />
        </Carousel.Item>

        <Carousel.Item>
          <h1>@KICKIN IT</h1>
          <video
            className="d-block w-100"
            autoPlay
            controls
            name="media"
            src="https://static.nike.com/a/videos/q_90,vc_vp9/yp4mqubjdcjkronvu5td/video.webm"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default SneakerCarousel;
