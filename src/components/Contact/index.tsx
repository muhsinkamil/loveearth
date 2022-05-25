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
              </div>
            </div>

            <div className="full-keyline" />
            <div className="footer-icon-container">
              <div className="ftr-icon-left">LightHouse &copy; 2022</div>
              <div className="ftr-icon-right">
                <div className="ftr-icon">
                  <span className="hvr-underln-anim">Github</span>
                </div>
                <div className="ftr-icon">
                  <span className="hvr-underln-anim">Twitter</span>
                </div>
                <div className="ftr-icon">
                  <span className="hvr-underln-anim">Linkedin</span>
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
