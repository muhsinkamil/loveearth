import { useRef, useEffect } from 'react';
import { motion, useTransform, useViewportScroll } from 'framer-motion';
import './styles.scss';

function AboutScroll() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useViewportScroll();

  let top = 0;

  const getXPos = (i: number) => {
    let top = -i * 0.04 * 1500;
    const x = useTransform(
      scrollYProgress,
      [0, 0.3],
      [-top, -window.innerWidth + 1400],
    );
    return x;
  };

  useEffect(() => {
    const rect = ref.current?.getBoundingClientRect();

    top = rect!.top;
  }, [ref]);

  return (
    <div
      className="container"
      style={{
        display: 'flex',
        overflowX: 'hidden',
      }}
    >
      <div className="left" style={{ width: '50%' }} />
      <div className="right" style={{ width: '50%', fontSize: '4vw' }}>
        <div className="ruler" />
        <section ref={ref}>
          <motion.aside
            style={{
              x: getXPos(1),
            }}
          >
            Customer Research
          </motion.aside>
        </section>
        <section ref={ref}>
          <motion.aside
            style={{
              x: getXPos(2),
            }}
          >
            Trend analysis
          </motion.aside>
        </section>
        <section ref={ref}>
          <motion.aside
            style={{
              x: getXPos(3),
            }}
          >
            Competitive reviews
          </motion.aside>
        </section>
        <section ref={ref}>
          <motion.aside
            style={{
              x: getXPos(4),
            }}
          >
            Market research
          </motion.aside>
        </section>
        <section ref={ref}>
          <motion.aside
            style={{
              x: getXPos(5),
              y: 0,
            }}
          >
            Customer Research
          </motion.aside>
        </section>
        <section ref={ref}>
          <motion.aside
            style={{
              x: getXPos(6),
            }}
          >
            Trend analysis
          </motion.aside>
        </section>

        <section ref={ref}>
          <motion.aside
            style={{
              x: getXPos(7),
            }}
          >
            Competitive reviews
          </motion.aside>
        </section>
      </div>
    </div>
  );
}

export default AboutScroll;
