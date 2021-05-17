import { faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'; 


const Dropzone = ({ handleFile }) => {
  return (
    <div className="drop-zone-container">
      <label className="drop-zone-text" htmlFor="filebtn">
        <FontAwesomeIcon icon={faCloudUploadAlt} className="icon"/>
        <h1>Drag and drop an image</h1>
        <h3>or <span 
        className="pink-text"
        >browse</span> to choose a file</h3>
        <p>(1600x1200 or larger recommended, up to 10MB each)</p>
      </label>
      <input type="file" 
        id="filebtn"
        className="drop-zone-btn" 
        // className="drop-zone-btn-area" 
        onClick={ handleFile }/>
    </div>
  )
}

export default Dropzone; 