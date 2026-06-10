import { Outlet } from "react-router-dom"
import './App.css'
import Header from "./components/layout/Header"
import { HeaderActionsProvider } from "./components/layout/HeaderActionsContext"
import { useHeaderActions } from "./components/layout/HeaderActions"

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
      <Outlet />
    </>
  )
}

export default App;
