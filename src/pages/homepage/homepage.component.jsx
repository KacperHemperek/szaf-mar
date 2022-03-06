import React, { Component } from "react";

import MenuItem from "../../components/menu-item/menu-item.component";

import "./homepage.styles.scss";

class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [
        {
          id: 1,
          url: "kuchnie",
          title: "Kuchnie",
        },
        {
          id: 2,
          url: "szafy",
          title: "Szafy",
        },
        {
          id: 3,
          url: "biura",
          title: "Biura",
        },
        {
          id: 4,
          url: "lazienki",
          title: "Łazienki",
        },
      ],
    };
  }

  render() {
    return (
      <div className="home-page">
        {this.state.items.map(({ id, url, title }) => {
          return <MenuItem key={id} url={url} title={title} />;
        })}
      </div>
    );
  }
}

export default HomePage;
