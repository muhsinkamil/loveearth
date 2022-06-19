import { ContactForm } from '../../components';
import FormElements from '../../components/Contact/Form';
import FooterIconLine from '../../components/Footer/FooterIconLine';
import { unsetBodyOverflow } from '../../helpers';
import { useContactForm } from '../../providers/contact';

import './styles.scss';

const ContactPage = () => {
  const {
    state: { isContactFormOpen },
    actions: { closeContactForm },
  } = useContactForm();

  const handleCloseForm = () => {
    unsetBodyOverflow();
    closeContactForm();
  };

  return (
    <ContactForm
      isModalOpen={isContactFormOpen}
      handleCloseModal={handleCloseForm}
      title="Contact"
    >
      <FormElements />
      <div className="contact-desc">
        We love amazing moments. We don't know want you experience the same.
        Let's connect.
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
      <FooterIconLine />
    </ContactForm>
  );
};

export default ContactPage;
