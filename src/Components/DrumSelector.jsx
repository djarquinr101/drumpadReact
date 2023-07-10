import data from "../Data/data"
import { useState } from "react"

// eslint-disable-next-line react/prop-types
const DrumSelector = ({ handleChange }) => {
  const [dropdown, setDropdown] = useState(false)
  const [currentPad, setCurrentPad] = useState("Select Drums")  

  const handleClick = (event) => {
    setDropdown(!dropdown)
    const listItem = event.target.textContent
    handleChange(listItem)
    setCurrentPad(listItem.toUpperCase())
  }

    return(
        <div>
            <button className="key" aria-expanded={dropdown} onClick={() => {setDropdown(!dropdown) 
                setCurrentPad("Select Drums")}}>
             {currentPad}    
            </button>
            { dropdown && (<ul aria-hidden={!dropdown} 
                className="flex flex-col gap-0 justify-center items-center cursor-pointer ">
                    {
                        data.drumOptions.map((option) =>(
                            <li className="w-24 py-6 bg-[black] text-[white] m-0 text-center" key={option} onClick={handleClick}>{option}</li>
                        ))
                    }    
                </ul>)
            }
        </div>
    )
}

export default DrumSelector