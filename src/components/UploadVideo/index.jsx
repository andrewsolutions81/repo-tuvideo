import VideoUploader from '../FileUploader'
import '../UploadVideo/styles.scss'

function UploadVideo(){
  return(
    <div>
      <div className="upload">
        <div className="upload__header">
          <h2>Upload videos</h2>
          <div className="upload__header__icons">
          <a href="/" className="upload__report-button"><img src="/media/icons/Alert.png" alt="report button"/></a>
          <a href="/" className="upload__close-button"><img src="/media/icons/close.png" alt="close button"/></a>
        </div>
        </div>
        <div className='upload__container'>
          <VideoUploader />
        </div>
        <div className="upload__footer">
          <p>By submitting your videos to TuVideo, yuo acknowledge that you agree to TuVideo's Terms of Service and Community Guidelines.</p>
          <p>Please be sure not to violate others' copyright or privacy nights.</p>
        </div>
    </div>

    </div>
  )
}
export default UploadVideo
