'use client';
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import './Swiper.css';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

export default function App({ images }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  if (!images || images.length === 0) return null;

  if (images.length === 1) {
    return (
      <div style={{ borderRadius: '10px', overflow: 'hidden' }}>
        <img src={`/${images[0]}`} alt="product" style={{ width: '95%' , height: "95%", borderRadius : "15px" }} />
      </div>
    );
  }

  return (
    <>
      <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <img src={`/${images}`} alt={`image-${index}`} />
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        style={{ padding: '20px 10px 0px 10px', borderRadius: '10px' }}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <img src={`/${images}`} alt={`thumb-${index}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
