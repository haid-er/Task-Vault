import { useContext } from "react"
import AuthContext from "../context/AuthContext"

export default function ToggleButton(){
    const ctx = useContext(AuthContext)
    return (
        <>
            <button onClick={ctx.setIsDark} className="mt-2">
                <img src={ctx.isDark ? "/day-mode.png" : "/light-mode.png"} alt="dark mode activation image" width={30}/>
            </button>
        </>
    )
}