import React,{useEffect, useState} from "react";
import ScrollToTop from "./components/ScrollToTop";
import ScrollReveal from "scrollreveal";
import NavBar from "./components/Navbar";
import Home from "./components/Home";
import Free from "./components/Free";
import Clients from "./components/Clients";
import SuperRare from "./components/SuperRare";
import Release from "./components/Release";
import Like from "./components/Like";
import SignUp from "./components/SignUp";
import Footer from "./components/Footer";
import "./scss/index.scss"

function App() {
  const [theme,setTheme] = useState("dark");
  const changeTheme = () =>{
    theme ==="dark" ?setTheme("light") :setTheme("dark");
  }
  useEffect(() => {
    const registerAnimations = () => {
      const sr = ScrollReveal({
        origin: "bottom",
        distance: "80px",
        duration: 2000,
        reset: false,
      });
      sr.reveal(
        `
        nav,
        .home,
        .free,
        .clients,
        .super-rare,
        .releases,
        .like,
        .signup,
        footer
    `,
        {
          interval: 500,
        }
      );
    };
    registerAnimations();
  }, []);
  window.setTimeout(() => {
    const home = document.getElementsByClassName("home");
    home[0].style.transform = "none";
    const nav = document.getElementsByTagName("nav");
    nav[0].style.transform = "none";
  }, 1500);
  return (
    <div className="app-container" data-theme={theme}>
     <ScrollToTop /> 
     <NavBar changeTheme={changeTheme} currentTheme={theme}/>
      <Home />
      <Free /> 
      <Clients /> 
      <SuperRare /> 
      <Release /> 
      <Like /> 
      <SignUp /> 
      <Footer /> 
    </div>
  );
}

export default App