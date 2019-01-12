import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';

class Landing extends Component {
     
     componentDidMount() {
     if(this.props.auth.isAuthenticated) {
      this.props.history.push('/dashboard');
    }
  }

     render() {
          return (
               <div className="landing">
                    <div className="dark-overlay landing-inner text-light">
                         <div className="container">
                              <div className="row">
                                   <div className="col-md-12 text-center">
                                        <h1 className="display-3 mb-4">Eventagious</h1>
                                        <p className="lead">A social network and community for event professionals to connect and contract events</p>
                                        <p>Create an account with us to share your contact info, background and experience.  You can search for other event professionals within out app, connect and communicate with one another to book future projects and events.</p>
                                        <hr />
                                        <Link to="/register" className="btn btn-lg btn-info mr-2">Sign Up</Link>
                                        <Link to="/login" className="btn btn-lg btn-light">Login</Link>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          )
     }
}

Landing.propTypes = {
     auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
     auth: state.auth
})

export default connect(mapStateToProps)(Landing);