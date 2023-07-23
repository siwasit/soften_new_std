import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/home";
import Hintpage from "./pages/hint";
import UpToYouH3art from "./pages/h3art";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/hint/:studentid" element={<Hintpage />} />
        <Route path="/matchmethod" element={<UpToYouH3art />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
