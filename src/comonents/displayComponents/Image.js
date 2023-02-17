const Image = ({ source_file }) => {
  return <img src={URL.createObjectURL(source_file)} alt={source_file.name} />
}
 
export default Image;
