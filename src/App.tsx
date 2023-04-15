import './App.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "@/components/Header/Header";
import { useState, createContext } from "react"

export const ThemeContext = createContext<{ theme: string, changeTheme: () => void }>({
    theme: "light",
    changeTheme: () => {}
})

function App() {
    const [theme, setTheme] = useState<string>("light")

    const changeTheme = () => {
        setTheme(state => state === "light" ? "dark" : "light")
    }

    return (
        <ThemeContext.Provider value={{theme, changeTheme}}>
            <div className="page" id={theme}>
                <Header/>
            </div>
        </ThemeContext.Provider>
    )
}

export default App
