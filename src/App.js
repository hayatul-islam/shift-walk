import { BrowserRouter, Routes } from "react-router-dom";
import Header from "./components/Header";

function App() {
  return (
    <>
      <div className="bg-[#abaea8]">
        <BrowserRouter>
          <Header />
          <Routes>{/* <Route path="/" element={<Home />} /> */}</Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
