import React from 'react'; 

const UserNav = ({logout}) => {
  return (
    <ul className="user-nav">
      <li><button onClick={logout}>Sign Out</button></li>
    </ul>
  )
}; 

export default UserNav; 





// class UserNav extends React.Component {
//   constructor (props) {
//     super(props); 

//     this.handleClick = this.handleClick.bind(this); 
//   }

//   handleClick(e) {
//     e.preventDefault(); 
//     console.log(this.props);
//     // this.props.logout(); 
//   }

//   render() {
//     return (
//       <ul className="user-nav">
//         <li><button onClick={this.handleClick}>Sign Out</button></li>
//       </ul>
//     ) 
//   }
// }