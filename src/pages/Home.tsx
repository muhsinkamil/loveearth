import { motion, useTransform, useViewportScroll } from 'framer-motion';
import { Accordion, Header, Works, Button } from '../components';
import withLoadingScreen from '../hoc/pageTransition';

import withFooter from '../hoc/footerHOC';
import withNavBar from '../hoc/NavHOC';
import { brandsWorked } from '../translations/brandsWorked';

import portfolio from '../../assets/portfolio.mp4';
import '../styles/reusableStyles.scss';
import './home.styles.scss';
import SwiperFreeMode from '../components/SwiperFreeMode';

import swiperImg1 from '../../assets/homeSwiper/swiperSlide1.webp';
import swiperImg2 from '../../assets/homeSwiper/swiperSlide2.webp';
import swiperImg3 from '../../assets/homeSwiper/swiperSlide3.webp';
import swiperImg4 from '../../assets/homeSwiper/swiperSlide4.webp';
import swiperImg5 from '../../assets/homeSwiper/swiperSlide5.webp';
import swiperImg6 from '../../assets/homeSwiper/swiperSlide6.webp';
import swiperImg7 from '../../assets/homeSwiper/swiperSlide7.webp';

const swiperImages = [
  swiperImg1,
  swiperImg2,
  swiperImg3,
  swiperImg4,
  swiperImg5,
  swiperImg6,
  swiperImg7,
];

const Home = () => {
  const { scrollY, scrollYProgress } = useViewportScroll();

  const width = useTransform(
    scrollYProgress,
    [0, 0.8],
    [window.innerWidth / 2, window.innerWidth],
  );

  return (
    <div style={{ backgroundColor: '#f0f0f0' }}>
      <motion.div
        exit={{ translateX: 500 }}
        transition={{ duration: 400 }}
        className="std-container"
      >
        <section style={{ marginBottom: '5vh' }}>
          <Header
            contents={[
              'A',
              'DIGITAL',
              'DESIGN',
              'STUDIO',
              'DRIVEN',
              'BY',
              'RESEARCH',
              '&',
              'STRATEGY',
            ]}
            customContainerStyles={{
              margin: '0 5px',
              paddingTop: '7vw',
              fontSize: '6vw',
              lineHeight: '5vw',
            }}
            // @TODO: check styles
            // customStyles={{ fontSize: "6.5vw" }}
          />
        </section>

        <section className="works-home-section">
          <Works />
        </section>

        <section className="about-section-container">
          <div className="about-left-section">
            <Header
              contents={['ABOUT US']}
              customContainerStyles={{
                paddingTop: '6vw',
                fontSize: '4.8vw',
                lineHeight: '0.8',
                fontWeight: '400',
              }}
            />

            <div className="about-subtitle">
              <h3 className="about-sub">
                AN INTERNATIONAL DIGITAL DESIGN STUDIO
              </h3>
              <h3 className="about-sub">
                REIMAGINING HOW PEOPLE CONNECT WITH BRANDS.
              </h3>
            </div>
          </div>
          <div className="about-right-section">
            <p className="abt-r-sec-para">
              We're a small team of curious humans who create work we???re proud
              of for people and brands we believe in. With collaboration at the
              heart of every project, we identify what skills are required and
              then bring the best people together to create something truly
              extraordinary. Combining strategy, branding, web design and
              development, we build digital experiences that transform the way
              people connect and interact with brands.
            </p>
            <div className="abt-us-btn">
              <Button
                bfrContent="About us"
                aftrContent="Get to know us"
                buttonOuterWidth="125px"
              />
            </div>
          </div>
        </section>
      </motion.div>
      <div className="portfolio" style={{ overflow: 'hidden' }}>
        <motion.video loop muted autoPlay style={{ width }}>
          <source src={portfolio} type="video/mp4" />
        </motion.video>
      </div>

      <section className="collabs std-container">
        <h3 className="brands-worked">brands we've worked with</h3>

        <Accordion accContent={brandsWorked} />
      </section>

      <section className="home-team-swipe">
        <SwiperFreeMode slideImages={swiperImages} />
      </section>
    </div>
  );
};

// Home color = --white-background-primary
const pageWithNav = withNavBar(Home, '#f0f0f0');
const pageWithFooter = withFooter(pageWithNav, {
  nextPageLabel: 'About',
  nextPageLink: '/about',
});

export default withLoadingScreen(pageWithFooter);
