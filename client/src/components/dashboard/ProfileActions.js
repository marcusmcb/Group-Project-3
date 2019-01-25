import React from 'react';
import { Link } from 'react-router-dom';

const ProfileActions = () => {
  return (
    <div className="row">
      <div className="col-lg-6 mb-2">
        <Link to="/edit-profile" className="btn btn-outline-dark btn-block">
          <i className="fas fa-user-circle text-info mr-1" /> Edit Profile
      </Link>
      </div>
      <div className="col-lg-6 mb-2">
        <Link to="/add-experience" className="btn btn-outline-dark btn-block">
          <i className="fab fa-black-tie text-info mr-1" />
          Add Experience
      </Link>
      </div>

    </div>
  );
};

export default ProfileActions;
