import React from "react";
import "./SliderCarousel.scss";
import "swiper/swiper-bundle.min.css";
import Section from "@Components/Section";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper";
import { useSelector } from "react-redux";

const SliderCarousel = () => {
  const { allBooks, status, error } = useSelector((state) => state.books);
  console.log("allBooks ", allBooks);

  return (
    <Section>
      {(status === "resolved" && (
        <Swiper
          slidesPerView={5}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          modules={[Navigation, Pagination, Autoplay]}
          speed={1000}
          autoplay={{ delay: 2000 }}
          loop={true}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          className="swiper slider-carousel-container"
        >
          <div className="swiper-wrapper wrapper-books">
            {allBooks.map((item) => (
              <SwiperSlide
                key={item.id}
                className="swiper-slide wrapper-books__item"
              >
                <div className="wrapper-books__item__wrapper-img">
                  <img src={item.img} alt={item.img} />
                </div>
              </SwiperSlide>
            ))}
          </div>

          <div className="swiper-pagination"></div>
          <div className="swiper-button-prev"></div>
          <div className="swiper-button-next"></div>
        </Swiper>
      )) ||
        (error && <h2>Error, slider doesn't recieved the data: {error}</h2>)}
    </Section>
  );
};

export default SliderCarousel;
