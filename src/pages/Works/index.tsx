import { motion } from 'framer-motion';
import { Header } from '../../components';
import withFooter from '../../hoc/footerHOC';
import withNavBar from '../../hoc/NavHOC';
import withLoadingScreen from '../../hoc/pageTransition';
import desertImg from '../../../assets/desertImg.jpg';

import './styles.scss';
import { useState } from 'react';

const Work = () => {
  const [selectedFilter, setSelectedFilter] = useState('All work');
  const [isFilterOpen, setFilterOpen] = useState(false);

  return (
    <motion.div
      exit={{ translateX: 500 }}
      transition={{ duration: 400 }}
      className="std-container"
      onBlur={() => {
        console.log('blue');
      }}
    >
      <Header
        contents={['WORK']}
        customContainerStyles={{
          margin: '5px',
          paddingTop: '3vw',
          fontSize: '6vw',
          lineHeight: '5vw',
        }}
        // @TODO: check styles
        // customStyles={{ fontSize: "6.5vw" }}
      />

      <div className="filter-container">
        <span className="filter">Filter: </span>
        <div
          className="selected-filter-container"
          onClick={() => setFilterOpen(!isFilterOpen)}
        >
          <div className="hvr-underln-anim selected-filter-container-inner">
            <span className="work-category">{selectedFilter}</span>
            <span className="work-plus">+</span>
          </div>
          <div
            className="filter-list"
            style={!isFilterOpen ? { display: 'none' } : {}}
          >
            <div className="filter-option">Art</div>
            <div className="filter-option">Design</div>
            <div className="filter-option">wildlife</div>
          </div>
        </div>
      </div>

      <div className="hori-separator"></div>

      <div className="works-grid-container">
        <div className="works-image-container work-first-grid">
          <img src={desertImg} alt="" className="works-grid-image" />
          <div className="categories">Strategies . Brand Identity . Art</div>
        </div>

        <div className="works-image-container work-second-grid">
          <img src={desertImg} alt="" className="works-grid-image" />
        </div>
      </div>

      <div className="hori-separator"></div>
      <div className="works-grid-container">
        <div className="works-image-container work-first-grid">
          <img src={desertImg} alt="" className="works-grid-image" />
          <div className="categories">
            Strategies <span className="center-dot">.</span> Brand Identity .
            Art
          </div>
        </div>

        <div className="works-image-container work-second-grid">
          <img src={desertImg} alt="" className="works-grid-image" />
        </div>
      </div>
    </motion.div>
  );
};

const pageWithNav = withNavBar(Work);
const pageWithFooter = withFooter(pageWithNav, {
  nextPageLabel: 'About',
  nextPageLink: '/about',
});

export default withLoadingScreen(pageWithFooter);
