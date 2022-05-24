import { ContactForm, Header } from '../components';
import AboutScroll from '../components/AboutScroll';
import officeImg from '../../assets/officeHappy.jpg';

import './about.styles.scss';

import withFooter from '../hoc/footerHOC';
import withNavBar from '../hoc/NavHOC';
import withLoadingScreen from '../hoc/pageTransition';

const About = () => {
  return (
    <>
      <div className="std-container">
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
            margin: '5px',
            paddingTop: '14vw',
            fontSize: '6vw',
            lineHeight: '5vw',
          }}
          // @TODO: check styles
          // customStyles={{ fontSize: "6.5vw" }}
        />

        <section className="header-img">
          <img src={officeImg} className="office-img" />
        </section>

        <AboutScroll />
      </div>
    </>
  );
};

const pageWithNav = withNavBar(About);
const pageWithFooter = withFooter(pageWithNav, {
  nextPageLabel: 'work',
  nextPageLink: '/work',
});

export default withLoadingScreen(pageWithFooter);
