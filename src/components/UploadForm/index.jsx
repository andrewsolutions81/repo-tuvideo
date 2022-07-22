import { useState } from "react"
import {useNavigate} from 'react-router-dom'



function UploadForm(props){
  const {file} = props
  const navigate = useNavigate();
  const [saveChannel, setSaveChannel] = useState("")
  const [saveTitle, setSaveTitle] = useState("")
  const [saveCategory, setSaveCategory] = useState("")
  const [saveDescription, setSaveDescription] = useState("")
  const [saveForm, setSaveForm] = useState([])
  const [isSent, setIsSent] = useState(false)
  

  function handleSubmit(e){
    e.preventDefault()
    const list = [...saveForm, {"channel":saveChannel, "title":saveTitle, "category":saveCategory, "description":saveDescription, "sources":file, "id":Math.floor(Math.random() * 10000)}]
    setSaveForm(list)
    setSaveChannel("")
    setSaveTitle("")
    setSaveCategory("")
    setSaveDescription("")
    setIsSent(true)
    //navigate('/:id', {state:list});

  }

  return(
    <div>
      {
        file ? 
        <form className="upload-form" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="video-channel-name">What is your channel name</label>
            <input value={saveChannel} type="text" id="video-channel-name" placeholder="Channel name" onChange={(e)=> setSaveChannel(e.target.value)}/>
          </div>
          <div>
            <label htmlFor="select-category">What category suits your video better
              <select id="select-category" onChange={(e)=> setSaveCategory(e.target.value)}>
                <option value="select">Select</option>
                <option value="fun">Fun</option>
                <option value="music">Music</option>
                <option value="terror">Terror</option>
              </select>
            </label>
          </div>
          <div>
            <label htmlFor="video-title-name">What title you want for your video</label>
            <input value={saveTitle} type="text" id="video-title-name" placeholder="Write a meaningfull title" onChange={(e)=> setSaveTitle(e.target.value)}/>
          </div>
          <div>
            <label htmlFor="video-desc-name">What description you want for your video</label>
            <textarea value={saveDescription} type="text" id="video-desc-name"  rows="7" onChange={(e)=> setSaveDescription(e.target.value)}/>
          </div>
          <div className="upload__button">
            <button type="submit">UPLOAD VIDEO</button>      
          </div>
        </form> :
        null
      }
      {
        isSent ? <h2 style={{textAlign:"center", fontSize:"22px"}}>Subiendo Video....</h2> :null
      }
      {
/* Here Im gonna add edit json file feature */
      }
    </div>
  )
}
export default UploadForm
