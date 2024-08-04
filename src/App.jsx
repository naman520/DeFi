import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './Pages/Home'
import Api from './Pages/Api'
import Market from './Pages/Market'
import Swap from './Pages/Swap'
import GraphComponent from './Pages/GraphComponent'
import Wallet from './Pages/Wallet'
function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="api" element={<Api />} ></Route>
        <Route path="market" element={<Market />} ></Route>
        <Route path="graph" element={<GraphComponent />} ></Route>
        <Route path="swap" element={<Swap />} ></Route>
        <Route path="wallet" element={<Wallet />} ></Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
