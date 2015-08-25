import React, { PropTypes, Component } from "react";

import {Paper, Card, CardHeader, CardTitle,FlatButton, CardActions, CardMedia, CardText, Avatar} from "material-ui";
let mui = require('material-ui');
let Colors = mui.Styles.Colors;
class Message extends Component {

  render() {
  	let paperStyle={};
  	let cardStyle={};

  	if (this.props.you){
    		paperStyle = {'margin':'0 0 0 30px'};
    		cardStyle = {'background-color':Colors.grey300};
	} else {
    		paperStyle = {'margin':'0 30px 0 0'};
    		cardStyle = {'background-color':'white'};
	}

    return (
		<div className="Message">
			
			<Paper 
			zDepth={1}
			style={paperStyle}>
				<Card initiallyExpanded={true}
				style={cardStyle}>
					<CardHeader
					title={this.props.from}
					subtitle={this.props.date}
					avatar={this.props.avatar}
					showExpandableButton={true}/>
					<CardText expandable={true}>
						{this.props.text}
					</CardText>
					
				</Card>

			</Paper>
			
			<br/>
			
		</div>
    );
  }

}

export default Message;
