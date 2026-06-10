import { useState } from "react"
import { HeaderActionsContext, defaultHeaderActions } from "./HeaderActions"

export function HeaderActionsProvider({ children }) {
  const [headerActions, setHeaderActions] = useState(defaultHeaderActions)

  return (
    <HeaderActionsContext.Provider value={{ headerActions, setHeaderActions }}>
      {children}
    </HeaderActionsContext.Provider>
  )
}
