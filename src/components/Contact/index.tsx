import { AnimatePresence, motion } from 'framer-motion';
import BackDrop from './Backdrop';
import './styles.scss';

type Props = {
  isModalOpen: boolean;
  handleCloseModal: () => void;
  title: string;
  children: any;
  isDark?: boolean;
  isGridView?: boolean;
};

const ContactForm = ({
  children,
  title,
  isModalOpen,
  handleCloseModal,
  isDark = false,
  isGridView = true,
}: Props) => {
  return (
    <AnimatePresence>
      {isModalOpen && (
        <BackDrop>
          <motion.div
            key="contact"
            className="contact-form-wrapper"
            initial={{ y: 1000 }}
            animate={{
              y: 0,
              transition: { duration: 0.5, ease: 'easeInOut' },
            }}
            exit={{
              y: 1000,
              transition: { duration: 0.5, ease: 'easeInOut' },
            }}
            style={{
              ...(isDark ? { color: 'white', background: 'black' } : {}),
              ...(isGridView
                ? {
                    display: 'grid',
                    gridTemplateColumns: '50% 50%',
                  }
                : {}),
            }}
          >
            <button
              className={`close-btn hvr-underln-anim ${
                isDark ? 'hvr-underln-anim-dark' : ''
              }`}
              onClick={handleCloseModal}
              style={{ ...(isDark ? { color: 'white' } : {}) }}
            >
              close
            </button>
            <div className="contact-head">{title}</div>
            {children}
          </motion.div>
        </BackDrop>
      )}
    </AnimatePresence>
  );
};

export default ContactForm;
