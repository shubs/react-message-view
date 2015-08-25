import React, { PropTypes, Component } from "react";


import Message from "../components/Message";

class Conversation extends Component {

  render() {
  	
    return (
		<div className="Conversation">
	
			<Message
				you={false}
				from="John"
				date="18:12 | Sun 27 June, 2015"
				avatar="http://material-ui.com/images/raquelromanp-128.jpg"
				text="Lorem ipsum dolor sit amet, consectetur adipiscing elit.	Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio."
			/>
			<Message
				you={true}
				from="You"
				date="09:22 | Sun 28 June, 2015"
				avatar="http://material-ui.com/images/kolage-128.jpg"
				text=" Nulla facilisi.Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio."
			/>
			<Message
				you={false}
				from="John"
				date="08:12 | Sun 30 June, 2015"
				avatar="http://material-ui.com/images/raquelromanp-128.jpg"
				text="Lorem ipsum dolor sit amet, consectetur adipiscing elit.	Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio."
			/>
			<Message
				you={true}
				from="You"
				date="19:22 | Sun 3 July, 2015"
				avatar="http://material-ui.com/images/kolage-128.jpg"
				text="Massa. Aliquam erat volutpat. Nulla facilisi.Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio."
			/>
		    <Paper
		    style={
		    	{'margin':'0 0 0 30px'}
		    }>

			<TextField
				style={{
				    width: '80%',
				    padding:'20px',
				    margin: '0 auto'
			  }}
  				hintText="Type your message here"
		        multiLine={true} />
		    <RaisedButton label="Send" />
		    </Paper>
		
		</div>
    );
  }

}

export default Conversation;
