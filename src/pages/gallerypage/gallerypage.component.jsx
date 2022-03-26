import React, { Component } from "react";
import { connect } from "react-redux";
import { trackWindowScroll } from "react-lazy-load-image-component";

import Image from "../../components/image/image.component";
import Slider from "../../components/slider/slider.component";

import "./gallerypage.styles.scss";

class GalleryPage extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const { photos, isOpen } = this.props;

    return (
      <div className="gallery-page">
        {isOpen ? <Slider images={photos} /> : null}
        {photos.map((img, idx) => {
          return (
            <Image
              img={img}
              idx={idx}
              key={idx}
              scrollPosiotion={this.props.scrollPosition}
            />
          );
        })}
      </div>
    );
  }
}

const mapStateToPtops = (state) => {
  const path = window.location.pathname.replace("/", "").split("/")[0];
  return { photos: state.photos[path], isOpen: state.slider.open };
};

export default connect(mapStateToPtops)(trackWindowScroll(GalleryPage));
