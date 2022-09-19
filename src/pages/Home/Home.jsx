import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import Home_main  from "./Home_main";
import Aboutsynsara from "./Aboutsynsara";
import Aboutinst from "./Aboutinst";
import Aboutdept from "./Aboutdept";
import Nav from "../../components/Nav/Nav";
import Footer from "../../components/Footer/Footer";
import Bgweb from "./bgweb.png";

const Home = () => {
 

  return(
    <>
     
  
  
    <div style={{backgroundImage: `url(${Bgweb})`,backgroundSize: 'contain',}}>
      <Nav/>
      <br/><br/>
      
      <Home_main/>
      <br></br>
      <br/><br/>
      <br/>
      <Aboutsynsara/>
      <Aboutinst/>
      <Aboutdept/>
      
      
      <br/>
      <Footer/>
      </div>
      
      

  </>   
  );
}

export default Home;
