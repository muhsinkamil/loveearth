import './Navbar.scss';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useContactForm } from '../../providers/contact';
import { hideBodyOverflow } from '../../helpers';

type Props = {
  leftLogo: string;
  rightItems: { item: string; navigateTo?: string }[];
  bg: string;
};

const Navbar = ({ leftLogo, rightItems, bg }: Props) => {
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

    window.addEventListener('scroll', fixNavBar);
  }, []);

  return (
    <div
      className="nav-container"
      style={
        fixedPos
          ? { position: 'fixed', backgroundColor: bg }
          : { backgroundColor: bg }
      }
    >
      <Link to="/">
        <div className="left-item">{leftLogo}</div>
      </Link>
      <ul className="right-items">
        {rightItems.map((item, index) => {
          if (item.navigateTo) {
            return (
              <li
                className="right-item "
                key={index}
                style={{ display: 'inline-block' }}
              >
                <Link to={item.navigateTo} className="hvr-underln-anim">
                  {item.item}
                </Link>
              </li>
            );
          }

          if (item.item === 'CONTACT') {
            return (
              <li key={index} onClick={handleContactClick}>
                <span className="right-item hvr-underln-anim">{item.item}</span>
              </li>
            );
          }
        })}
      </ul>
    </div>
  );
};

export default Navbar;
