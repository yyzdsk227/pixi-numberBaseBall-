import React, { Component } from "react";
import PropTypes from "prop-types";
import { withApp } from "react-pixi-fiber";
import Bunny from "./bunny";
import { stateContext } from "./stateContext";

// http://pixijs.io/examples/#/basics/basic.js
class RotatingBunny extends Component {
  static contextType = stateContext;

  componentDidMount() {
    this.props.app.ticker.add(this.animate);
  }

  componentWillUnmount() {
    this.props.app.ticker.remove(this.animate);
  }

  animate = (delta) => {
    // just for fun, let's rotate mr rabbit a little
    // delta is 1 if running at 100% performance
    // creates frame-independent tranformation
    this.setState((state) => ({
      ...state,
      rotation: this.context.rotation + this.props.step * delta,
      locat:
        this.props.name !== "cool"
          ? this.context.locat + this.props.speed * delta
          : this.props.x,
    }));
  };

  render() {
    console.log(this.context);
    const { step, ...props } = this.props;
    console.log(this.props.onClick);
    return (
      <Bunny {...props} x={this.context.locat} rotation={this.state.rotation} />
    );
  }
}

RotatingBunny.defaultProps = {
  step: 0,
  speed: 0,
};

export default withApp(RotatingBunny);
