import { Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import AddPainting from "./AddPainting";
import Paintings from "./Gallery/Paintings";
import Login from "./Login-SignUp/Login";
import SignUp from "./Login-SignUp/Login";
import Profile from "./Profile/Profile";







function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/addPainting" element={<AddPainting />} />
      <Route path="/gallery" element={<Paintings />} />
      <Route path="/Login-SignUp" element={< Login />} />
      <Route path="/Login-SignUp" element={< SignUp />} />
      <Route path="/Profile" element={< Profile />} />


    </Routes>
  );
}

export default App;
