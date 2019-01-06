import React, {Component} from 'react';

// css
import './layout.css'

class Layout extends Component{
    state = {

    }
    render() {
        return(
            <div>
                <div>Header</div>
                <div>{this.props.children}</div>
                <div>Footer</div>
            </div>
        )
    }
}

export default Layout