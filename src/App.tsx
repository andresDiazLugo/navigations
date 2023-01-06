import { useState } from 'react'
import SliderMenu from './components/SliderMenu/SliderMenu'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <SliderMenu/>
    </div>
  )
}

export default App
