import React, { Component } from "react";
import windowSize from "react-window-size";
import Aux from "../../../../../../hoc/_Aux";
import DEMO from "../../../../../../store/constant";

class NavSearch extends Component {
  state = {
    isSearch: false,
  };

  render() {
    const searchSyle = this.state.isSearch ? "block" : "none";
    return (
      <Aux>
        <a
          href={DEMO.BLANK_LINK}
          className="pop-search"
          onClick={() =>
            this.setState((prevState) => {
              return { isSearch: !prevState.isSearch };
            })
          }
        >
          <i className="feather icon-search" />
        </a>
        <div className="search-bar" style={{ display: searchSyle }}>
          <input
            type="text"
            className="form-control border-0 shadow-none"
            placeholder="Search hear"
          />
          <button
            type="button"
            className="close"
            aria-label="Close"
            onClick={() =>
              this.setState((prevState) => {
                return { isSearch: !prevState.isSearch };
              })
            }
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
      </Aux>
    );
  }
}

export default windowSize(NavSearch);
