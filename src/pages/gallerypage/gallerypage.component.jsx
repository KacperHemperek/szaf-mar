import React, { Component } from "react";
import { connect } from "react-redux";

import "./gallerypage.styles.scss";

class GalleryPage extends Component {
  render() {
    
    console.log(this.props.photos)
    return (
      <div className="gallery-page">
        {this.props.photos.map((img, idx) => {
          return (
            <div className="img" key={idx}>
              <a href={img}><img src={img} /></a>
            </div>
          );
        })}
      </div>
    );
  }
}

const mapStateToPtops = (state) => {
  const path = window.location.pathname.replace('/', "");
  console.log(path);
  return {photos: state.photos[path]};
};

export default connect(mapStateToPtops)(GalleryPage);
