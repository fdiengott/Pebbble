import React from 'react'; 

const Errors = ({ errors }) => {

  if (!errors.length) return null; 

  return (
    <ul className="form-errors">
      {errors.map((err, i) => ( <li key={i}>{err}</li> ))}
    </ul>
  )
}

export default Errors; 