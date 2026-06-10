import { createContext, useContext } from "react"

export const defaultHeaderActions = {
  onBrandClick: undefined,
  onNavigateToSection: undefined,
}

export const HeaderActionsContext = createContext({
  headerActions: defaultHeaderActions,
  setHeaderActions: () => {},
})

export function useHeaderActions() {
  return useContext(HeaderActionsContext)
}