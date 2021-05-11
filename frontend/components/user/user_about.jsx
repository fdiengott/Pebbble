import React from 'react'; 

class UserAbout extends React.Component {
  constructor(props) {
    super(props); 
  }


  componentDidMount() {
    this.props.fetchUser(this.user.id); 
  }

  render() {
    return (

      <div>User 

      </div>
    )
  }

}

export default UserAbout; 