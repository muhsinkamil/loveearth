import { Link, RouteComponentProps, withRouter } from 'react-router-dom';
import Button from '../Button';
import Header from '../Header';
import FooterIconLine from './FooterIconLine';
import './styles.scss';

type Props = {
  nextPageProps: {
    nextPageLabel: string;
    nextPageLink: string;
  };
  isAboutPage?: boolean;
};

function Footer({ nextPageProps, isAboutPage = false }: Props) {
  let customStyles = {};
  let containerStyles: any = {
    paddingTop: '6vw',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  };
  if (isAboutPage) {
    customStyles = {
      display: 'flex',
      flexDirection: 'column',
      paddingRight: '50vw',
    };
  } else {
    containerStyles = { ...containerStyles, minHeight: '100vh' };
  }

  return (
    <div style={customStyles}>
      <div className="std-container" style={containerStyles}>
        <div style={{ paddingBottom: '15px' }}>Next page</div>
        <h3>
          <Link
            to={nextPageProps.nextPageLink}
            className="footer-nxt-lnk hvr-underln-anim"
          >
            {nextPageProps.nextPageLabel}
          </Link>
        </h3>

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
      <div className="std-container">
        <div className="full-ftr-keyline" />
        <FooterIconLine />
      </div>
    </div>
  );
}

export default Footer;
