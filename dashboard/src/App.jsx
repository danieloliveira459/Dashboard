import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";

import Dashboard from "./components/Pages/Dashboard/Dashboard";
import Carteira from "./components/Pages/Carteira/Carteira";
import Simulador from "./components/Pages/Simulador/Simulador";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/carteira" element={<Carteira />} />
          <Route path="/simulador" element={<Simulador />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;