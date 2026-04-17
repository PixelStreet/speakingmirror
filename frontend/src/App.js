import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "./components/ui/sonner";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import OurStory from "./pages/OurStory";
import Capabilities from "./pages/Capabilities";
import TheWork from "./pages/TheWork";
import WorkDetail from "./pages/WorkDetail";
import Brands from "./pages/Brands";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/our-story" element={<OurStory />} />
          <Route path="/capabilities" element={<Capabilities />} />
          <Route path="/the-work" element={<TheWork />} />
          <Route path="/the-work/:id" element={<WorkDetail />} />
          <Route path="/brands" element={<Brands />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
        <Toaster />
      </BrowserRouter>
    </div>
  );
}

export default App;
