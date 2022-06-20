import { motion } from 'framer-motion';
import { Accordion, Header } from '../components';
import AboutScroll from '../components/AboutScroll';
import officeImg from '../../assets/officeHappy.jpg';

import './about.styles.scss';

import withFooter from '../hoc/footerHOC';
import withNavBar from '../hoc/NavHOC';
import withLoadingScreen from '../hoc/pageTransition';
import Person1 from '../../assets/teams/person-1.jpg';
import Person2 from '../../assets/teams/person-2.jpg';
import Person3 from '../../assets/teams/person-3.jpg';
import Person4 from '../../assets/teams/person-4.jpg';
import Person6 from '../../assets/teams/person-6.jpg';
import Person7 from '../../assets/teams/person-7.jpg';

import aboutSwiperImg1 from '../../assets/aboutSwiper/aboutSwiper1.webp';
import aboutSwiperImg2 from '../../assets/aboutSwiper/aboutSwiper2.webp';
import aboutSwiperImg3 from '../../assets/aboutSwiper/aboutSwiper3.webp';
import aboutSwiperImg4 from '../../assets/aboutSwiper/aboutSwiper4.webp';
import aboutSwiperImg5 from '../../assets/aboutSwiper/aboutSwiper5.webp';
import aboutSwiperImg6 from '../../assets/aboutSwiper/aboutSwiper6.webp';
import aboutSwiperImg7 from '../../assets/aboutSwiper/aboutSwiper7.webp';

import TeamMember from '../components/TeamMember';
import { jobHirings } from '../translations/brandsWorked';
import SwiperFreeMode from '../components/SwiperFreeMode';

const swiperImages = [
  aboutSwiperImg1,
  aboutSwiperImg2,
  aboutSwiperImg3,
  aboutSwiperImg4,
  aboutSwiperImg5,
  aboutSwiperImg6,
  aboutSwiperImg7,
];

const teamMembersPics = [
  {
    memberImg: Person1,
    memberName: 'Jos Butler',
  },
  {
    memberImg: Person2,
    memberName: 'Simona Halep',
  },
  {
    memberImg: Person4,
    memberName: 'Monica',
  },
  {
    memberImg: Person3,
    memberName: 'Richard Ugo',
  },
  {
    memberImg: Person6,
    memberName: 'Christina',
  },
  {
    memberImg: Person7,
    memberName: 'Gabriel Silverio',
  },
];

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
          lineHeight: '6vw',
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

      <section className="about-scroll">
        <AboutScroll />
      </section>

      <section className="team-section">
        <h2 className="team-heading">Team</h2>

        <div className="team-img-container">
          {teamMembersPics.map((teamMember) => (
            <TeamMember
              imageSrc={teamMember.memberImg}
              key={teamMember.memberImg}
              memberName={teamMember.memberName}
            />
          ))}
        </div>
      </section>

      <section className="hiring">
        <h2 className="hiring-heading">
          <span className="hvr-underln-anim">Come join our team</span>
        </h2>
        <Accordion accContent={jobHirings} />
      </section>

      <section className="about-team-swipe">
        <SwiperFreeMode slideImages={swiperImages} />
      </section>
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
