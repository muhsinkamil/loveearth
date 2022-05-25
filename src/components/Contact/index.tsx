import { AnimatePresence, motion } from 'framer-motion';
import { unsetBodyOverflow } from '../../helpers';
import { useContactForm } from '../../providers/contact';
import BackDrop from './Backdrop';
import FormElements from './Form';
import './styles.scss';

const ContactForm = () => {
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
            initial={{ y: '100vh' }}
            animate={{
              y: 0,
              transition: { duration: 0.5, ease: 'easeInOut' },
            }}
            exit={{
              y: '100vh',
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
            <FormElements />
            <div className="contact-desc">
              We love amazing moments. We don't know want you experience the
              same. Let's connect.
            </div>
            <div className="footer-right-items footer-flex-item">
              <div className="footer-rt-container">
                <div className="ftr-rt-item">
                  <div className="footer-sub">Business Inquiries</div>
                  <div className="footer-desc">hello@lighthouse.com</div>
                </div>

                <div className="ftr-rt-item">
                  <div className="footer-sub">Business Inquiries</div>
                  <div className="footer-desc">hello@lighthouse.com</div>
                </div>
              </div>

              <div className="footer-rt-container">
                <div className="ftr-rt-item">
                  <div className="footer-sub">Business Inquiries</div>
                  <div className="footer-desc">hello@lighthouse.com</div>
                </div>

                <div className="ftr-rt-item">
                  <div className="footer-sub">Business Inquiries</div>
                  <div className="footer-desc">hello@lighthouse.com</div>
                </div>
              </div>
            </div>
          </motion.div>
        </BackDrop>
      )}
    </AnimatePresence>
  );
};

export default ContactForm;
