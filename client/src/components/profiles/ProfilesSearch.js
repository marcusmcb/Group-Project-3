import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Profile from '../profile/Profile';
import Profiles from './Profiles';

class ProfilesSearch extends Component {

constructor(props) {
     super(props);
     this.state = {
          filtered: []
     };
}

componentDidMount() {
     this.setState({
          filtered: this.props.items
     });
}

componentWillReceiveProps(nextProps) {
     this.setState({
          filtered: nextProps.items
     })
}

profileSearch = (e) => {
     this.props.handleSearch(e.target.value.toLowerCase());
}

  render() {
    return (
      <div>
           <input type="text" className="input" onChange={this.profileSearch} placeholder="Search Profiles" />        
      </div>
    )
  }
}

export default ProfilesSearch;