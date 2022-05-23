import './styles.scss';
import AboutScrollAtom from './AboutScrollAtom';
import portrait from '../../../assets/portraitWomen.mp4';

function AboutScroll() {
  return (
    <div className="container">
      <div className="left">Research</div>

      <div className="right">
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
