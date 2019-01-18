import React, { Component } from 'react';
import PropTypes from 'prop-types';
import isEmpty from '../../validation/isEmpty';

class SearchProfiles extends Component {
     constructor(props) {
          super(props);
          this.state = {
               filtered: []
          }
     }

     componentWillReceiveProps(nextProps) {
          this.setState({
               filtered: nextProps.items
          })
     }


  render() {
    return (
      <div>
        
      </div>
    )
  }
}

export default SearchProfiles;