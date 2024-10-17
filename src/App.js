import { BrowserRouter, Routes, Route } from "react-router-dom";
import UpdateInventory from "./update/UpdateInventory";
import AddInventory from "./AddInventory";
import Layout from "./Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}></Route>
        <Route path="add" element={<AddInventory />} />
        <Route path="update" element={<UpdateInventory />} />
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
