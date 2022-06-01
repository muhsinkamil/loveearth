// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css/bundle';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import './styles.scss';

// import required modules
import { FreeMode } from 'swiper';

type Props = {
  slideImages: string[];
};

function SwiperVerticalMode({ slideImages }: Props) {
  return (
    <>
      <Swiper
        slidesPerView={2.5}
        spaceBetween={30}
        freeMode={true}
        loop={true}
        modules={[FreeMode]}
        className="mySwiper"
        direction="vertical"
      >
        {slideImages.map((slide, i) => (
          <SwiperSlide key={i}>
            <img src={slide} alt={slide} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default SwiperVerticalMode;
