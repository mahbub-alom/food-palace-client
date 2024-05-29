import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";

// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Carousel } from "react-responsive-carousel";
import slideImg1 from "../../../assets/banner/slide1.jpg";
import slideImg2 from "../../../assets/banner/slide2.jpg";
import slideImg3 from "../../../assets/banner/slide3.jpg";
import slideImg4 from "../../../assets/banner/slide4.jpg";
import slideImg5 from "../../../assets/banner/slide5.jpg";
import slideImg6 from "../../../assets/banner/slide6.jpg";

const Banner = () => {
  return (
    // <div className="text-center">
    //   <Carousel>
    //     <div className="h-[600px]">
    //       <img className="h-full" src={slideImg3} alt="" />
    //     </div>
    //     <div className="">
    //       <img src={slideImg2} alt="" />
    //     </div>
    //     {/* <div className="">
    //       <img src={slideImg1} alt="" />
    //     </div>
    //     <div className="">
    //       <img src={slideImg4} alt="" />
    //     </div>
    //     <div className="">
    //       <img src={slideImg5} alt="" />
    //     </div>
    //     <div className="">
    //       <img src={slideImg6} alt="" />
    //     </div> */}
    //   </Carousel>
    // </div>
    <div>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <img className="h-[600px] w-full" src={slideImg6} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="h-[600px] w-full" src={slideImg5} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="h-[600px] w-full" src={slideImg4} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="h-[600px] w-full" src={slideImg3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="h-[600px] w-full" src={slideImg2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="h-[600px] w-full" src={slideImg1} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
