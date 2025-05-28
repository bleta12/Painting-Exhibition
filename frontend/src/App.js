import { Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import AddPainting from "./AddPainting";
import Paintings from "./Gallery/Paintings";






function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />   
      <Route path="/addPainting" element={<AddPainting />} />   
       <Route path="/gallery" element={<Paintings />} />   

    </Routes>
  );
}

export default App;
