import desertImg from '../../../assets/desertimg.jpg';
import womenUnderWater from '../../../assets/womenUnderWater.jpg';
import fGroup from '../../../assets/fGroup.jpg';
import balloons from '../../../assets/balloons.jpg';

import './styles.scss';

function Works() {
  return (
    <div className="works-container">
      <img src={desertImg} alt="womenUnderWater" className="works-img" />
      <img src={womenUnderWater} alt="womenUnderWater" className="works-img" />
      <img src={fGroup} alt="fashiongGroup" className="works-img" />
      <img src={balloons} alt="balloons" className="works-img" />
    </div>
  );
}

export default Works;
