import { useState } from "react"
import Display from "./Components/Display"
import NumberPad from "./Components/NumberPad"


function App() {


  const [displayValue, setDisplayValue] = useState('');

  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-indigo-400">
        <div className="w-80 bg-blue-100 rounded-lg shadow-md p-4">
          <h1 className="text-2xl font-bold text-center mb-4 text-gray-700">Calculator</h1>
          <div className="mb-4"><Display  textToShow = {displayValue}/></div>
          <div className=""><NumberPad displayValue= {displayValue} setDisplayValue = {setDisplayValue}/>
          </div>
        </div>
      </div>
    </>
  )
}

export default App


