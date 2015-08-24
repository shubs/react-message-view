import React, { PropTypes, Component } from "react";

import {List, ListItem, Avatar, ListDivider, ActionInfo} from "material-ui";

class ConversationList extends Component {

  render() {

    return (
      <div className="ConversationList">
          <List subheader="Your conversations">
              <ListItem
                leftAvatar={<Avatar src="http://material-ui.com/images/raquelromanp-128.jpg" />}
                primaryText="Brendan Lim"
                secondaryText={
                  <p>
                    12 Mai 2015<br/>
                    lorem ips weh should tomatillo get this fuck out in the fact to make this happen
                  </p>
                }
                secondaryTextLines={2}
              />

            <ListDivider inset={true} />
            <ListItem
              leftAvatar={<Avatar src="http://material-ui.com/images/kolage-128.jpg" />}
              primaryText="Jennifer"
              rightIcon={<ActionInfo />}
              secondaryText={
                <p>
                  1 Avril 2015<br/>
                  Wish I could come, but I&apos;m out of town this weekend.
                </p>
              }
              secondaryTextLines={2} />
            <ListDivider inset={true} />
            <ListItem
              leftAvatar={<Avatar src="http://material-ui.com/images/uxceo-128.jpg" />}
              primaryText="Grace Ng"
              secondaryText={
                <p>
                  9 Fevrier<br/>
                  Do you have any Paris recs? Have you ever been?
                </p>
              }
              secondaryTextLines={2} />
            <ListDivider inset={true} />
            <ListItem
              leftAvatar={<Avatar src="http://material-ui.com/images/kerem-128.jpg" />}
              primaryText="Kerem Suer"
              secondaryText={
                <p>
                  19 Decembre 2014<br/>
                  Do you have any ideas what we can get Heidi for her birthday? How about a pony?
                </p>
              }
              secondaryTextLines={2} />
            <ListDivider inset={true} />
            <ListItem
              leftAvatar={<Avatar src="http://material-ui.com/images/raquelromanp-128.jpg" />}
              primaryText="Raquel Parrado"
              secondaryText={
                <p>
                  7 Septembre 2014<br/>
                  We should eat this: grated squash. Corn and tomatillo tacos.
                </p>
              }
              secondaryTextLines={2} />
            </List>
      </div>
    );
  }

}

export default ConversationList;
