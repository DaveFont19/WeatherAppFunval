import './App.css'
import ApiCall from './components/ApiCall'
import Cards from './components/Cards'
import { useState } from 'react'


function App() {
  const [globalData, setGlobalData] = useState (false)
  const [oneCall, setOneCall] = useState("")

  return (
    <section className='flex flex-col lg:flex-row'>
        <div className='h-screen w-screen  lg:w-1/3'>
          <ApiCall
        setGlobalData={setGlobalData}
        setOneCall={setOneCall}
        />
        </div>
        <div id="allTheCards" className='w-screen lg:w-2/3'>
        <Cards
        globalData={globalData}
        oneCall={oneCall}
          />
        </div>
    </section>
  )
}

export default App
