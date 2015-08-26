import React, { PropTypes, Component } from "react";

import { NavLink } from "fluxible-router";

import {Paper,List, ListItem, Avatar, ListDivider, ActionInfo} from "material-ui";
let injectTapEventPlugin = require("react-tap-event-plugin");

//Needed for onTouchTap
//Can go away when react 1.0 release
//Check this repo:
//https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();


class ConversationItem extends Component {

  render() {
  	
    return (
		<div className="ConversationItem"> 
			<Paper 
			zDepth={1}><NavLink className="ConversationItem-Link" routeName="conversation" navParams={{id: '3'}}>
			
				<ListItem
                leftAvatar={<Avatar src={this.props.avatar} />}
                primaryText={this.props.name}
                secondaryText={
                  <p>
                    {this.props.date}<br/>
                    {this.props.text}
                    </p>
                }
                secondaryTextLines={2}
              /></NavLink>

            <ListDivider inset={true} />

			</Paper>
			
			<br/>
			
		</div>
    );
  }

}

export default ConversationItem;
