import React from 'react';
import Footer from '../components/Footer';

const withFooter = (WrappedComponent: any) => {
  return class Wrapper extends React.Component {
    render() {
      return (
        <>
          <WrappedComponent {...this.props} />
          <Footer />
        </>
      );
    }
  };
};

export default withFooter;
