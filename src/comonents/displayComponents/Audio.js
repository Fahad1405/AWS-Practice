import { useState, useEffect } from 'react';

const Audio = ({ source_file }) => {
  const [fileUrl, setFileUrl] = useState()

  useEffect(() => {
    let reader = new FileReader();
    reader.onload = ({ target }) => setFileUrl(target.result)
    reader.readAsDataURL(source_file);
  }, [])

  return (
    fileUrl && 
    <audio autoPlay controls>
      <source type="audio/mp3" src={fileUrl} />
    </audio>
  )
}

export default Audio;
