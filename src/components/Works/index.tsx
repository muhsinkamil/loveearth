import { motion } from 'framer-motion';
import desertImg from '../../../assets/desertimg.jpg';
import womenUnderWater from '../../../assets/womenUnderWater.jpg';
import fGroup from '../../../assets/fGroup.jpg';
import balloons from '../../../assets/balloons.jpg';

import './styles.scss';

function Works() {
  return (
    <div className="works-container">
      {[desertImg, womenUnderWater, fGroup, balloons].map((imageSrc, i) => {
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
