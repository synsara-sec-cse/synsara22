import React from "react";
import File from "./static/social/SAIRAM-BUS-ROUTE.pdf";
import Nav from "./components/Nav/Nav.js";
export default function Pdf() {
  return (
    <>
      {/* <Nav/>
      <div className="text-white" style={{textAlign: "center,"}}>
      <h1>Bus Route to Reach</h1>
      <h2>Sri Sairam Engineering College</h2>
      <h4><i>Sai Leo Nagar, West Tambaram, Chennai - 600044</i></h4>
      </div>
      <br/> */}

      <iframe src={File} class=" h-screen w-screen " title="title" style={{marginLeft:"-60px",}} allowfullscreen></iframe>
    </>
  );
}