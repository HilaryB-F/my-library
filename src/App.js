import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Hompage/Homepage";
import Library from "./pages/library/library";
import NotFound from "./pages/NotFound/NotFound";
// import Unread from "./pages/Unread/Unread";




function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/library" element={<Library />}></Route>
        {/* <Route path="/library/unread" element={<Unread />}></Route> */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}
export default App;
