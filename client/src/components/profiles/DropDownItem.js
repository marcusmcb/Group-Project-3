import React, { Component } from 'react';
import PropTypes from 'prop-types';

class DropDownItem extends Component {
  render() {
    const { profile } = this.props;

    return (
        <button className="dropdown-item" type="button">{profile}</button>
    );
  }
}

DropDownItem.propTypes = {
  profile: PropTypes.object.isRequired
};

export default DropDownItem;
