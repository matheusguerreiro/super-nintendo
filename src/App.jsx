import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Emulators, Roms, History, CreateRoms } from "./pages/pages";
import { Header, Nav, Footer } from "./components/index";
import "./App.sass";
import { useEffect } from "react";
import { useRomsContext } from "./hooks";
import romsJson from "./roms.json";

function App() {
  const { setRoms } = useRomsContext();

  useEffect(() => {
    setRoms(romsJson)
  }, [])

  return (
    <div className="app">
      <Header />
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/"           element={<Home />} />
          <Route path="/emulators"  element={<Emulators />} />
          <Route path="/roms"       element={<Roms />} />
          <Route path="/history"    element={<History />} />
          <Route path="/createRoms" element={<CreateRoms />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
