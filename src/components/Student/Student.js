import React from 'react';

class Student extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            studentInfo: {}
        }
    }

    componentDidMount() {
        const axios = require('axios');
        var {id} = this.props.match.params;
        axios.get('http://localhost:3005/students/' + id)
            .then(response => {
                this.setState({
                    studentInfo: response.data
                })
            })
            .catch(error => {
                console.log(error);
            })
            .then(() => {

            });
    }

    render() {
        return(
            <div className="student">
                <h1>Student: </h1>
                <h1>{this.state.studentInfo.first_name} {this.state.studentInfo.last_name}</h1>
                <h3>Grade: {this.state.studentInfo.grade}</h3>
                <h3>Email: {this.state.studentInfo.email}</h3>
            </div>
        );
    }
}

export default Student;