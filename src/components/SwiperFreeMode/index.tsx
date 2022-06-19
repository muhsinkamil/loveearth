// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import './styles.scss';

// import required modules
import { FreeMode } from 'swiper';

type Props = {
  slideImages: string[];
  customStyles?: any;
};

function SwiperFreeMode({
  slideImages,
  customStyles = {
    height: 'max(20vw, 400px)',
  },
}: Props) {
  return (
    <>
      <Swiper
        slidesPerView={3.1}
        spaceBetween={30}
        freeMode={true}
        loop={true}
        loopFillGroupWithBlank={true}
        modules={[FreeMode]}
        className="mySwiper-horizontal"
      >
        {slideImages.map((slide, i) => (
          <SwiperSlide key={i} style={customStyles}>
            <img src={slide} alt={slide} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default SwiperFreeMode;
