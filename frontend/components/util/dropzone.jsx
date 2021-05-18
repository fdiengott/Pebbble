import { faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'; 


const Dropzone = ({ handleFile, handleDrop }) => {
  
  const dragOver = (e) => {
    e.preventDefault(); 
  }
  const dragEnter = (e) => {
    e.preventDefault(); 
  }
  const dragLeave = (e) => {
    e.preventDefault(); 
  }

  // const handleDrop = (e) => {
  //   e.preventDefault(); 
    
  // }

  return (
    <div className="drop-zone-container">
      <label className="drop-zone-text" htmlFor="filebtn"
        onDragOver={dragOver}
        onDragEnter={dragEnter}
        onDragLeave={dragLeave}
        onDrop={handleDrop}
      >
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
        onInput={ handleFile }
        />
    </div>
  )
}

export default Dropzone; 