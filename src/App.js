import Navbar from "./Compontens/Navbar";
import FirstPage from "./Compontens/Silder/FirstPage";
import Items from "./Compontens/Items";
import Login from "./Compontens/account/login";
import Nopage from "./Compontens/nopage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Compontens/home";
function App() {
  return (
    <div className="font-Tajawal  space-y-10 ">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Nopage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
