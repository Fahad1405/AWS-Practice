import { useState, useEffect } from 'react';

const Video = ({ source_file }) => {
  const [fileUrl, setFileUrl] = useState()

  useEffect(() => {
    let reader=new FileReader();
    reader.onload= ({ target }) => setFileUrl(target.result)
    reader.readAsDataURL(source_file);
  })

  return (
    fileUrl && 
    <video autoPlay controls>
      <source type="video/mp4" src={fileUrl} />
    </video>
  )
}

export default Video;
