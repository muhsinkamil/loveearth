import { useRef } from 'react';
import './styles.scss';

type Props = {
  src: string;
  index: number;
  columnOffset: number;
  points: number[][];
};

function AboutFloatingImage({ src, index, columnOffset, points }: Props) {
  const ref = useRef(null);

  const values = points[index];
  if (!values) return null;
  const [row, column, spanRow, spanColumn] = values;

  const scrollIndex = () => {
    if (index === 1) return -1;
    if (index === 4) return -1;
    if (index === 0) return 0;
    if (index === 3) return 0;

    return 1;
  };
  return (
    <div
      className="gl-item-container"
      data-scroll
      data-scroll-speed={scrollIndex()}
      ref={ref}
      style={{
        gridArea: `${row} / ${
          column + columnOffset
        } / span ${spanRow} / span ${spanColumn}`,
      }}
    >
      <div className="gl-item-img-container">
        <div
          className="gl-item-img"
          style={{ backgroundImage: `url(${src})` }}
        ></div>
      </div>
    </div>
  );
}

export default AboutFloatingImage;
