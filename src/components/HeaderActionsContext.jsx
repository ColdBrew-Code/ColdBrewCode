import { createContext, useContext, useState } from "react"

export const defaultHeaderActions = {
  onBrandClick: undefined,
  onNavigateToSection: undefined,
}

const HeaderActionsContext = createContext({
  headerActions: defaultHeaderActions,
  setHeaderActions: () => {},
})

export function HeaderActionsProvider({ children }) {
  const [headerActions, setHeaderActions] = useState(defaultHeaderActions)

  return (
    <HeaderActionsContext.Provider value={{ headerActions, setHeaderActions }}>
      {children}
    </HeaderActionsContext.Provider>
  )
}

export function useHeaderActions() {
  return useContext(HeaderActionsContext)
}