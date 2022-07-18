import { useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import '../UploadVideo/styles.scss'


const fileTypes = ["MP4"];

function VideoUploader() {
  const [file, setFile] = useState(null);

  const handleChange = (file) => {
    setFile(file);
    console.log(file)
  }

  return (
    <div>
      <FileUploader
        multiple={true}
        handleChange={handleChange}
        name="file"
        types={fileTypes}
      />
      <p>{file ? `File name: ${file[0].name} ` : "no files uploaded yet"}</p>
      <div className="upload__button">
      {file ? <button type="button">UPLOAD VIDEO</button> : null}      
      </div>
    </div>
    
   
  );
}
export default VideoUploader
