import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";

import GalleryPage from "./pages/gallerypage/gallerypage.component";
import HomePage from "./pages/homepage/homepage.component";
import Footer from "./components/footer/footer.component";
import { getPhotos } from "./redux/photos/photos.actions";
import { connect } from "react-redux";

const importAll = (r) => {
  return r.keys().map(r);
};

class App extends Component {
  componentDidMount() {
    const kitchenPhotos = importAll(
      require.context("../public/img/kuchnie", false, /\.(png|jpe?g|svg)$/)
    );
    const officePhotos = importAll(
      require.context("../public/img/biura", false, /\.(png|jpe?g|svg)$/)
    );
    const wardrobePhotos = importAll(
      require.context("../public/img/szafy", false, /\.(png|jpe?g|svg)$/)
    );
    const bathroomPhotos = importAll(
      require.context("../public/img/lazienki", false, /\.(png|jpe?g|svg)$/)
    );
    const photos = {
      kuchnie: kitchenPhotos,
      biura: officePhotos,
      szafy: wardrobePhotos,
      lazienki: bathroomPhotos,
    };

    getPhotos(photos);

    console.log(this.props.kuchnie);
  }

  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/kuchnie" component={GalleryPage} />
          <Route path="/szafy" component={GalleryPage} />
          <Route path="/biura" component={GalleryPage} />
          <Route path="/lazienki" component={GalleryPage} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getPhotos: (photos) => dispatch(getPhotos(photos)),
});

const mapStateToPtops = (state) => ({
  ...setTimeout.photos,
});

export default connect(mapStateToPtops, mapDispatchToProps)(App);