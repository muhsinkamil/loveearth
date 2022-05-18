import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import './Navbar.scss';
import { Link } from 'react-router-dom';

type Props = {
  leftLogo: string;
  rightItems: { item: string; navigateTo: string }[];
};

type SmallNavProps = {
  mobileMenuStatus: boolean;
  setMobileMenuStatus: (status: boolean) => void;
  rightItems: { item: string; navigateTo: string }[];
  leftLogo: string;
};

const SmallClosedNav = ({
  mobileMenuStatus,
  setMobileMenuStatus,
  rightItems,
  leftLogo,
}: SmallNavProps) => {
  return (
    <div className="nav-container">
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
          {rightItems.map((item, index) => (
            <li className="right-item" key={index}>
              <Link to={item.navigateTo}>{item.item}</Link>
            </li>
          ))}
        </>
      </ul>
    </div>
  );
};

const Navbar = ({ leftLogo, rightItems }: Props) => {
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
              {rightItems.map((item, index) => (
                <li className="right-item" key={index}>
                  <Link to={item.navigateTo}>{item.item}</Link>
                </li>
              ))}
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
          />
        </>
      )}
    </AnimatePresence>
  );
};

export default Navbar;
