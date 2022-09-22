import React, { useEffect,useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Particles from "react-particles-js";
import Aos from "aos";
import "aos/dist/aos.css";
import "./App.css";
import "./pdf";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Events from "./pages/Events/Events";
import Contact from "./pages/Contact/contact.jsx";
import Schedule from "./pages/Schedule/Schedule";
import EventDetails from "./pages/Event-Details/Event-details";
import Pdf from "./pdf.js";
import events from "./events.json";
import TechnicalEvents from "./pages/Events/TechnicalEvents";
import NonTechnicalEvents from "./pages/Events/NonTechnicalEvents";
import homepage from"./pages/Home/homepagefinal.gif";
import Brochure from "./pages/Event-Details/Brochure";

function App() {
  useEffect(() => {
    Aos.init({});
  }, []);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2950);
  },[]);
  return (
    <>
    
      <Router>
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
        <div className="body">
        
          <Switch>
          
            <Route path="/" exact component={Home}  />
            <Route path="/events" component={Events} />
            <Route path="/contact" component={Contact} />
            <Route path="/schedule" component={Schedule} />
            <Route path="/pdf" component={Pdf} />
            <Route path="/non-technical" component={NonTechnicalEvents} />
            <Route path="/technical" component={TechnicalEvents} />
            {events.map((event) => (
              <Route path={`/${event.eventId}`} key={event.eventId}>
                <EventDetails eventDetail={event} />
              </Route>
            ))}
            {
              events.map((event) => (
                <Route path={`/${event.eventId}Brochure`}>
                  <Brochure eventDetail={event} />
                </Route>
              ))
            }
            <Redirect path="*" to="/" />
            
          </Switch>
          
        </div>
)};
        <Particles
         params={{
            "particles":{
               "number":{
               "value":35
            }, 
            "size":{
               "value":5
            },
            "color":{
               "value":"#e90432"
            }
         },
         "interactivity":{
            "events":{
               "onhover":{
                  "enable":true,
                  "node":"repulse"
               }     
             }
         },
         }} 
         style={{
            top: 0,
            left: 0,
            zIndex: -100,
            height: "100%",
            width: "100%",
            position: "fixed",
          }}
         />
        
      </Router>

    </>
  );
}

export default App;
