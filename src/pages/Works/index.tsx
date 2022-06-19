import { Fragment, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ContactForm, Header } from '../../components';
import withFooter from '../../hoc/footerHOC';
import withNavBar from '../../hoc/NavHOC';
import withLoadingScreen from '../../hoc/pageTransition';
import desertImg from '../../../assets/desertImg.jpg';
import womenUnderWater from '../../../assets/womenUnderWater.jpg';
import fGroup from '../../../assets/fGroup.jpg';
import balloons from '../../../assets/balloons.jpg';
import { useWorksModal } from '../../providers/works';
import SwiperFreeMode from '../../components/SwiperFreeMode';

import Loons1 from '/assets/loons/loons1.jpg';
import Loons2 from '/assets/loons/loons2.jpg';
import Loons3 from '/assets/loons/loons3.jpg';

import water1 from '/assets/womenUnderWater/water1.jpg';
import water2 from '/assets/womenUnderWater/water2.jpg';
import water3 from '/assets/womenUnderWater/water3.jpg';
import water4 from '/assets/womenUnderWater/water4.jpg';

import './styles.scss';
import { hideBodyOverflow, unsetBodyOverflow } from '../../helpers';

interface DataType {
  imageSrc: string;
  categories: string[];
  title: string;
  swiperImages: string[];
}

const data: DataType[][] = [
  [
    {
      imageSrc: balloons,
      categories: ['Art', 'Creative direction', 'Portrait'],
      title: 'Loons',
      swiperImages: [Loons1, Loons2, balloons, Loons3],
    },
    {
      imageSrc: womenUnderWater,
      categories: ['Art', 'Group direction', 'Brand featuring'],
      title: 'wonder women',
      swiperImages: [water1, water2, womenUnderWater, water3, water4],
    },
  ],
  [
    {
      imageSrc: fGroup,
      categories: ['Group direction', 'Portrait', 'Creative direction'],
      title: 'Defaced',
      swiperImages: [Loons1, Loons2, balloons, Loons3],
    },
    {
      imageSrc: desertImg,
      categories: ['Art', 'Portrait', 'Creative direction'],
      title: 'Shadows',
      swiperImages: [Loons1, Loons2, balloons, Loons3],
    },
  ],
  [
    {
      imageSrc: desertImg,
      categories: ['Art', 'Brand featuring', 'Portrait', 'Group direction'],
      title: 'Shadows',
      swiperImages: [Loons1, Loons2, balloons, Loons3],
    },
    {
      imageSrc: desertImg,
      categories: ['Art', 'Brand featuring', 'Creative direction'],
      title: 'Shadows',
      swiperImages: [Loons1, Loons2, balloons, Loons3],
    },
  ],
  [
    {
      imageSrc: desertImg,
      categories: [
        'Art',
        'Brand featuring',
        'Group direction',
        'Creative direction',
      ],
      title: 'Shadows',
      swiperImages: [Loons1, Loons2, balloons, Loons3],
    },
    {
      imageSrc: desertImg,
      categories: ['Brand featuring', 'Group direction', 'Creative direction'],
      title: 'Shadows',
      swiperImages: [Loons1, Loons2, balloons, Loons3],
    },
  ],
];

const Work = () => {
  const [selectedFilter, setSelectedFilter] = useState('All work');
  const [isFilterOpen, setFilterOpen] = useState(false);
  const [filteredWorks, setFilteredWorks] = useState(data);
  const [selectedWork, setSelectedWork] = useState<DataType>(data[0][0]);

  const {
    state: { isWorksModalOpen },
    actions: { openWorksModal, closeWorksModal },
  } = useWorksModal();

  useEffect(() => {
    const getFilteredWork = () => {
      if (selectedFilter === 'All work') {
        setFilteredWorks(data);
        return;
      }

      const filteredData: DataType[][] = [];

      data.forEach((batch) => {
        batch.forEach((work) => {
          if (work.categories.includes(selectedFilter)) {
            if (
              filteredData.length &&
              filteredData[filteredData.length - 1].length < 2
            ) {
              filteredData[filteredData.length - 1].push(work);
            } else {
              filteredData.push([work]);
            }
          }
        });
      });
      setFilteredWorks(filteredData);
    };

    getFilteredWork();
  }, [selectedFilter]);

  const allOptions = [
    'Art',
    'Brand featuring',
    'Group direction',
    'Portrait',
    'Creative direction',
  ];

  const handleWorksClick = (work: DataType) => {
    hideBodyOverflow();
    setSelectedWork(work);
    openWorksModal();
  };

  const handleCloseModal = () => {
    unsetBodyOverflow();
    closeWorksModal();
  };

  return (
    <>
      <motion.div
        exit={{ translateX: 500 }}
        transition={{ duration: 400 }}
        className="std-container"
        onClick={() => {
          if (isFilterOpen) setFilterOpen(false);
        }}
        style={{ backgroundColor: '#f0f0f0' }}
      >
        <Header
          contents={['WORK']}
          customContainerStyles={{
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
            <div className="selected-filter-container-inner">
              <span className="work-category">
                <span className="hvr-underln-anim">{selectedFilter}</span>
              </span>
              <span className="work-plus">+</span>
            </div>
            <div
              className="filter-list"
              style={!isFilterOpen ? { display: 'none' } : {}}
            >
              <>
                <div
                  className="filter-option"
                  onClick={() => setSelectedFilter('All work')}
                >
                  All work
                </div>
                {allOptions.map((option, i) => {
                  return (
                    <div
                      className="filter-option"
                      onClick={() => setSelectedFilter(option)}
                      key={i}
                    >
                      {option}
                    </div>
                  );
                })}
              </>
            </div>
          </div>
        </div>

        {filteredWorks.map((batch, i) => {
          return (
            <Fragment key={i}>
              <motion.div
                className="hori-separator"
                initial={{
                  width: 0,
                }}
                animate={{
                  transformOrigin: 'center center',
                  width: '100%',
                  transition: {
                    duration: 0.8,
                  },
                }}
              ></motion.div>
              <div className="works-grid-container">
                {batch.map((workSrc, index) => {
                  const batchClassName =
                    index % 2 === 0 ? 'work-first-grid' : 'work-second-grid';

                  return (
                    <div
                      className={`works-image-container ${batchClassName}`}
                      key={index}
                    >
                      {/* <img
                      src={workSrc.imageSrc}
                      alt={`${workSrc.imageSrc}-img`}
                      className="works-grid-image"
                    /> */}
                      <div style={{ overflow: 'hidden' }}>
                        <motion.div
                          className="works-grid-image"
                          style={{
                            backgroundImage: `url(${workSrc.imageSrc})`,
                          }}
                          initial={{ scale: 1.2, rotate: '10deg' }}
                          animate={{
                            scale: 1,
                            rotate: '0deg',
                            transition: { duration: 0.8 },
                          }}
                          onClick={() => handleWorksClick(workSrc)}
                        />
                      </div>
                      <div className="categories">
                        {workSrc.categories.map((category, i) => (
                          <span className="category" key={i}>
                            {category}{' '}
                            {workSrc.categories.length - 1 !== i && (
                              <span className="center-dot">.</span>
                            )}
                          </span>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </Fragment>
          );
        })}
      </motion.div>
      <ContactForm
        isModalOpen={isWorksModalOpen}
        handleCloseModal={handleCloseModal}
        title={selectedWork.title}
        isDark
        isGridView={false}
      >
        <section style={{ padding: '10vh 0' }}>
          <SwiperFreeMode slideImages={selectedWork.swiperImages} />
        </section>
      </ContactForm>
    </>
  );
};

// Works color = --white-background-primary
const pageWithNav = withNavBar(Work, '#f0f0f0');
const pageWithFooter = withFooter(pageWithNav, {
  nextPageLabel: 'About',
  nextPageLink: '/about',
});

export default withLoadingScreen(pageWithFooter);
