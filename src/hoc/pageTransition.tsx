import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { LoadingScreen, Navbar } from "../components";

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
          {this.state.pageLoading ? (
            <motion.div
              key="loading-screen"
              initial={{ translateY: 1000 }}
              animate={{
                translateY: 0,
                transition: { duration: 0.7, ease: "easeInOut" },
              }}
              exit={{
                translateY: -1000,
                transition: { duration: 0.7, ease: "easeInOut" },
              }}
              style={{
                // .loading-container {
                display: "flex",
                position: "absolute",
                top: 0,
                left: 0,
                height: "100vh",
                width: "100%",
                zIndex: 100,
                backgroundColor: "black",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
              }}
            >
              <LoadingScreen />
            </motion.div>
          ) : (
            <>
              <Navbar
                leftLogo="LightHouse"
                rightItems={[
                  { item: "WORK", navigateTo: "/work" },
                  { item: "ABOUT", navigateTo: "/about" },
                  { item: "CONTACT", navigateTo: "/contact" },
                ]}
              />
              <WrappedComponent {...this.props} />
            </>
          )}
        </AnimatePresence>
      );
    }
  };
};

export default withLoadingScreen;
