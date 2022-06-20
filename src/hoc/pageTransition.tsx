import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { LoadingScreen, Navbar } from '../components';

const withLoadingScreen = (WrappedComponent: any) => {
  return class Wrapper extends React.Component {
    state = { pageLoading: true };

    componentDidMount() {
      setTimeout(() => {
        this.setState({ pageLoading: false });
      }, 2500);
    }

    render() {
      return (
        <AnimatePresence>
          {/* {this.state.pageLoading ? (
            <motion.div
              key="loading-screen"
              initial={{ translateY: 1000 }}
              animate={{
                translateY: 0,
                transition: { duration: 0.7, ease: 'easeInOut' },
              }}
              exit={{
                translateY: -1000,
                transition: { duration: 0.7, ease: 'easeInOut' },
              }}
            >
              <LoadingScreen />
            </motion.div>
          ) : ( */}
          <WrappedComponent {...this.props} />
          {/* )} */}
        </AnimatePresence>
      );
    }
  };
};

export default withLoadingScreen;
