import React, { Component } from "react";
import { FormattedMessage }  from "../utils/IntlComponents";

class HomePage extends Component {

  render() {
    return (
      <div>
      	<h1>
        	<FormattedMessage message="home.welcome" />
        </h1>
        <img src="https://images.unsplash.com/photo-1425315283416-2acc50323ee6?fit=crop&amp;fm=jpg&amp;h=700&amp;q=80&amp;w=960"/>
      </div>
    );
  }

}

export default HomePage;
