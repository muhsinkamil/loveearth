import React from 'react';
import { Navbar } from '../components';

const withNavBar = (WrappedComponent: any) => {
  return class Wrapper extends React.Component {
    render() {
      return (
        <>
          <Navbar
            leftLogo="LightHouse"
            rightItems={[
              { item: 'WORK', navigateTo: '/work' },
              { item: 'ABOUT', navigateTo: '/about' },
              { item: 'CONTACT', navigateTo: '/contact' },
            ]}
          />
          <WrappedComponent {...this.props} />
        </>
      );
    }
  };
};

export default withNavBar;
