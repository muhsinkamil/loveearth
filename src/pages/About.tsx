import { motion } from 'framer-motion';
import { Header } from '../components';
import AboutScroll from '../components/AboutScroll';
import officeImg from '../../assets/officeHappy.jpg';

import './about.styles.scss';

import withFooter from '../hoc/footerHOC';
import withNavBar from '../hoc/NavHOC';
import withLoadingScreen from '../hoc/pageTransition';

const About = () => {
  // const [bgColor, setBgColor] = useState('#bcbcb4');

  // useEffect(() => {
  //   const trackScrollToBg = () => {
  //     if (window.scrollY > 1800) {
  //       setBgColor('#f0f0f0');
  //       return;
  //     }

  //     setBgColor('#bcbcb4');
  //   };

  //   window.addEventListener('scroll', trackScrollToBg);

  //   return () => window.removeEventListener('scroll', trackScrollToBg);
  // }, []);

  return (
    <div className="std-container" style={{ backgroundColor: '#f0f0f0' }}>
      <Header
        contents={[
          'CAPTURING',
          'THE',
          'RIGHT',
          'MOMENTS',
          'IS',
          'ALL',
          'WHAT',
          'WE',
          'DO',
        ]}
        customContainerStyles={{
          margin: '0 5px',
          paddingTop: '7vw',
          fontSize: '6vw',
          lineHeight: '5vw',
          paddingBottom: '5vw',
        }}
        // @TODO: check styles
        // customStyles={{ fontSize: "6.5vw" }}
      />

      <section className="header-img">
        <motion.img
          src={officeImg}
          alt={officeImg}
          className="office-img"
          initial={{
            scale: 1.5,
            rotate: '5deg',
          }}
          animate={{
            scale: 1,
            rotate: '0deg',
          }}
          transition={{
            duration: 0.8,
            ease: 'easeInOut',
          }}
        />
      </section>

      <AboutScroll />
    </div>
  );
};

// About background: background-primary
const pageWithNav = withNavBar(About, '#f0f0f0');
const pageWithFooter = withFooter(pageWithNav, {
  nextPageLabel: 'work',
  nextPageLink: '/work',
});

export default withLoadingScreen(pageWithFooter);
