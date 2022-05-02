import "./Navbar.scss";
import { Link } from "react-router-dom";

type Props = {
  leftLogo: string;
  rightItems: { item: string; navigateTo: string }[];
};

const Navbar = ({ leftLogo, rightItems }: Props) => {
  return (
    <div className="nav-container">
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
