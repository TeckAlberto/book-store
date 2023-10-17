import { useContext } from "react"
import { ApplicationContext } from "../context/ApplicationProvider"
export default function useApplication() {
    const useApplication = useContext(ApplicationContext)
  
    return useApplication
}
