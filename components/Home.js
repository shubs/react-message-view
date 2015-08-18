import React from 'react';
import mui from 'material-ui';

const ThemeManager = new mui.Styles.ThemeManager();
const RaisedButton = mui.RaisedButton;

class Home extends React.Component {
	static childContextTypes = {
		muiTheme: React.PropTypes.object
	}
	getChildContext(){
		return({
			muiTheme: ThemeManager.getCurrentTheme()
		})
	}
    render() {
        return (
            <div>
                <h2>Home</h2>
                <p>Welcome to the site!</p>
        		<RaisedButton label="Desfault" />
            </div>
        );
    }
}

export default Home;


