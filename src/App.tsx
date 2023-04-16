import { useContext } from "react";

import "bootstrap/dist/css/bootstrap.min.css";

import Header from "@/components/Header/Header";
import Navbar from "@/components/Navbar/Navbar";
import { Context } from "@/context/ThemeContext";

import "./App.scss";

function App() {
  const { theme } = useContext(Context);

  return (
    <div className="page" id={theme}>
      <Header />
      <main>
        <Navbar />
      </main>
    </div>
  );
}

export default App;
