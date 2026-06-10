import { Routes, Route } from "react-router-dom"
import './App.css'
import Home from "./components/home/Home";
import PrivacyPolicy from "./components/legal/PrivacyPolicy";
import TermsOfService from "./components/legal/TermsOfService";
import Header from "./components/Header"
import { HeaderActionsProvider, useHeaderActions } from "./components/HeaderActionsContext"

function App() {
  return (
    <HeaderActionsProvider>
      <AppShell />
    </HeaderActionsProvider>
  )
}

function AppShell() {
  const { headerActions } = useHeaderActions()

  return (
    <>
      <Header
        onBrandClick={headerActions.onBrandClick}
        onNavigateToSection={headerActions.onNavigateToSection}
      />
      <Routes>
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsOfService />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  )
}

export default App;
