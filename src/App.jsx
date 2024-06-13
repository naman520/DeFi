import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './Pages/Home'
import Api from './Pages/Api'
import Market from './Pages/Market'
import GraphComponent from './Pages/GraphComponent'
function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="api" element={<Api />} ></Route>
        <Route path="market" element={<Market />} ></Route>
        <Route path="graph" element={<GraphComponent />} ></Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
