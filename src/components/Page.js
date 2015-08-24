import React, { Component, PropTypes } from "react";

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

let mui = require('material-ui');
let ThemeManager = new mui.Styles.ThemeManager();

import ConversationList from "../components/ConversationList";


if (process.env.BROWSER) {
  require("../style/Page.scss");
}

class Page extends Component {

  static propTypes = {
    footer: PropTypes.bool
  }

  static defaultProps = {
    footer: true
  }

  getChildContext() { 
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  }

  render() {
    const { footer } = this.props;

    return (

      <div className="Page">

        <div className="Page-header">
          <NavBar />
        </div>

        <div className="Page-body">
          

          { this.props.children }

        </div>

        { footer &&
          <div className="Page-footer">
            <Footer />
          </div> }


      </div>
    );
  }

}


Page.childContextTypes = {
  muiTheme: React.PropTypes.object
};


export default Page;
