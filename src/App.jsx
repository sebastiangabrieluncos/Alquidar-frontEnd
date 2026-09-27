import { useState } from "react";
import "./App.css";
import NavbarComponent from "./components/Navbar";
import FooterComponent from "./components/Footer";

function App() {
  return (
    <>
      <NavbarComponent />

      <div className="container py-4">
        <h1>Alquidar</h1>
        <p>Sistema de gestión de alquileres</p>
      </div>

      <FooterComponent />
    </>
  );
}

export default App;