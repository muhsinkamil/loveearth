import './styles.scss';

type Props = {
  bfrContent: string;
  aftrContent: string;
  buttonOuterWidth: string;
};

const Button = ({ bfrContent, aftrContent, buttonOuterWidth }: Props) => {
  return (
    <button
      className="btn-complex"
      // style={{ minWidth: buttonOuterWidth }}
    >
      <div
        className="btn-inner-complex text"
        bfr-content={bfrContent}
        aftr-content={aftrContent}
      ></div>
    </button>
  );
};

export default Button;
