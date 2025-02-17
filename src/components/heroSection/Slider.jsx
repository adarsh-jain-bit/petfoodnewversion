"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { generateRandomKey } from '@src/utiles/KeyGenerater';
import { Navigation, Pagination , Scrollbar ,A11y , EffectFade, Autoplay} from 'swiper/modules';
import 'swiper/css/effect-fade';
import { styles } from "./slider.style";
import Image from 'next/image';

export default function Slider() {
    const sliderImages = [
        'https://www.petsy.online/cdn/shop/files/Cat-_-Dog--Treats-Banner_4.jpg?v=1717164172&width=19',
        'https://www.petsy.online/cdn/shop/files/Desktop_19fbcab5-ef6b-4792-9681-d1c1b816bea6.jpg?v=1720097388&width=1600',
        'https://www.petsy.online/cdn/shop/files/Rewards.jpg?v=1719813784&width=1912',
        'https://www.petsy.online/cdn/shop/files/Dog-food_9baa661d-b1ec-4072-9f97-05a05c58b7e3.jpg?v=1719819495&width=1912'
    ];
    return (
      <>
      <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y , EffectFade , Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      effect='fade'
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      style={styles.swiper}
      autoplay >
      {sliderImages.map((props) => (
        <>
        <SwiperSlide key={generateRandomKey()} style={styles.swiperSlide}>
            <Image 
              src={`${props}`} 
              layout="intrinsic"
              width={1000}
              height={1000} 
              priority 
              alt={`Slide1`}
              style={styles.swiperSlideImg}
            />
          </SwiperSlide>      
        </>
      ))}
      </Swiper>
      </>
    );
}
