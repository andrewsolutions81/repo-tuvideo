import { useState } from "react";
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
      {/* Upload Form */}
      {
        file ? 
        <form className="upload-form">
          <div>
            <label htmlFor="video-channel-name">What is your channel name</label>
            <input type="text" name="video-channel-name" placeholder="Channel name"/>
          </div>
          <div>
            <label htmlFor="select-category">What category suits your video better
              <select name="select-category">
                <option value="fun">Fun</option>
                <option value="music">Music</option>
                <option value="terror">Terror</option>
              </select>
            </label>
          </div>
          <div>
            <label htmlFor="video-title-name">What title you want for your video</label>
            <input type="text" name="video-title-name"placeholder="Write a meaningfull title"/>
          </div>
          <div>
            <label htmlFor="video-desc-name">What description you want for your video</label>
            <textarea type="text" name="video-desc-name"  rows="7"/>
          </div>
          <div className="upload__button">
            <button type="button">UPLOAD VIDEO</button>      
          </div>
        </form> :
        null
      }

    </div>
  );
}
export default VideoUploader
