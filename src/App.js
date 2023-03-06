
import './App.css';
import {useState} from'react'
import axios from 'axios'
function App() {

  const [wallpaper, setWallpaper] = useState('')

  async function getWallpaper(){
    const response = await axios.get('https://api.waifu.pics/nsfw/neko')
    setWallpaper(response.data.url)
    console.log(response)
   
  }

  return (

    <div className='container'>
      <div className='title'>
        <h1>Wallpaper Generator</h1>
      </div>

      <div className='wallpaper'>

        <img src={wallpaper} />
        
      </div>
      <button className='button-reload' onClick={getWallpaper}>Reload</button>
    </div>
  )
}

export default App;