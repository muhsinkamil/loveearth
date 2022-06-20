import './horizontalAbout.styles.scss';
import SmoothScroll from '../../components/SmoothScroll';
import { Header, Navbar } from '../../components';
import withLoadingScreen from '../../hoc/pageTransition';

const HorizontalAbout = () => {
  const aboutSection = (
    <>
      <SmoothScroll>
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
            width: '50vw',
          }}
          // @TODO: check styles
          // customStyles={{ fontSize: "6.5vw" }}
        />
      </SmoothScroll>
    </>
  );

  return (
    <>
      <Navbar
        leftLogo="LightHouse"
        rightItems={[
          { item: 'WORK', navigateTo: '/work' },
          { item: 'ABOUT', navigateTo: '/about' },
          { item: 'CONTACT' },
        ]}
        bg={'#f0f0f0'}
      />
      <div
        style={{
          backgroundColor: '#f0f0f0',
        }}
      >
        {aboutSection}
      </div>
    </>
  );
};

export default withLoadingScreen(HorizontalAbout);
