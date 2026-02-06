"use client"

import {
  useState,
  createContext,
  ReactNode,
  useContext,
  useCallback,
  useMemo,
} from "react"

const ToggleContext = createContext({
  isOpen: false,
  toggle: () => {},
})

export const ToggleProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = useCallback(() => {
    setIsOpen((prev) => !prev)
  }, [])

  const value = useMemo(() => {
    return { isOpen, toggle }
  }, [isOpen, toggle])

  return (
    <ToggleContext.Provider value={value}>{children}</ToggleContext.Provider>
  )
}

export const useToggle = () => {
  return useContext(ToggleContext)
}
