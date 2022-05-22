import './styles.scss';
import AboutScrollAtom from './AboutScrollAtom';

function AboutScroll() {
  return (
    <div
      className="container"
      style={{
        display: 'flex',
        overflowX: 'hidden',
      }}
    >
      <div className="left" style={{ width: '50%' }}>
        Research
      </div>
      <div className="right" style={{ width: '50%', fontSize: '4vw' }}>
        <div className="ruler" />
        <div className="scroll-elements">
          {[...Array(10).keys()].map((el, i) => {
            return <AboutScrollAtom offset={i} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default AboutScroll;
