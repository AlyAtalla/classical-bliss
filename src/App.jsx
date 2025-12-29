import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Composer from "./pages/Composer";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/composer/:slug" element={<Composer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
