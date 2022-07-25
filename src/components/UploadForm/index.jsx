import { useState } from "react"
import {useNavigate} from 'react-router-dom'



function UploadForm(props){
  const {file} = props
  const navigate = useNavigate();
  const [data, setData] = useState({})
  const [saveForm, setSaveForm] = useState([])
  const [isSent, setIsSent] = useState(false)
  
  function handleChange(e){
    const {name, value} = e.target
    setData({...data, [name]:value})
  }
  function handleSubmit(e){
    e.preventDefault()
    const list = {
      ...data,
      id: Math.floor(Math.random() *1000),
      sources: file
    }
    setSaveForm(list)
    setData("")
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
            <input type="text" id="video-channel-name" name="channel" placeholder="Channel name" onChange={handleChange}/>
          </div>
          <div>
            <label htmlFor="select-category">What category suits your video better
              <select id="select-category" name="category" onChange={handleChange}>
                <option value="select">Select</option>
                <option value="fun">Fun</option>
                <option value="music">Music</option>
                <option value="terror">Terror</option>
              </select>
            </label>
          </div>
          <div>
            <label htmlFor="video-title-name">What title you want for your video</label>
            <input type="text" id="video-title-name" name="title" placeholder="Write a meaningfull title" onChange={handleChange}/>
          </div>
          <div>
            <label htmlFor="video-desc-name">What description you want for your video</label>
            <textarea type="text" id="video-desc-name" name="description"  rows="7" onChange={handleChange}/>
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
