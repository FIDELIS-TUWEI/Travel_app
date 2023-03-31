import { Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import POSPage from './pages/POSPage';


const App = () => {

  return (
    <div className="App">
      <Routes>
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/pospage" element={<POSPage />} />
      </Routes>

    </div>
  )
}

export default App;

