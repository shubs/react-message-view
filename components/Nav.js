import React from 'react';
import { NavLink } from 'fluxible-router';
import mui from 'material-ui';

const ThemeManager = new mui.Styles.ThemeManager();
const AppBar = mui.AppBar;

class Nav extends React.Component {
    static childContextTypes = {
        muiTheme: React.PropTypes.object
    }
    getChildContext(){
        return({
            muiTheme: ThemeManager.getCurrentTheme()
        })
    }
    render() {
        const selected = this.props.selected;
        const links = this.props.links;

        const linkHTML = Object.keys(links).map((name) => {
            var className = '';
            var link = links[name];

            if (selected === name) {
                className = 'pure-menu-selected';
            }

            return (
                <li className={className} key={link.path}>
                    <NavLink routeName={link.page} activeStyle={{backgroundColor: '#eee'}}>{link.title}</NavLink>
                </li>
            );
        });

        return (

            <div>
            <ul className="pure-menu pure-menu-open pure-menu-horizontal">
                {linkHTML}
            </ul>
            <AppBar
                title="My cool stuff"
                iconClassNameRight="muidocs-icon-navigation-expand-more" />

            </div>
        );
    }
}

Nav.defaultProps = {
    selected: 'home',
    links: {}
};

export default Nav;
