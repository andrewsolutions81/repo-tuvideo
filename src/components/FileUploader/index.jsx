import { useState } from "react";
import UploadForm from "../UploadForm";
import '../UploadVideo/styles.scss'

function VideoUploader() {
  const [file, setFile] = useState(null);
  const [showVideo, setShowVideo] = useState()

  const handleChange = (e) => {
    const file = e.target.files[0]
    setFile(file);

    const reader = new FileReader()

    if (file){
      reader.onload = async function(e){
        let uint8Array = new Uint8Array(e.target.result)
        let arrayBuffer = uint8Array.buffer;
        let blob = new Blob([arrayBuffer])
        setShowVideo(URL.createObjectURL(blob))
      }
      reader.readAsArrayBuffer(file);
    }

  }
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> 37c2c6d (feat: add upload form as component)
=======
>>>>>>> 1669cab (feat: continue working on add to json file feature)
  return (
    <div>
      <div className="file-input">
        <img src="/media/icons/uploading.png" alt="" />
        <label htmlFor="myfile">Select a video:</label>
        <p>{file ? `File name: ${file.name} ` : "no files uploaded yet"}</p>
        <input type="file" accept="video/*" id="myfile" style={{opacity:"0"}} onChange={handleChange}/>
      </div>
      <div>
      {file ? <video width="100%"  src={`${showVideo}#t=5`} poster={showVideo} controls/> : null} 
      </div>
<<<<<<< HEAD
<<<<<<< HEAD
      <UploadForm file={showVideo}/>
=======
      <UploadForm file={file}/>
>>>>>>> 37c2c6d (feat: add upload form as component)
=======
      <UploadForm file={showVideo}/>
>>>>>>> 1669cab (feat: continue working on add to json file feature)
    </div>
  );
}
export default VideoUploader
