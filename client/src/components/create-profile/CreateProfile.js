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
              <h1 className="display-4 text-center text-white">Create Your Profile</h1>
              <p className="lead text-center text-white">
                Let's get some information to make your profile stand out
              </p>
              <small className="d-block pb-3 text-white">* = required fields</small>
              <form onSubmit={this.onSubmit}>
                <small className="text-white">A unique handle for your profile URL.</small>
                <TextFieldGroup
                  placeholder="* Profile Handle"
                  name="handle"
                  value={this.state.handle}
                  onChange={this.onChange}
                  error={errors.handle}
                />

                <small className="text-white">Your primary event profession.</small>
                <SelectListGroup
                  placeholder="Profession"
                  name="profession"
                  value={this.state.profession}
                  onChange={this.onChange}
                  options={options}
                  error={errors.profession}
                />

                <small className="text-white">Your own company or the one you currently work for.</small>
                <TextFieldGroup
                  placeholder="Company"
                  name="company"
                  value={this.state.company}
                  onChange={this.onChange}
                  error={errors.company}
                />

                <small className="text-white">Your site or your company's site</small>
                <TextFieldGroup
                  placeholder="Website"
                  name="website"
                  value={this.state.website}
                  onChange={this.onChange}
                  error={errors.website} />

                <small className="text-white">City or region (eg, Boston, MA, Southern California)</small>
                <TextFieldGroup
                  placeholder="Location"
                  name="location"
                  value={this.state.location}
                  onChange={this.onChange}
                  error={errors.location}
                />

                <small className="text-white">Please use comma-separated values (good with kids, specialize in large events, etc)</small>
                <TextFieldGroup
                  placeholder="Skills"
                  name="skills"
                  value={this.state.skills}
                  onChange={this.onChange}
                  error={errors.skills}
                />

                <small className="text-white">Let us know what languages you are fluent in.</small>
                <TextFieldGroup
                  placeholder="Language(s)"
                  name="language"
                  value={this.state.language}
                  onChange={this.onChange}
                  error={errors.language}
                />

                <small className="text-white">Tell us a bit more about your work as an event professional.</small>
                <TextAreaFieldGroup
                  placeholder="Bio"
                  name="bio"
                  value={this.state.bio}
                  onChange={this.onChange}
                  error={errors.bio}
                />

                <div className="mb-3">
                  <button
                    type="button"
                    onClick={() => {
                      this.setState(prevState => ({
                        displaySocialInputs: !prevState.displaySocialInputs
                      }));
                    }}
                    className="btn btn-secondary"
                  >
                    Add Social Network Links
                  </button>
                  <span className="text-white ml-3">(Optional)</span>
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
