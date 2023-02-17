import React, { useState } from 'react'
import DisplayFile from './displayComponents/DisplayFile';

const FileUplaod = () => {
  const [file, setFile] = useState()

  const handleChange = ({ target }) => setFile(target.files[0]);

  return ( 
    <React.Fragment>
      <div>
        <label>Upload file here : </label>
        <input type='file' onChange={handleChange} />
      </div>
      { file && <DisplayFile source={file} /> }
    </React.Fragment>
  );
}
 
export default FileUplaod;