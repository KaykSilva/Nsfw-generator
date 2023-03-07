
import './App.css';
import { useState } from 'react'
import axios from 'axios'
import { FaGithub } from 'react-icons/fa';

export default function App() {

  const [wallpaper, setWallpaper] = useState('')
  const [tags, setTags] = useState('')





  async function getWallpaper() {

    try {
      const response = await axios.get(`https://api.waifu.pics/nsfw/${tags}`)
      setWallpaper(response.data.url)
      console.log(response)
    } catch {




    }
  }


  return (

    <div className='container'>
      <a className='social' href="https://github.com/KaykSilva">
        <FaGithub  size={30} color='#fff'/>
      </a>
      <div className='title'>
        <h1>Nsfw {tags} Generator</h1>
      </div>

      <div className='label-tag'>
        <label>

          <input list='tags'
            value={tags} onChange={(e) => setTags(e.target.value)} />
        </label>
        <datalist id='tags'>
          <option>waifu</option>
          <option>neko</option>
          <option>trap</option>
          <option>blowjob</option>
        </datalist>
        <button onClick={getWallpaper}>Searh</button>

      </div>
      <div className='wallpaper'>

        <img src={wallpaper} />

      </div>

    </div>
  )
}

