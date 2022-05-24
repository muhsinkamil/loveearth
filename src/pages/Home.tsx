import { motion, useTransform, useViewportScroll } from 'framer-motion';
import { Accordion, Header } from '../components';
import withLoadingScreen from '../hoc/pageTransition';
import Button from '../components/Button';
import portfolio from '../../assets/portfolio.mp4';

import '../styles/reusableStyles.scss';
import './home.styles.scss';
import withFooter from '../hoc/footerHOC';
import withNavBar from '../hoc/NavHOC';
import { brandsWorked } from '../translations/brandsWorked';
import { useContactForm } from '../providers/contact';

const Home = () => {
  const { scrollY, scrollYProgress } = useViewportScroll();

  const width = useTransform(
    scrollYProgress,
    [0, 0.8],
    [400, window.innerWidth + window.innerWidth / 1.75],
  );

  return (
    <>
      <motion.div
        exit={{ translateX: 500 }}
        transition={{ duration: 400 }}
        className="std-container"
      >
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
            margin: '5px',
            paddingTop: '14vw',
            fontSize: '6vw',
            lineHeight: '5vw',
          }}
          // @TODO: check styles
          // customStyles={{ fontSize: "6.5vw" }}
        />

        <section className="about-section-container">
          <div className="about-left-section">
            <Header
              contents={['About']}
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
              We're a small team of curious humans who create work we’re proud
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
    </>
  );
};

const pageWithNav = withNavBar(Home);
const pageWithFooter = withFooter(pageWithNav, {
  nextPageLabel: 'About',
  nextPageLink: '/about',
});

export default withLoadingScreen(pageWithFooter);
