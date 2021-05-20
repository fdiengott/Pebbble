import React from 'react'; 

const NoCollections = () => {
  return (
    <div className="no-collections-container">
      <img src={window.no_collections} alt="no collections image"/>
      <h2>No Collections :(</h2>
      <p>It looks like this user hasn’t uploaded any collections yet. Check back soon!</p>
    </div>
  )
}; 

export default NoCollections; 