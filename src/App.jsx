import { Routes, Route } from "react-router-dom"
import './App.css'
import Home from "./components/Home";
import PrivacyPolicy from "./components/PrivacyPolicy";
import TermsOfService from "./components/TermsOfService";

function App() {
  return (
    <Routes>
      <Route path="/privacy" element={<PrivacyPolicy />} />
      <Route path="/terms" element={<TermsOfService />} />
      <Route path="/" element={<Home />} />
    </Routes>
  )
}

export default App;
