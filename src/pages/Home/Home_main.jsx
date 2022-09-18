import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";
import SynsaraLogo from "../../static/synsara-logo.png";
import SynsaraLogo1 from "../../static/SYNSARA WEBSITE TEXT.png";
import TimeDisplay from "./TimeDisplay";
import "./Home_main.css";
import Bg from "./Bg.png";

const Home_main = () => {
  const countDownDate = new Date("28 September, 2022").getTime();

  const animationVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      transition: 0.5,
      opacity: 1,
    },
  };

  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      var now = new Date().getTime();
      var timeleft = countDownDate - now > 0 ? countDownDate - now : 0;
      setDays(Math.floor(timeleft / (1000 * 60 * 60 * 24)));
      setHours(
        Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      );
      setMinutes(Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60)));
      setSeconds(Math.floor((timeleft % (1000 * 60)) / 1000));
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
    <div >
      <div
        className="text-white text-center p-2 p-md-0"
        style={{
          margin: "10px auto 0px auto",
          maxWidth: "430px",
          //display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontWeight: 420,
          //overflow: "hidden",
        }}
      >
        <div
          style={{ zIndex: 10 }}
          variants={animationVariants}
          //initial="hidden"
          animate="visible"
          data-aos="fade-up"
          data-aos-duration="400"
        >
          <div
            style={{
              // fontSize:
              //   "calc(16px + (14 - 12) * ((100vw - 300px) / (1600 - 300)))",
              // textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
              // fontWeight: "600",
              fontSize:
                "calc(16px + (14 - 12) * ((100vw - 200px) / (1500 - 300)))",
              textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
              fontWeight: "200",
               fontFamily:  "Audiowide-Regular",
              //fontFamily:"Quantico-Regular",
              color: "white",
            }}
          >
            Department of Computer Science and Engineering
            <br />
            Proudly Presents
          </div>
          <br/>
          <img
            style={{ margin: "0rem 0px", maxWidth: "100%", height: "auto" }}
            src={SynsaraLogo1}
            alt="logo"
          />
          <br/>
          <div className="container">
            <div className="row text-center">
              <div className="col-3">
                <TimeDisplay dataNumber={days} timeFormat={"Days"} />
              </div>
              <div className="col-3">
                <TimeDisplay dataNumber={hours} timeFormat={"Hours"} />
              </div>
              <div className="col-3">
                <TimeDisplay dataNumber={minutes} timeFormat={"Minutes"} />
              </div>
              <div className="col-3">
                <TimeDisplay dataNumber={seconds} timeFormat={"Seconds"} />
              </div>
            </div>
          </div>

          <hr color="#6184D8" />

          <p
            className="text-left" id="typed-out"
            style={{
              fontSize:
                "calc(15.9px + (15 - 13) * ((100vw - 300px) / (1600 - 300)))",
              textAlign: "justify",
              // 
          
            }}
          >
            
            A culmination of the nation's best young minds in a contest of
            innovative thinking and exhilarating creations. Get ready to tough
            it out against competition on <strong className="font-bold" style={{color:'#bc9558,', fontSize:'18'}}>28<sup>th</sup> September and 29
            <sup>th</sup> September 2022.</strong>
          </p>

          <div className="container">
            <div className="row">
              <div className="col-12">
                <Link to="/events">
                  <Button primary>REGISTER</Button>
                </Link>
              </div> 
            </div>
          </div>  
        </div>
        <img
          // src={StarBg}
          // alt="star"
          style={{
            opacity: 0.4,
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: 1,
          }}
        />
      </div>
      </div>
    </>
  );
};

export default Home_main;
