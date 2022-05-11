import "./styles.scss";

type Props = {
  bfrContent: string;
  aftrContent: string;
};

const Button = ({ bfrContent, aftrContent }: Props) => {
  return (
    <button className="btn-complex">
      <div
        className="btn-inner-complex text"
        bfr-content={bfrContent}
        aftr-content={aftrContent}
      ></div>
    </button>
  );
};

export default Button;
