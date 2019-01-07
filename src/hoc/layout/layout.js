import React, {Component} from 'react';

// css
import './layout.css'
import Header from "../../components/header/header";

class Layout extends Component{
    state = {
        show_nav: false
    };
    toggleSideNav(action) {
        this.setState({
            show_nav: action
        })
    }
    render() {
        return(
            <div>
                <Header
                    showNav={this.state.show_nav}
                    onHideNav={()=> this.toggleSideNav(false)}
                    onOpenNav={() => this.toggleSideNav(true)}
                />
                <div>{this.props.children}</div>
                <div>Footer</div>
            </div>
        )
    }
}

export default Layout