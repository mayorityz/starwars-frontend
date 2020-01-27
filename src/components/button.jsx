import React, { Component } from "react";
import { appearances, films, allspecies } from "../config/endPoints.json";
class Button extends Component {
  state = {
    loading: true,
    longest: "",
    species: [],
    mostApp: [],
    displayResult: false
  };
  async componentDidMount() {
    let promise_ = point => {
      return new Promise((resolve, rej) => {
        fetch(point)
          .then(res => {
            return res;
          })
          .then(resJson => {
            resolve(resJson.json());
          })
          .catch(err => {
            rej();
          });
      });
    };

    let mostApp = () => {
      return new Promise((resolve, rej) => {
        fetch(appearances).then(res => {
          resolve(res.json());
        });
      });
    };

    let species = () => promise_(allspecies);
    let longestCrawl = () => promise_(films);

    const [mA, longestCrawl_, species_] = await Promise.all([
      mostApp(),
      longestCrawl(),
      species()
    ]);

    this.setState({
      loading: false,
      longest: longestCrawl_,
      species: species_,
      mostApp: mA
    });
  }

  clicked = () => {
    this.setState({
      displayResult: !this.state.displayResult
    });
  };

  ourExpectedStates = () => {
    return this.state;
  };

  render() {
    return (
      <React.Fragment>
        <div className="flex_area">
          <button
            className="call_btn"
            onClick={this.clicked}
            check={this.state}
          >
            Do It Or Not Do It. There Is No Try
          </button>
        </div>
        <div
          className="flex_content"
          style={{ display: this.state.displayResult ? "flex" : "none" }}
        >
          <div>
            <h2 style={{ color: "white" }}>
              Which Of all the starwars movies has the longest crawl?
            </h2>
            <p>{this.state.longest}</p>
          </div>
          <div>
            <h2 style={{ color: "white" }}>
              Which person appeared the most in the star wars movies?
            </h2>
            <div>
              {this.state.mostApp.map((app, i) => (
                <p key={i}>{app.who}</p>
              ))}
            </div>
          </div>
          <div>
            <h2 style={{ color: "white" }}>Which species appeared the most?</h2>
            <div>
              {this.state.species.map((x, i) => (
                <p key={i}>
                  {x.specie} ({x.appearances})
                </p>
              ))}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Button;