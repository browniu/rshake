import React, { Component } from "react";
//-----------------------------------------

class Rshake extends Component {
  constructor(props) {
    super(props);
    this.type = () => {
      let types = [
        "little",
        "hard",
        "slow",
        "horizontal",
        "vertical",
        "rotate",
        "opacity",
        "crazy",
        "chunk",
        "normal"
      ];
      return types.indexOf(props.type) >= 0 ? props.type : "little";
    };
    import("./rshake-" + this.type() + ".css");
  }

  childRender() {
    const { children } = this.props;
    return children ? children : "hello rshake";
  }

  render() {
    const children = this.childRender();
    let style = {
      display: "inherit",
      transformOrigin: "center center",
      animationDuration: this.props.rate ? this.props.rate + "ms" : ""
    };
    return (
      <div
        className={[
          "Rshake shake-",
          this.type(),
          this.props.hover ? "" : " rshake-hover"
        ].join("")}
        style={style}
      >
        {children}
      </div>
    );
  }
}

export default Rshake;

//-----------------------------------------
//--create❤️ Browniu--
//--190525--
