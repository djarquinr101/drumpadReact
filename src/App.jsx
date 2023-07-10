import { useEffect, useState } from "react"
import DrumSelector from "./Components/DrumSelector.jsx"
import data from "./Data/data.jsx"

function App() {
  const [currentDrum, setCurrentDrum] = useState("option1")

  const playSound = (key) => {
    const audioElement = document.querySelector(`audio[data-key="${key}"]`)
    const keybox = document.querySelector(`.key[data-key="${key}"]`)
    if(audioElement) {
      audioElement.currentTime = 0
      audioElement.play()
      keybox.classList.add('playing')
      setTimeout(()=>{
        keybox.classList.remove('playing')
      }, 250)
    }
  }

  const handleKeyDown = (event) => {
    const key = event.keyCode.toString()
    playSound(key)
  }

  const handleClickList = (item) => {
    setCurrentDrum(item)
  }  

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown)
  }, [])

  return (
    <div className="h-screen w-screen bg-slate-500 bg-[url('/background.jpg')] bg-cover m-0 p-0 font-serif">
      <div className="flex items-center justify-center h-screen flex-col">
        <DrumSelector handleChange={handleClickList}/>
       <div className="grid grid-cols-3 auto-rows-fr gap-0	min-h-fit min-w-max max-w-3xl">
        {
          data.padData.map((drum, index) => (
            <div key={index}>
                <div data-key={drum.dataKey} className="key">
                  <kbd className="block text-7xl">{drum.keyLetter}</kbd>
                  <span className="text-xl text-[#FFC600] uppercase tracking-widest	">{drum.soundName}</span>
                  <audio data-key={drum.dataKey} src={drum.sound[currentDrum]}></audio>
                </div>
               </div>
            ))
        }
        </div>
        </div>
    </div>
  )
}

export default App
