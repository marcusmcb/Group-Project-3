import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getProfiles } from '../../actions/profileActions';

class DropDown extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: 'Filter By Event Specialty'
        };
    }

    //Gets Profiles
    componentDidMount() {
        this.props.getProfiles()
    }

    profileSearch = (e) => {
        this.setState({ title: e.target.value })
        this.props.handleProfession(e.target.value.toLowerCase());
    }

    showAll = () => {
        this.setState({ title: 'Filter by Profession' })
        this.props.handleProfession('');
    }

    render () {
        const { profiles } = this.props.profile;
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
            labels.sort();
            //creates drop down options
            labels.forEach(label => {
                options.push(<option className="dropdown-item" onClick={this.profileSearch} key={labels.indexOf(label)} value={label}>{label}</option>)
            })
        }

        return (
            <div className="container pb-3 text-center">
            <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    {this.state.title}
                </button>
                <div className="dropdown-menu" onSelect={this.profileSearch} aria-labelledby="dropdownMenu2">
                    {options}
                    <option className="dropdown-item" onClick={this.showAll} key="showAll" value="showAll">Show All</option>
                </div>
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
