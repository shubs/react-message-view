import React, { PropTypes, Component } from "react";

import {List, ListItem, Avatar, ListDivider, ActionInfo} from "material-ui";
import Conversationitem from "../components/Conversationitem"
class ConversationList extends Component {

  render() {

    return (
      <div className="ConversationList">
          <List subheader="Your conversations">
              
            <Conversationitem
              avatar="http://material-ui.com/images/kolage-128.jpg"
              name="name"
              date="date"
              text="ish I could come, but Im o"
            />
            <Conversationitem
              avatar="http://material-ui.com/images/kolage-128.jpg"
              name="Jennifer"
              date="1 Avril 2015"
                text="Wish I could come, but Im out of town this weekend."
              
              />
            <Conversationitem
              avatar="http://material-ui.com/images/uxceo-128.jpg"
              name="Grace Ng"
              date="9 Fevrier"
                text="Do you have any Paris recs? Have you ever been?"
              
              />
            <Conversationitem
              avatar="http://material-ui.com/images/kerem-128.jpg"
              name="Kerem Suer"
              date="19 Decembre 2014"
                text="Do you have any ideas what we can get Heidi for her birthday? How about a pony?"
              
              />
            <Conversationitem
              avatar="http://material-ui.com/images/raquelromanp-128.jpg"
              name="Raquel Parrado"
              date="7 Septembre 2014"
                text="We should eat this: grated squash. Corn and tomatillo tacos."
              
              />
            </List>
      </div>
    );
  }

}

export default ConversationList;
