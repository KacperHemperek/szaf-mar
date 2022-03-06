import React, { Component } from "react";
import { connect } from "react-redux";

import "./gallerypage.styles.scss";

class GalleryPage extends Component {
  render() {
    return (
      <div className="gallery-page">
        {/* {images.map((img, idx) => {
          return (
            <div className="img" key={idx}>
              <img src={img} />
            </div>
          );
        })} */}
      </div>
    );
  }
}

const mapStateToPtops = (state) => ({
  photos: state.photos.galleryPhotos,
});

export default connect(mapStateToPtops)(GalleryPage);
