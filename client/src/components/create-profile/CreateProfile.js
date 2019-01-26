import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import TextFieldGroup from '../common/TextFieldGroup';
import TextAreaFieldGroup from '../common/TextAreaFieldGroup';
import InputGroup from '../common/InputGroup';
import SelectListGroup from '../common/SelectListGroup';
import { createProfile } from '../../actions/profileActions';

class CreateProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displaySocialInputs: false,
      displayOtherProfession: false,
      handle: '',
      company: '',
      website: '',
      location: '',
      profession: '',
      professionInput: '',
      skills: '',
      language: '',
      bio: '',
      twitter: '',
      facebook: '',
      linkedin: '',
      youtube: '',
      instagram: '',
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onChangeProfession = this.onChangeProfession.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onSubmit(e) {
    e.preventDefault();

    const profileData = {
      handle: this.state.handle,
      company: this.state.company,
      website: this.state.website,
      location: this.state.location,
      profession: this.state.profession,
      skills: this.state.skills,
      language: this.state.language,
      bio: this.state.bio,
      twitter: this.state.twitter,
      facebook: this.state.facebook,
      linkedin: this.state.linkedin,
      youtube: this.state.youtube,
      instagram: this.state.instagram
    };

    this.props.createProfile(profileData, this.props.history);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onChangeProfession = e => {
    this.setState({ [e.target.name]: e.target.value });
    if ( e.target.value === 'Other' ) {
      this.setState({ displayOtherProfession: true });
    } else {
      this.setState({ profession: e.target.value})
    }
  }

  render() {
    const { errors, displaySocialInputs, displayOtherProfession } = this.state;

    let socialInputs;
    let professionInput;

    if (displayOtherProfession) {
      professionInput = (
        <TextFieldGroup
          placeholder="Profession"
          name="profession"
          value={this.state.profession}
          onChange={this.onChange}
          error={errors.profession}
          info=""
        />
      )
    }

    if (displaySocialInputs) {
      socialInputs = (
        <div>
          <InputGroup
            placeholder="Twitter Profile URL"
            name="twitter"
            icon="fab fa-twitter"
            value={this.state.twitter}
            onChange={this.onChange}
            error={errors.twitter}
          />

          <InputGroup
            placeholder="Facebook Page URL"
            name="facebook"
            icon="fab fa-facebook"
            value={this.state.facebook}
            onChange={this.onChange}
            error={errors.facebook}
          />

          <InputGroup
            placeholder="Linkedin Profile URL"
            name="linkedin"
            icon="fab fa-linkedin"
            value={this.state.linkedin}
            onChange={this.onChange}
            error={errors.linkedin}
          />

          <InputGroup
            placeholder="YouTube Channel URL"
            name="youtube"
            icon="fab fa-youtube"
            value={this.state.youtube}
            onChange={this.onChange}
            error={errors.youtube}
          />

          <InputGroup
            placeholder="Instagram Page URL"
            name="instagram"
            icon="fab fa-instagram"
            value={this.state.instagram}
            onChange={this.onChange}
            error={errors.instagram}
          />
        </div>
      );
    }

    // Select options for profession
    const options = [
      { label: '* Select Profession', value: 0 },
      { label: 'Caterer', value: 'Caterer' },
      { label: 'Comedian', value: 'Comedian' },
      { label: 'DJ', value: 'DJ' },
      { label: 'Emcee', value: 'Emcee' },
      { label: 'Musician- Band', value: 'Musician- Band' },
      { label: 'Musician- Instrument Soloist', value: 'Musician- Instrument Soloist' },
      { label: 'Musician- Singer ', value: 'Musician- Singer ' },
      { label: 'Photo Booth', value: 'Photo Booth' },
      { label: 'Photographer', value: 'Photographer' },
      { label: 'Security', value: 'Security' },
      { label: 'Stylist', value: 'Stylist' },
      { label: 'Videographer', value: 'Videographer' },
      { label: 'Other', value: 'Other' }
    ];

    return (
      <div className="create-profile">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Create Your Profile</h1>
              <p className="lead text-center">
                Let's get some information to make your profile stand out
              </p>
              <small className="d-block pb-3">* = required fields</small>
              <form onSubmit={this.onSubmit}>
                <TextFieldGroup
                  placeholder="* Profile Handle"
                  name="handle"
                  value={this.state.handle}
                  onChange={this.onChange}
                  error={errors.handle}
                  info="A unique handle for your profile URL. Your full name, company name, nickname"
                />
                <SelectListGroup
                  placeholder="Profession"
                  name="professionInput"
                  value={this.state.professionInput}
                  onChange={this.onChangeProfession}
                  options={options}
                  error={errors.profession}
                  info="Your primary event profession."
                />
                {professionInput}
                <TextFieldGroup
                  placeholder="Company"
                  name="company"
                  value={this.state.company}
                  onChange={this.onChange}
                  error={errors.company}
                  info="Your own company or the one you currently work for"
                />
                <TextFieldGroup
                  placeholder="Website"
                  name="website"
                  value={this.state.website}
                  onChange={this.onChange}
                  error={errors.website}
                  info="Your own site or the one for the company you currently work for"
                />
                <TextFieldGroup
                  placeholder="Location"
                  name="location"
                  value={this.state.location}
                  onChange={this.onChange}
                  error={errors.location}
                  info="City or city and state suggested (eg. Boston, MA)"
                />
                <TextFieldGroup
                  placeholder="Skills"
                  name="skills"
                  value={this.state.skills}
                  onChange={this.onChange}
                  error={errors.skills}
                  info="Please use comma separated values (good with kids, specialize in large groups, etc.)"
                />
                <TextFieldGroup
                  placeholder="Language(s)"
                  name="language"
                  value={this.state.language}
                  onChange={this.onChange}
                  error={errors.language}
                  info="Let us know which languages you are fluent in."
                />

                <TextAreaFieldGroup
                  placeholder="Bio"
                  name="bio"
                  value={this.state.bio}
                  onChange={this.onChange}
                  error={errors.bio}
                  info="Tell us a little bit about your work as an event professional."
                />

                <div className="mb-3">
                  <button
                    type="button"
                    onClick={() => {
                      this.setState(prevState => ({
                        displaySocialInputs: !prevState.displaySocialInputs
                      }));
                    }}
                    className="btn btn-light"
                  >
                    Add Social Network Links
                  </button>
                  <span className="text-muted">Optional</span>
                </div>
                {socialInputs}
                <input
                  type="submit"
                  value="Submit"
                  className="btn btn-info btn-block mt-4"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

CreateProfile.propTypes = {
  profile: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  return {
  profile: state.profile,
  errors: state.errors
  }
};

export default connect(mapStateToProps, { createProfile })(
  withRouter(CreateProfile)
);
