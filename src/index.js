import React from "react"
import ReactDOM from "react-dom/client"
import "./index.scss"
import AOS from "aos"
import 'aos/dist/aos.css';
import Burger from "./components/burger/Burger"
import Technologies from "./components/technologies/Technologies"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <div className="wrapper">
    <Burger />
    <Technologies />
  </div>
)

AOS.init({
  duration: 1400
});
