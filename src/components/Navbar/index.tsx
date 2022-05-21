import './Navbar.scss';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

type Props = {
  leftLogo: string;
  rightItems: { item: string; navigateTo: string }[];
};

const Navbar = ({ leftLogo, rightItems }: Props) => {
  const [fixedPos, setFixedPos] = useState(false);

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
      style={fixedPos ? { position: 'fixed' } : {}}
    >
      <Link to="/">
        <div className="left-item">{leftLogo}</div>
      </Link>
      <ul className="right-items">
        {rightItems.map((item, index) => (
          <li className="right-item" key={index}>
            <Link to={item.navigateTo}>{item.item}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
