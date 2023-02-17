import { useState, useEffect } from 'react';

const Text = ({ source_file }) => {
  const [fileData, setFileData] = useState()

  useEffect(() => {
    let reader=new FileReader();
    reader.onload= () => setFileData(reader.result)
    reader.readAsText(source_file);
  })

  return fileData && <pre>{fileData}</pre>
}

export default Text;
