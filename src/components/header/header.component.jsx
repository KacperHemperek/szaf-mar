import React, { Component } from "react";
import "./header.styles.scss";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navShown: false,
    };
  }

  handleNavbar = () => {
    this.setState((prevState) => ({ navShown: !prevState.navShown }));
  };

  // componentDidUpdate() {
  //   this.setState({ navShown: false });
  // }

  render() {
    return (
      <nav className="main-nav">
        <Link to="" className="logo">
          Szaf-Mar
        </Link>
        <button className="hamburger" onClick={this.handleNavbar}>
          <i className="fa fa-bars"></i>
        </button>
        <ul id="nav-ul" className={this.state.navShown ? "show" : null}>
          <li>
            <Link to="/kuchnie">
              <div className="nav-option">Kuchnie</div>
            </Link>
          </li>
          <li>
            <Link to="/szafy">
              <div className="nav-option">Szafy</div>
            </Link>
          </li>
          <li>
            <Link to="/biura">
              <div className="nav-option">Biura</div>
            </Link>
          </li>
          <li>
            <Link to="/lazienki">
              <div className="nav-option">Łazienki</div>
            </Link>
          </li>
          <li>
            <a href="tel:+48604069052" className="nav-option">
              604 069 052
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/Szaf-Mar-572231386210625"
              target="blank"
            >
              facebook
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Header;
