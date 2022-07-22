function UploadForm(props){
  const {file} = props
  return(
    <div>
      {
        file ? 
        <form className="upload-form">
          <div>
            <label htmlFor="video-channel-name">What is your channel name</label>
            <input type="text" id="video-channel-name" placeholder="Channel name"/>
          </div>
          <div>
            <label htmlFor="select-category">What category suits your video better
              <select id="select-category">
                <option value="fun">Fun</option>
                <option value="music">Music</option>
                <option value="terror">Terror</option>
              </select>
            </label>
          </div>
          <div>
            <label htmlFor="video-title-name">What title you want for your video</label>
            <input type="text" id="video-title-name" placeholder="Write a meaningfull title"/>
          </div>
          <div>
            <label htmlFor="video-desc-name">What description you want for your video</label>
            <textarea type="text" id="video-desc-name"  rows="7"/>
          </div>
          <div className="upload__button">
            <button type="button">UPLOAD VIDEO</button>      
          </div>
        </form> :
        null
      }

    </div>
  )
}
export default UploadForm
