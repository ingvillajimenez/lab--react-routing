import React from 'react';

import {Link} from 'react-router-dom';

class ClassList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            students: []
        }
    }

    componentDidMount() {
        const axios = require('axios');
        var classList = this.props.match.params.class;
        axios.get('http://localhost:3005/students?class=' + classList)
            .then(response => {
                this.setState({
                    students: response.data
                });
            })
            .catch(error => {
                console.log(error);
            })
            .then(() => {

            });

    }

    render() {
        return(
            <div className="classlist">
                <h1>{this.props.match.params.class}</h1>
                <h2>ClassList:</h2>
                {this.state.students.map(student => <Link key={student.id} to={"/student/" + student.id}><h3>{student.first_name} {student.last_name}</h3></Link>)}
            </div>
        );
    }
}

export default ClassList;