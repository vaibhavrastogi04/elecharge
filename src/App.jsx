import { useState } from "react";
import Navbar from "./components/Navbar/Navbar.jsx";
import "./App.scss";

const App = () => (
  <>
    <section>
      <Navbar />
    </section>
    <section>Hero</section>
    <section>Services</section>
    <section>Sustainability</section>
    <section>Features and Benefits</section>
  </>
);

export default App;
