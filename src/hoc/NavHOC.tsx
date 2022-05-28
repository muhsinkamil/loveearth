import React from 'react';
import { Navbar } from '../components';

const withNavBar = (WrappedComponent: any, bg: string) => {
  return class Wrapper extends React.Component {
    render() {
      return (
        <>
          <Navbar
            leftLogo="LightHouse"
            rightItems={[
              { item: 'WORK', navigateTo: '/work' },
              { item: 'ABOUT', navigateTo: '/about' },
              { item: 'CONTACT' },
            ]}
            bg={bg}
          />
          <WrappedComponent {...this.props} />
        </>
      );
    }
  };
};

export default withNavBar;
