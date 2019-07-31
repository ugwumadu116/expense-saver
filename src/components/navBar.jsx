import React, { Component } from 'react';

class NavBar extends Component {
    checkValues = () => {
        let value = 0
        this.props.counters.forEach(counter => {
            if (counter.value) {
                value++
            }
        })
        return value
    }

    render() {
        return (
            <nav className="navbar navbar-expand-sm bg-primary">
                <span className="navbar-brand">Navbar</span>
                <span className="navbar-brand btn-info m-3 p-3 rounded-circle">{this.checkValues()}</span>
            </nav>
        );
    }
}

export default NavBar;