import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Hompage/Homepage";
import Library from "./components/library/library";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/library" element={<Library />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
