import './App.css';
import Welcome from './components/welcome';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Licence from './components/Fresh Installation/licence';
import Databaseconfig from './components/Fresh Installation/databaseconfig';
import Systemcheck from './components/Fresh Installation/systemcheck';
import Database from './components/Upgrade Installation/database';
import Systemcheck2 from './components/Upgrade Installation/systemcheck2';
import Instancecreation from './components/Fresh Installation/instancecreation';
import Adminusercreation from './components/Fresh Installation/adminusercreation';
import Confirmation from './components/Fresh Installation/confirmation';
import Installation from './components/Fresh Installation/installation';
import Installationcomplete from './components/Fresh Installation/installationcomplete';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/licence" element={<Licence />} />
          <Route path="/databaseconfig" element={<Databaseconfig />} />
          <Route path="/systemcheck" element={<Systemcheck />} />
          <Route path="/database" element={<Database />} />
          <Route path="/systemcheck2" element={<Systemcheck2 />} />
          <Route path="/instancecreation" element={<Instancecreation />} />
          <Route path="/adminusercreation" element={<Adminusercreation />} />
          <Route path="/confirmation" element={<Confirmation />} />
          <Route path="/installation" element={<Installation />} />
          <Route path="/installationcomplete" element={<Installationcomplete />} />
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
