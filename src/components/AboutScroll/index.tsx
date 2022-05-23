import './styles.scss';
import AboutScrollAtom from './AboutScrollAtom';
import { useViewportScroll, motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

function AboutScroll() {
  const [content, setContent] = useState('Research');

  const { scrollYProgress } = useViewportScroll();

  useEffect(() => {
    const changeContent = () => {
      // console.log(scrollYProgress);
      if (window.scrollY > 2000) {
        setContent('Design');
      } else if (window.scrollY > 1500) {
        setContent('Direction');
      } else {
        setContent('Research');
      }
    };

    window.addEventListener('scroll', changeContent);
  }, []);

  return (
    <div
      className="container"
      style={{
        display: 'flex',
        // overflowX: 'hidden',
      }}
    >
      <AnimatePresence exitBeforeEnter>
        <motion.div
          className="left"
          // key={selectedTab ? selectedTab.label : 'empty'}
          key={content}
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
          style={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {content}
          {/* <Line x={scrollYProgress} />
           */}
          {/* <motion.svg height="210" width="500">
            <motion.path d="M10 10 L100 100" />
          </motion.svg> */}

          <motion.svg width="500" height="500">
            <motion.path
              d="M10 10 L500 10"
              style={{
                pathLength: scrollYProgress,
              }}
            ></motion.path>
          </motion.svg>
        </motion.div>
      </AnimatePresence>
      <div
        className="right"
        style={{ width: '50%', fontSize: '4vw', overflow: 'hidden' }}
      >
        <div className="ruler" />
        <div className="scroll-elements">
          {[...Array(20).keys()].map((el, i) => {
            return <AboutScrollAtom offset={i} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default AboutScroll;
