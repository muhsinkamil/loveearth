import { AnimatePresence, motion } from 'framer-motion';
import './styles.scss';

type Props = {
  i: number;
  isActive: number | false;
  setActive: (index: false | number) => void;
  title: string;
  content: any;
  category: string;
};

export default function AccordionItem({
  i,
  setActive,
  isActive,
  title,
  content,
  category,
}: Props) {
  const isOpen = isActive === i;
  return (
    <div className="acc-item">
      <motion.div
        style={{
          padding: '5px',
          margin: '5px',
        }}
        className={isOpen ? 'acc-item-open' : 'acc-item-not-open'}
      >
        <div
          style={{
            display: 'grid',
            justifyContent: 'space-between',
            cursor: 'pointer',
            padding: '1vw 0',
            fontSize: '14px',
            gridTemplateColumns: '50% 40% 10%',
            textTransform: 'uppercase',
          }}
          onClick={() => setActive(isOpen ? false : i)}
        >
          {title}
          <span>{category}</span>
          <span style={{ padding: '0 10px', fontSize: '12px' }}>
            {isOpen ? `LESS -` : `MORE +`}
          </span>
        </div>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              key="content"
              initial="collapsed"
              animate="open"
              exit="collapsed"
              variants={{
                open: {
                  opacity: 1,
                  height: 'auto',
                },
                collapsed: {
                  opacity: 0,
                  height: 0,
                },
              }}
              transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
              style={{
                display: 'grid',
                gridTemplateColumns: '50% 40% 10%',
              }}
            >
              <div style={{ width: '50%' }} />
              <div
                style={{
                  marginBottom: '1.4vw',
                  fontSize: '14px',
                  lineHeight: 1.2,
                  fontWeight: 300,
                  gridColumn: 2 / 3,
                }}
              >
                {content}
              </div>
              <div style={{ width: '40%' }} />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
