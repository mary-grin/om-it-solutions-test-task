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
import ChatBlock from "@/components/ChatBlock/ChatBlock";
import { createPortal } from "react-dom";

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
        {createPortal(<ChatBlock/>, document.getElementById('chat')!)}
      </main>
    </div>
  );
}

export default App;
