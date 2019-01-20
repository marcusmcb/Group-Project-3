import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Spinner from '../common/Spinner';
import ProfileItem from './ProfileItem';
import { getProfiles } from '../../actions/profileActions';
import ProfilesSearch from '../profiles/ProfilesSearch';

class Profiles extends Component {
  componentDidMount() {
    this.props.getProfiles();
  }

  state = {
    searchTerm: ""
  }

  render() {
    const { profiles, loading } = this.props.profile;
    let profileItems = [];
    // loads spinner as profiles are being retrieved
    if (profiles === null || loading) {
      profileItems = <Spinner />;

    } else {
      
      if (profiles.length > 0) {
        profiles.forEach(profile => {
          // profiles search function
          let tmpAr = profile.skills.slice(0);
          profile.location && tmpAr.push(profile.location);
          tmpAr = tmpAr.map(e => e.toLowerCase().trim());
          // executes search function
          const isValid = tmpAr.find((val) => { 
            return RegExp(`.*${this.state.searchTerm}.*`).test(val);
          });          
          if(isValid !== undefined) {
            profileItems.push(<ProfileItem key={profile._id} profile={profile} />)
          }
        });
        
      } else {
        profileItems = <h4>No profiles found.</h4>;
      }
    }

    return (
      <div className="profiles">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="display-6 text-center">Event Professionals</h1>
              <p className="lead text-center">
                Browse and connect with other Eventagious members.
              </p>
              <ProfilesSearch handleSearch={e => this.setState({ searchTerm: e })} />
              {profileItems}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Profiles.propTypes = {
  getProfiles: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile
});

export default connect(mapStateToProps, { getProfiles })(Profiles);
