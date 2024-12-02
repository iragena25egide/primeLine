import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Header from './header';
import Introduction from './introduction';
import Capabilities from './capabilities';
import About from './about';
import Proof from './future-proof';
import Smart from './smart';
import Network from './network';
import Map from './map';


function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={
          <>
          <Header />
          <Introduction />
          <Capabilities />
          <About />
          <Proof />
          <Smart />
          <Network />
          <Map />
          </>
          } 
          />
      </Routes>
    </BrowserRouter>
  )
}

export default App
