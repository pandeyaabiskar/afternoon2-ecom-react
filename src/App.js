import Header from "./components/Header";
import HomeLayout from "./containers/HomeLayout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DetailsLayout from "./containers/DetailsLayout";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomeLayout />}></Route>
        <Route path="/products/:productID" element={<DetailsLayout />}></Route>
        <Route path="*" element={<h1>Page Not Found</h1>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
