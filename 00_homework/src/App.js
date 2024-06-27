import { useState } from "react";
import { createContext } from "react";
import Page from "./Page";
import "./App.css";

function App() {

  const [isDark,setIsDark] = useState(false);

  

        return (
            <DarkModeContext.Provider value={{isDark,setIsDark}}>
                <Page/>
            </DarkModeContext.Provider>
        );

}

export const DarkModeContext = createContext(null);
export default App;

