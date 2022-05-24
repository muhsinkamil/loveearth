import BackDrop from './Backdrop';
import FormElements from './Form';
import './styles.scss';

const ContactForm = () => {
  return (
    <BackDrop>
      <div className="contact-form-wrapper">
        <div className="close-btn">close</div>
        <div className="contact-head">Contact</div>
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

            <div className="ftr-rt-item">
              <div className="footer-sub">Business Inquiries</div>
              <div className="footer-desc">hello@lighthouse.com</div>
            </div>
          </div>
        </div>
      </div>
    </BackDrop>
  );
};

export default ContactForm;
