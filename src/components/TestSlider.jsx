import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import Slider1 from './Slider1';
import Slider2 from './Slider2';
import Slider3 from './Slider3';

const TestSlider = () => {
  return (
    <div className="w-full h-auto">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 15000 }}
        loop
        className="w-full h-full"
      >
        <SwiperSlide><Slider1 /></SwiperSlide>
        <SwiperSlide><Slider2 /></SwiperSlide>
        <SwiperSlide><Slider3 /></SwiperSlide>
      </Swiper>
    </div>
  );
};

export default TestSlider;