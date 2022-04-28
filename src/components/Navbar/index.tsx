import "./Navbar.scss";

type Props = {
  leftLogo: string;
  rightItems: string[];
};

export const Navbar = ({ leftLogo, rightItems }: Props) => {
  return (
    <div className="nav-container">
      <div className="left-item">{leftLogo}</div>
      <div className="right-items">
        {rightItems.map((item, index) => (
          <div className="right-item" key={index}>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};
