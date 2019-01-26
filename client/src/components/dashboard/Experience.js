import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import { deleteExperience } from '../../actions/profileActions';
import '../../App.css';

class Experience extends Component {
  onDeleteClick(id) {
    this.props.deleteExperience(id);
  }
  onEditClick(id) {
    this.props.getCurrentExperience(id);
  }

  render() {
    const experience = this.props.experience.map(exp => (
      <tr key={exp._id}>
        <td>{exp.company}</td>
        <td>{exp.title}</td>
        <td>
          <Moment format="MM/DD/YYYY">{exp.from}</Moment> -
          {exp.to === null ? (
            ' Now'
          ) : (
            <Moment format="MM/DD/YYYY">{exp.to}</Moment>
          )}
        </td>
        
        <td>
          <button
            onClick={this.onDeleteClick.bind(this, exp._id)}
            className="btn btn-outline-danger">
          Delete</button>
        </td>
      </tr>
    ));
    
    return (
      <div className="table-responsive">
        <h4 className="mb-4 mt-4 text-center">Experience/Credentials</h4>
        <table className="table">
          <thead>
            <tr>
              <th className="th-sm">Company</th>
              <th className="th-sm">Title</th>
              <th className="th-sm">Years</th>
              <th className="th-sm"/>
            </tr>
            {experience}
          </thead>
        </table>
      </div>
    );
  }
}

Experience.propTypes = {
  deleteExperience: PropTypes.func.isRequired,
  
};

export default connect(null, { deleteExperience })(Experience);
