import React, { Component } from "react";

import Layout from "./Layout";
import TabConfig from "./TabConfig";
import Aux from "../../../../hoc/_Aux";
import DEMO from "../../../../store/constant";

class Configuration extends Component {
  state = {
    configOpen: false,
  };

  render() {
    let configClass = ["menu-styler"];
    if (this.state.configOpen) {
      configClass = [...configClass, "open"];
    }

    return (
      <Aux>
        <div id="styleSelector" className={configClass.join(" ")}>
          <div className="style-toggler">
            <a
              href={DEMO.BLANK_LINK}
              onClick={() =>
                this.setState((prevState) => {
                  return { configOpen: !prevState.configOpen };
                })
              }
            >
              *
            </a>
          </div>
          <div className="style-block">
            <h4 className="mb-2 text-dark">
              Able Pro
              <small className="font-weight-normal">v8.0 Customizer</small>
            </h4>
            <hr />
            <div className="m-style-scroller">
              <Layout />
              <TabConfig />
            </div>
          </div>
        </div>
      </Aux>
    );
  }
}

export default Configuration;
