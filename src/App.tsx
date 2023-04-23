import { useContext } from "react";

import "bootstrap/dist/css/bootstrap.min.css";

import Header from "@/components/Header/Header";
import Navbar from "@/components/Navbar/Navbar";
import { themeContext } from "@/context/ThemeContext";

import "./App.scss";
import ServicesBlock from "@/components/ServicesBlock/ServicesBlock";
import FilterContext from "@/context/FilterContext";
import DesignLearnBlock from "@/components/DesignLearnBlock/DesignLearnBlock";
import BenefitsBlock from "@/components/BenefitsBlock/BenefitsBlock";
import FormBlock from "@/components/FormBlock/FormBlock";
import Footer from "@/components/Footer/Footer";

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
        <DesignLearnBlock/>
        <BenefitsBlock/>
        <FormBlock/>
        <Footer/>
      </main>
    </div>
  );
}

export default App;
