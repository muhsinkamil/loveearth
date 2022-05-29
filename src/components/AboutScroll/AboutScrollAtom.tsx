import { useEffect, useRef } from 'react';
import { motion, useTransform, useViewportScroll } from 'framer-motion';

type Props = {
  offset: number;
  isRuler: boolean;
  content: string;
};

function AboutScrollAtom({ offset, isRuler, content }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useViewportScroll();
  let top = 0;

  const x = useTransform(
    scrollYProgress,
    [0, 0.4 + offset * 0.03],
    [offset * 200, 0],
  );

  useEffect(() => {
    const rect = ref.current?.getBoundingClientRect();
    top = rect!.top;
  }, [ref]);

  return (
    <section ref={ref}>
      {isRuler ? (
        <motion.aside
          style={{
            x,
          }}
          className="hori-ruler"
        ></motion.aside>
      ) : (
        <motion.aside
          style={{
            x,
            fontSize: '3.5vw',
            textTransform: 'uppercase',
            lineHeight: '4.5vw',
          }}
        >
          {content}
        </motion.aside>
      )}
    </section>
  );
}

export default AboutScrollAtom;
