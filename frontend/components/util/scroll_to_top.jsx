import { Component } from "react";
import { withRouter } from "react-router";

// comes from the react router documentation, with attention drawn to it by user mtl at https://stackoverflow.com/questions/36904185/react-router-scroll-to-top-on-every-transition on stack overflow
class ScrollToTop extends Component {
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0,0); 
    }
  }

  render() {
    return null; 
  }
}

export default withRouter(ScrollToTop); 