import React from "react";
import { LoadingScreen } from "../components";

const withLoadingScreen = (WrappedComponent: any) => {
  return class Wrapper extends React.Component {
    state = { pageLoading: true };

    componentDidMount() {
      setTimeout(() => {
        this.setState({ pageLoading: false });
      }, 1000);
    }

    render() {
      return (
        <>
          {this.state.pageLoading ? (
            <LoadingScreen />
          ) : (
            <WrappedComponent {...this.props} />
          )}
        </>
      );
    }
  };
};

export default withLoadingScreen;
