import './App.css'
import ApiCall from './components/ApiCall'
import Cards from './components/Cards'
import { useState } from 'react'


function App() {
  const [globalData, setGlobalData] = useState (false)
  const [oneCall, setOneCall] = useState("")

  return (
    <section className='sm:grid grid-cols-1 md:flex lg:flex'>
        <div className='h-screen sm:w-screen md:w-1/3 lg:w-1/3'>
          <ApiCall
        setGlobalData={setGlobalData}
        setOneCall={setOneCall}
        />
        </div>
        <div id="allTheCards" className='sm:w-screen md:w-2/3 lg:w-full'>
        <Cards
        globalData={globalData}
        oneCall={oneCall}
          />
        </div>
    </section>
  )
}

export default App
