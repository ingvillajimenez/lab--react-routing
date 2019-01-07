import React from 'react';

import {Link} from 'react-router-dom';

class Home extends React.Component {
    render() {
        return(
            <ul className="home">
                <li><Link to="/classlist/MATH1010">Math 1010</Link></li>
                <li><Link to="/classlist/ENG2010">English 2010</Link></li>
                <li><Link to="/classlist/BIO2020">Biology 2020</Link></li>
            </ul>
        );
    }
}

export default Home;