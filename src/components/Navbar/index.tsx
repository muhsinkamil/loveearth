import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import './Navbar.scss';
import { Link, RouteComponentProps, withRouter } from 'react-router-dom';
import { useContactForm } from '../../providers/contact';
import { hideBodyOverflow } from '../../helpers';

type Props = {
  leftLogo: string;
  rightItems: { item: string; navigateTo?: string }[];
  bg: string;
} & RouteComponentProps;

type SmallNavProps = {
  mobileMenuStatus: boolean;
  setMobileMenuStatus: (status: boolean) => void;
  rightItems: { item: string; navigateTo?: string }[];
  leftLogo: string;
  handleContactClick: () => void;
  bg: string;
};

const SmallClosedNav = ({
  mobileMenuStatus,
  setMobileMenuStatus,
  rightItems,
  leftLogo,
  handleContactClick,
  bg,
}: SmallNavProps) => {
  return (
    <div className="nav-container" style={{ backgroundColor: bg }}>
      <Link to="/">
        <div className="left-item">{leftLogo}</div>
      </Link>
      <div
        className="menu-rt-sm"
        onClick={() => setMobileMenuStatus(!mobileMenuStatus)}
      >
        Menu +
      </div>

      <ul className="lg-close-rt-items">
        <>
          {rightItems.map((item, index) => {
            if (item.navigateTo) {
              return (
                <li className="right-item hvr-underln-anim" key={index}>
                  <Link to={item.navigateTo}>{item.item}</Link>
                </li>
              );
            }

            if (item.item === 'CONTACT') {
              return (
                <li key={index} onClick={handleContactClick}>
                  <span className="right-item hvr-underln-anim">
                    {item.item}
                  </span>
                </li>
              );
            }
          })}
        </>
      </ul>
    </div>
  );
};

const Navbar = ({ leftLogo, rightItems, match, bg }: Props) => {
  const [fixedPos, setFixedPos] = useState(false);

  const {
    actions: { openContactForm },
  } = useContactForm();

  const handleContactClick = () => {
    hideBodyOverflow();
    openContactForm();
  };

  useEffect(() => {
    const fixNavBar = () => {
      if (window.scrollY > 200) setFixedPos(true);
      else setFixedPos(false);
    };

    if (match.path === '/about') {
      setFixedPos(true);
    } else {
      window.addEventListener('scroll', fixNavBar);
    }
  }, []);
  const [mobileMenuStatus, setMobileMenuStatus] = useState(false);

  return (
    <AnimatePresence>
      {mobileMenuStatus ? (
        <motion.div
          key="nav-screen"
          initial={{ translateY: -1000 }}
          animate={{
            translateY: 0,
            transition: { duration: 0.7, ease: 'easeInOut' },
          }}
          exit={{
            translateY: -1000,
            transition: { duration: 0.7, ease: 'easeInOut' },
          }}
          className="nav-open-container"
        >
          <div className="menu-open">
            <Link to="/">
              <div className="sm-left-item">{leftLogo}</div>
            </Link>
            <div
              className="menu-rt-sm"
              onClick={() => setMobileMenuStatus(!mobileMenuStatus)}
            >
              {mobileMenuStatus ? 'Close' : 'Menu +'}
            </div>
          </div>
          <ul className="lg-right-items">
            <>
              {rightItems.map((item, index) => {
                if (item.navigateTo) {
                  return (
                    <li className="right-item" key={index}>
                      <Link to={item.navigateTo}>{item.item}</Link>
                    </li>
                  );
                }
                if (item.item === 'CONTACT') {
                  return (
                    <li key={index} onClick={handleContactClick}>
                      <span className="right-item hvr-underln-anim">
                        {item.item}
                      </span>
                    </li>
                  );
                }
              })}
            </>
          </ul>
        </motion.div>
      ) : (
        <>
          <SmallClosedNav
            leftLogo={leftLogo}
            rightItems={rightItems}
            setMobileMenuStatus={setMobileMenuStatus}
            mobileMenuStatus={mobileMenuStatus}
            handleContactClick={handleContactClick}
            bg={bg}
          />
        </>
      )}
    </AnimatePresence>
  );
};

export default withRouter(Navbar);
