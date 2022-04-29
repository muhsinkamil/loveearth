import "./Navbar.scss";

type Props = {
  leftLogo: string;
  rightItems: string[];
};

const Navbar = ({ leftLogo, rightItems }: Props) => {
  return (
    <div className="nav-container">
      <div className="left-item">{leftLogo}</div>(
      <ul className="right-items">
        {rightItems.map((item, index) => (
          <li className="right-item" key={index}>
            {item}
          </li>
        ))}
      </ul>
      )
    </div>
  );
};

export default Navbar;
