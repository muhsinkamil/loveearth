import { AnimatePresence, motion } from 'framer-motion';
import { unsetBodyOverflow } from '../../helpers';
import { useContactForm } from '../../providers/contact';
import FooterIconLine from '../Footer/FooterIconLine';
import BackDrop from './Backdrop';
import FormElements from './Form';
import './styles.scss';

const ContactForm = ({ children }: any) => {
  const {
    state: { isContactFormOpen },
    actions: { closeContactForm },
  } = useContactForm();

  const handleCloseForm = () => {
    unsetBodyOverflow();
    closeContactForm();
  };

  return (
    <AnimatePresence>
      {isContactFormOpen && (
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
          >
            <button
              className="close-btn hvr-underln-anim"
              onClick={handleCloseForm}
            >
              close
            </button>
            <div className="contact-head">Contact</div>
            {children}
          </motion.div>
        </BackDrop>
      )}
    </AnimatePresence>
  );
};

export default ContactForm;
