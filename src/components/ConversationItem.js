import React, { PropTypes, Component } from "react";

import {Paper,List, ListItem, Avatar, ListDivider, ActionInfo} from "material-ui";

class ConversationItem extends Component {

  render() {
  	
    return (
		<div className="ConversationItem">
			
			<Paper 
			zDepth={1}>
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
              />

            <ListDivider inset={true} />

			</Paper>
			
			<br/>
			
		</div>
    );
  }

}

export default ConversationItem;
