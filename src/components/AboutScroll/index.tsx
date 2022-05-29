import './styles.scss';
import { useState, useEffect } from 'react';
import { AnimatePresence, motion, useViewportScroll } from 'framer-motion';
import AboutScrollAtom from './AboutScrollAtom';
import { services } from '../../translations/brandsWorked';

function AboutScroll() {
  const [content, setContent] = useState('Research');

  const { scrollYProgress } = useViewportScroll();

  useEffect(() => {
    const changeContent = () => {
      // console.log(scrollYProgress);
      if (window.scrollY > 1200) {
        setContent('Portrait');
      } else if (window.scrollY > 1000) {
        setContent('Research');
      } else {
        setContent('Design');
      }
    };

    window.addEventListener('scroll', changeContent);

    return () => window.removeEventListener('scroll', changeContent);
  }, []);

  return (
    <div
      className="about-pg-container"
      style={{
        display: 'flex',
        overflowX: 'hidden',
      }}
    >
      <div className="left">
        <AnimatePresence exitBeforeEnter>
          <motion.div
            // key={selectedTab ? selectedTab.label : 'empty'}
            className="services-offered"
            key={content}
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              fontSize: ' 4.8vw',
              textTransform: 'uppercase',
            }}
          >
            {content}
            <div style={{ overflow: 'hidden' }}>
              <motion.svg width="800" height="800">
                <motion.path
                  d="M0 10 L450 10"
                  style={{
                    pathLength: scrollYProgress,
                  }}
                ></motion.path>
              </motion.svg>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div
        className="right"
        style={{ width: '50%', fontSize: '4vw', overflow: 'hidden' }}
      >
        <div className="ruler" />
        <div className="scroll-elements">
          {services.map((service, i) => {
            const toInsertRuler = () => i === 4 || i === 8;
            return (
              <>
                {i === 4 && (
                  <div
                    style={{
                      fontSize: ' 4.8vw',
                      textTransform: 'uppercase',
                      marginTop: '5vw',
                    }}
                    className="scroll-heading"
                  >
                    Research
                  </div>
                )}
                {i === 8 && (
                  <div
                    style={{
                      fontSize: ' 4.8vw',
                      textTransform: 'uppercase',
                      marginTop: '5vw',
                    }}
                    className="scroll-heading"
                  >
                    Portrait
                  </div>
                )}
                <AboutScrollAtom
                  key={i}
                  offset={i}
                  isRuler={toInsertRuler()}
                  content={service}
                />
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default AboutScroll;
