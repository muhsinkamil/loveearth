import { motion } from 'framer-motion';
import portraitImg from '../../../assets/portraitPics/portrait4.jpg';
import womenUnderWater from '../../../assets/womenUnderWater/womenUnderWater.webp';
import fGroup from '../../../assets/fGroup/fGroup.webp';
import balloons from '../../../assets/loons/loons.webp';

import './styles.scss';

function Works() {
  return (
    <div className="works-container">
      {[portraitImg, womenUnderWater, fGroup, balloons].map((imageSrc, i) => {
        return (
          <div className="img-container" key={i}>
            <motion.img
              src={imageSrc}
              alt={imageSrc}
              className="works-img"
              initial={{
                scale: 1.5,
                rotate: '10deg',
              }}
              animate={{
                scale: 1,
                rotate: '0deg',
              }}
              transition={{
                duration: 0.8,
                ease: 'easeInOut',
              }}
            />
          </div>
        );
      })}
    </div>
  );
}

export default Works;
