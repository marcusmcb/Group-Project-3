import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getProfiles } from '../../actions/profileActions';
import DropDownItem from './DropDownItem'

class DropDown extends Component {
    //Gets Profiles
    componentDidMount() {
        this.props.getProfiles()
    }
    render () {
        const { profiles } = this.props.profile;
        // let labels = ['DJ', 'Caterer', 'Comedian', 'Emcee', 'Musician-Band', 'Musician- Instrument Soloist', 'Musician- Singer', 'Photo Booth', 'Photographer', 'Security', 'Stylist', 'Videographer']
        let labels = []
        let options = []

        if (profiles === null) {
            console.log('waiting')
        }
        //checks if each profession is in the labels array, if not it adds it to generate an option for dropdown menu
        //if someone enters an Other Profession, it won't be in the array alraedy
        else if (profiles.length>0) {
            profiles.forEach(profile => {
                if (labels.indexOf(profile.profession) === -1) {
                    labels.push(profile.profession)
                }
            });
            //alphabetizes the array
            labels.sort()
            //creates drop down options
            labels.forEach(option => {
                options.push(<DropDownItem key={option} profile={option} />)
            })
        }

        return (
            <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Narrow Results by Profession
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
                    {options}
                </div>
            </div>
        )
    }
}


DropDown.propTypes = {
    getProfiles: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired
  };
  
  const mapStateToProps = state => ({
    profile: state.profile
  });
  
  export default connect(mapStateToProps, { getProfiles })(DropDown);
