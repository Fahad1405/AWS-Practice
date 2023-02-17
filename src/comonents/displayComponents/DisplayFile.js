import Image from './Image';
import Text from './Text';
import CSV from './CSV';
import Video from './Video';
import Audio from './Audio';
import PDF from './PDF';

const DisplayFile = ({ source }) => {
  switch(source.name.split('.').pop()) {
    case 'jpg': case 'svg': case 'png': case 'jpeg': case 'gif':
      return <Image source_file={source} />
    case 'txt':
      return <Text source_file={source} />
    case 'csv':
      return <CSV source_file={source} />
    case 'mp4': case 'mkv': case 'webm':
      return <Video source_file={source} />
    case 'mp3':
      return <Audio source_file={source} />
    case 'pdf':
      return <PDF source_file={source} />
    default:
      console.log('invalid file')
  }
}
 
export default DisplayFile;
