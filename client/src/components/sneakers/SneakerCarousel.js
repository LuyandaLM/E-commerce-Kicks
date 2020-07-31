import React from "react";
import { Carousel } from "react-bootstrap";

const SneakerCarousel = () => {
  return (
    <div className="container text-center">
      <Carousel>
        <Carousel.Item>
          <div>
            <h1>LATEST RELEASES!!!</h1>
          </div>
          <video
            className="d-block w-100"
            controls
            autoPlay
            name="media"
            src="https://static.nike.com/a/videos/q_90,vc_vp9/dyrkm7tuztoh67dampbe/video.webm"
            alt="First slide"
            type="video/webm"
          />
        </Carousel.Item>
        <Carousel.Item>
          <h1>GET YOURS NOW!!!</h1>
          <img
            className="d-block w-100"
            src="https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/7e856e20-13ff-4a1f-9cec-2c840c592872/react-element-55-shoe-3B4g5L.jpg"
            alt="Second slide"
            style={{ height: "600px", width: "400px" }}
          />
        </Carousel.Item>

        <Carousel.Item>
          <h1>@KICKIN IT</h1>
          <img
            className="d-block w-100"
            src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/c159930e-b1f0-4693-8d7f-226d2f8031f6/custom-nike-air-force-1-by-you.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default SneakerCarousel;
