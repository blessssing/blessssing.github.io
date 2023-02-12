import React from "react";
import "./SliderCarousel.scss";
import "swiper/swiper-bundle.min.css";
import Section from "@Components/Section";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const SliderCarousel = () => {
  const { allBooks, status, error } = useSelector((state) => state.books);
  const navigate = useNavigate();

  return (
    <Section>
      {(status === "resolved" && (
        <Swiper
          breakpoints={{
            991: { slidesPerView: 5, spaceBetween: 10 },
            767: { slidesPerView: 4, spaceBetween: 10 },
            575: { slidesPerView: 3, spaceBetween: 10 },
            325: { slidesPerView: 2, spaceBetween: 10 },
          }}
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
            {allBooks.map(({ id, img, title, price }) => (
              <SwiperSlide
                key={id}
                className="swiper-slide wrapper-books__item"
              >
                <div className="wrapper-books__item__wrapper-img">
                  <img src={img} alt={img} />
                </div>

                <div className="info-block">
                  <div className="price">Цена:&nbsp;{price}&nbsp;&#8381;</div>
                  <div className="wrapper-look-btn">
                    <button
                      className="look"
                      onClick={() => navigate(`/book/${title}`)}
                    >
                      Посмотреть
                    </button>
                  </div>
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
