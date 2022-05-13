import { AnimatePresence, motion } from "framer-motion";
import "./styles.scss";

type Props = {
  i: number;
  isActive: number;
  setActive: (index: false | number) => void;
  title: string;
  content: any;
};

export default function AccordionItem({
  i,
  setActive,
  isActive,
  title,
  content,
}: Props) {
  const isOpen = isActive === i;
  return (
    <div className="acc-item">
      <motion.div
        style={{
          padding: "5px",
          cursor: "pointer",
          margin: "5px",
        }}
        className={isOpen ? "acc-item-open" : "acc-item-not-open"}
        onClick={() => setActive(isOpen ? false : i)}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          {title}
          <span style={{ padding: "0 10px" }}>{isOpen ? `-` : `+`}</span>
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
                  height: "auto",
                },
                collapsed: {
                  opacity: 0,
                  height: 0,
                },
              }}
              transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
            >
              {content}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
