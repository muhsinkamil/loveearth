import { useEffect, useRef } from 'react';
import { motion, useTransform, useViewportScroll } from 'framer-motion';

type Props = {
  offset: number;
};

function AboutScrollAtom({ offset }: Props) {
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
      <motion.aside
        style={{
          x,
          fontSize: '4vw',
        }}
      >
        Customer Research
      </motion.aside>
    </section>
  );
}

export default AboutScrollAtom;
