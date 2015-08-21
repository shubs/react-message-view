import React, { Component } from "react";
import { NavLink } from "fluxible-router";

if (process.env.BROWSER) {
  require("../style/Footer.scss");
}

class Footer extends Component {

  render() {
    return (
      <div className="Footer">
        <div className="Footer-disclaimer">
          This project has been created to show the power of the <a href="https://dev.mailjet.com"> Mailjet API</a>. The project is based on <a href="https://facebook.github.io/react/">React</a> with <a href="http://www.fluxible.io">Fluxible</a>.
        </div>
        <div>
          Here are the source of this app for the <a href="https://github.com/shubs/message_system_like_airbnb">Back-End</a> and for the <a href="https://github.com/shubs/react-message-view">Front-End</a> .
        </div>
      </div>
    );
  }

}

export default Footer;
