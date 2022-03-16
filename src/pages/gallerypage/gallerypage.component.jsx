import React, { Component } from "react";
import { connect } from "react-redux";

import Image from "../../components/image/image.component";

import "./gallerypage.styles.scss";

class GalleryPage extends Component {
  render() {
    return (
      <div className="gallery-page">
        {this.props.photos.map((img, idx) => {
          return <Image img={img} key={idx} />;
        })}
      </div>
    );
  }
}

const mapStateToPtops = (state) => {
  const path = window.location.pathname.replace("/", "");
  return { photos: state.photos[path] };
};

export default connect(mapStateToPtops)(GalleryPage);
