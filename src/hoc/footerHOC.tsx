import React from 'react';
import Footer from '../components/Footer';

const withFooter = (
  WrappedComponent: any,
  nextPageProps: { nextPageLabel: string; nextPageLink: string },
) => {
  return class Wrapper extends React.Component {
    render() {
      return (
        <>
          <WrappedComponent {...this.props} />
          <Footer nextPageProps={nextPageProps} />
        </>
      );
    }
  };
};

export default withFooter;
