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
import homepage from"./homepagefinal.gif";
const Home = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(!loading);
    setTimeout(() => {
      setLoading(loading);
    }, 2950);
  }, []);

  return(
    <>
     { loading?(
      // <div className="loader-container">
      //   <div className="spinner"></div>
      <div class="flex justify-center items-center" >
      {/* <img
        src="homepage.gif"
        class="max-w-sm h-auto shadow-lg"
        alt=""
      /> */}
      {/* <img src={homepage} class="max-w-full h-full"/> */}
      <div className="loader-container">
        <img src={homepage} class="max-w-full h-full"/>
      </div>
      </div>
):(
  
  
    <div style={{backgroundImage: `url(${Bgweb})`,backgroundSize: 'contain',}}>
      <Nav/>
      <br/><br/>
      
      <Home_main/>
      <br></br>
      <br/><br/>
      <br/>
      <Aboutinst/>
      <Aboutdept/>
      
      <Aboutsynsara/>
      <br/>
      <Footer/>
      </div>
      
      
)};
  </>   
  );
}

export default Home;
