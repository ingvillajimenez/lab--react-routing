import React from 'react';
import History from '../History/History';
import Contact from '../Contact/Contact';

import {Link, Switch, Route} from 'react-router-dom';

class About extends React.Component {
    render() {
        return(
            <React.Fragment>
                <div className="subnavbar">
                    <Link to="/about"><h3>About</h3></Link>
                    <Link to="/about/history"><h3>History</h3></Link>
                    <Link to="/about/contact"><h3>Contact</h3></Link>
                </div>

                <Switch>
                    <Route path="/about/history" exact component={History} />
                    <Route path="/about/contact" exact component={Contact} />
                    <Route path="/about" render={() => {
                        return(
                            <div className="about">
                                <h2>About WestSide University</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            </div>
                        )
                    }} />
                </Switch>
            </React.Fragment>
        );
    }
}

export default About;