import React, { Component } from "react";

import MenuItem from "../../components/menu-item/menu-item.component";

import "./homepage.styles.scss";

import kitchenThumbnail from "../../assets/img/kuchnie/IMG20210915202022.jpg";
import wardrobeThumbnail from "../../assets/img/szafy/IMG20210830143119.jpg";
import officeThumbnail from "../../assets/img/biura/IMG20211217155935.jpg";
import bathroomThumbnail from "../../assets/img/lazienki/IMG20211007152629.jpg";

class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [
        {
          id: 1,
          url: "kuchnie",
          title: "Kuchnie",
          img: kitchenThumbnail,
        },
        {
          id: 2,
          url: "szafy",
          title: "Szafy",
          img: wardrobeThumbnail,
        },
        {
          id: 3,
          url: "biura",
          title: "Biura",
          img: officeThumbnail,
        },
        {
          id: 4,
          url: "lazienki",
          title: "Łazienki",
          img: bathroomThumbnail,
        },
      ],
    };
  }

  render() {
    return (
      <div className="home-page">
        {this.state.items.map(({ id, url, title, img }) => {
          return <MenuItem key={id} url={url} title={title} img={img} />;
        })}
      </div>
    );
  }
}

export default HomePage;
