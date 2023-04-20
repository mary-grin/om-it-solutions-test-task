import { useContext } from "react";

import "bootstrap/dist/css/bootstrap.min.css";

import Header from "@/components/Header/Header";
import Navbar from "@/components/Navbar/Navbar";
import { themeContext } from "@/context/ThemeContext";

import "./App.scss";
import ServicesBlock from "@/components/ServicesBlock/ServicesBlock";
import FilterContext from "@/context/FilterContext";

function App() {
  const { theme } = useContext(themeContext);

  return (
    <div className="page" id={theme}>
      <Header />
      <main className="main">
        <Navbar />
        <FilterContext>
          <ServicesBlock/>
        </FilterContext>
      </main>
    </div>
  );
}

export default App;
