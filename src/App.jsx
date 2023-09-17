
import './App.css'
import LiveChart from './components/LiveChart/LiveChart'
// import DaisyNav from './components/DaisyNav/DaisyNav'
import Navbar from './components/Navbar/Navbar'
import Phones from './components/Phones/Phones'
import PriceOptions from './components/PriceOptions/PriceOptions'

function App() {


  return (
    <> 

      {/* <DaisyNav></DaisyNav> */}
      <Navbar></Navbar>
      <PriceOptions></PriceOptions>
      <LiveChart></LiveChart>
      <Phones></Phones>
    
    </>
  )
}

export default App
