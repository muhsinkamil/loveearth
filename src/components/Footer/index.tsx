import Button from '../Button';
import Header from '../Header';
import './styles.scss';

function Footer() {
  return (
    <div className="std-container" style={{ paddingTop: '6vw' }}>
      <div style={{ paddingBottom: '15px' }}>Next page</div>
      <Header
        contents={['CASE STUDIES']}
        customContainerStyles={{
          fontSize: '4.8vw',
          lineHeight: '0.8',
          fontWeight: '400',
        }}
      />

      <div className="footer-items">
        <div className="footer-left-items footer-flex-item">
          <Header
            contents={['WE WOULD LIKE TO HEAR FROM YOU.']}
            customContainerStyles={{
              fontSize: '1.5vw',
              lineHeight: '0.8',
              fontWeight: '400',
            }}
          />

          <Header
            contents={["LET'S WORK TOGETHER"]}
            customContainerStyles={{
              paddingTop: '0.5vw',
              fontSize: '1.5vw',
              lineHeight: '0.8',
              fontWeight: '400',
            }}
          />

          <div className="footer-btn">
            <Button
              bfrContent="Contact us"
              aftrContent="Get to know us"
              buttonOuterWidth="60px"
            />
          </div>
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
    </div>
  );
}

export default Footer;
