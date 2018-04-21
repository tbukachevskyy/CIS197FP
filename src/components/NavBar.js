import React, { Component} from 'react';
import { Link } from 'react-router-dom';

class NavBar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <nav className="navbar navbar-expand-sm navbar-light bg-light">
                <a className="navbar-brand" href="#">Deals on Meals</a>
                <div>
                    <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">
                        Find Next Meal
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/create">
                        Create Event
                        </Link>
                    </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

module.exports = NavBar;