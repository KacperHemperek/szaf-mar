import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";

import GalleryPage from "./pages/gallerypage/gallerypage.component";
import HomePage from "./pages/homepage/homepage.component";
import Footer from "./components/footer/footer.component";
import Header from "./components/header/header.component";

import { getPhotos } from "./redux/photos/photos.actions";
import { connect } from "react-redux";

const importAll = (r) => {
  return r.keys().map(r);
};

class App extends Component {
  loadPhotos = async () => {
    const { getPhotos } = this.props;

    const kitchenPhotos = importAll(
      require.context("./assets/img/kuchnie", false, /\.(png|jpe?g|svg)$/)
    );
    const officePhotos = importAll(
      require.context("./assets/img/biura", false, /\.(png|jpe?g|svg)$/)
    );
    const wardrobePhotos = importAll(
      require.context("./assets/img/szafy", false, /\.(png|jpe?g|svg)$/)
    );
    const bathroomPhotos = importAll(
      require.context("./assets/img/lazienki", false, /\.(png|jpe?g|svg)$/)
    );

    getPhotos({
      kuchnie: kitchenPhotos,
      biura: officePhotos,
      szafy: wardrobePhotos,
      lazienki: bathroomPhotos,
    });
  };

  componentDidMount() {
    this.loadPhotos();
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route
            path="/kuchnie"
            component={() => <GalleryPage key={window.location.pathname} />}
          />
          <Route
            path="/szafy"
            component={() => <GalleryPage key={window.location.pathname} />}
          />
          <Route
            path="/biura"
            component={() => <GalleryPage key={window.location.pathname} />}
          />
          <Route
            path="/lazienki"
            component={() => <GalleryPage key={window.location.pathname} />}
          />
        </Switch>
        <Footer />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getPhotos: (photos) => dispatch(getPhotos(photos)),
});

const mapStateToProps = (state) => ({
  ...state.photos,
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
