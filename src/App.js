import React from "react";
import { LangProvider } from "./LangContext";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import Boutiques from "./components/Boutiques";
import Download from "./components/Download";
import Footer from "./components/Footer";

export default function App() {
  return (
    <LangProvider>
      <div style={{ background: "#FAF8F5", minHeight: "100vh" }}>
        <Navbar />
        <Hero />
        <HowItWorks />
        <Boutiques />
        <Download />
        <Footer />
      </div>
    </LangProvider>
  );
}
