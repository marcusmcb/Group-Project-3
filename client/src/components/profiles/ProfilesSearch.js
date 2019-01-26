import React, { Component } from 'react'; 

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
                    <div className="post-form mb-3">
                         <div className="card card-info">
                              <div className="card-header bg-info text-center text-white">Search for an event professional by their specialty or their location.</div>
                              <div className="card-body m-auto">
                                   <input type="text" className="input" onChange={this.profileSearch} placeholder="Search Profiles" />
                              </div>
                         </div>
                    </div>
               </div>
          )
     }
}

export default ProfilesSearch;