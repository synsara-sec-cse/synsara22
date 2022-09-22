import React from "react";
import "./Event-details.css";
import Nav from "../../components/Nav/Nav";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";
import { ReactComponent as LeftArrowSVG } from "../../static/arrow-left.svg";


function EventDetails({ eventDetail }) {
    return (
        <div>
            <Nav/> 
        <div style={{ overflow: "hidden" }}>
            <div className="back-arrow">
                <Link to={`/${eventDetail.eventType}`}>
                <img src="https://img.icons8.com/external-kmg-design-glyph-kmg-design/32/e20813/external-back-arrow-kmg-design-glyph-kmg-design.png"/><span>Back</span>
                </Link>
            </div>
            <div className="mobile-img-con">
                <img className="mobile-img" src={eventDetail.eventPosterMob}></img>
            </div>
            <div className="mobile-reg-btn">
            {eventDetail.eventClosed ? (
                                <b className="mob-cld">
                                    <i>Registration closed</i>
                                </b>
                            ) : (
                             <a target="_blank" href={eventDetail.eventUrl}><button className="event__btn" id="register"><span>Register</span></button></a>
                            )}
            </div>
            <div id="event-details-component" data-aos="fade-up" data-aos-duration="300">
                <div id="event-details">
                    <div className="flt-btn">
                    {eventDetail.eventClosed ? (
                                <b className="cld1">
                                    <i>Registration closed</i>
                                </b>
                            ) : (
                             <a target="_blank" href={eventDetail.eventUrl}><button className="event__btn reg-btn" id="register"><span>Register</span></button></a>
                            )}
                    </div>
                    <div className="event-top">
                        <div id="event-title-info">
                            <h2 id="event-title">{eventDetail.eventTitle}</h2>
                            <h5 id="event-name">{eventDetail.eventName}</h5>
                            <div id="event-tagline">{eventDetail.eventTagline}</div>
                            <p id="event-description" dangerouslySetInnerHTML={{ __html: eventDetail.eventDescription }}></p>
                            <div id="event-description"><b>Mode: <i style={{color: "#ddc806"}}>{eventDetail.mode}</i></b></div>
                            {eventDetail.venue ? (     
                            <div id="event-description"><b>Venue</b>: {eventDetail.venue}</div>) : (<div></div>)}
                            <div id="event-description"><b>Event Date</b>: {eventDetail.EventDate}</div>
                            <div id="event-description"><b>Reporting Time</b>: {eventDetail.ReportingTime}</div>
                            <div id="event-description"><b>Event Time</b>: {eventDetail.EventTime}</div>
                        </div>
                        {eventDetail.eventRounds.map((round, idx) => (
                            <div className="round-rules" key={idx}>
                                <h5>{round.roundName}</h5>
                                <ul>
                                    {round.roundRules.map((rule, index) => (
                                        <li key={index}>
                                            {(/^[A-Z]$/i.test(rule[0]) ? rule[0].toUpperCase() : rule[0]) + rule.slice(1)}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    <div className="event-bottom">
                        <div id="event-description">
                            <b>Winners</b>: {eventDetail.Winners}
                        </div>
                        <div id="event-description">
                            <b>Prize</b>: {eventDetail.prize}
                        </div>
                        <div id="event-description">
                            <b>Last date for registration: <i style={{color: "#ddc806"}}>{eventDetail.eventCloseDate}</i></b>
                        </div>

                        <div id="query" style={{ marginRight: "4px", fontSize: "14px" }}><b style={{color: "#ddc806"}}>For queries, contact:</b></div>
                        <div id="event-queries-list">
                            {eventDetail.coordinatorDetails.map((coordinator, index) => (
                                <div id="event-queries" key={index}>
                                    <b>{coordinator.eventCoordinatorName}</b>
                                    <pre> </pre>
                                    <a id="con-link" href={"tel:" + coordinator.eventCoordinatorNumber}>{coordinator.eventCoordinatorNumber}</a>
                                </div>
                            ))}
                        </div>

                        <div id="button-holder">
                            {eventDetail.eventClosed ? (
                                <b className="cld1">
                                    <i>Registration closed</i>
                                </b>
                            ) : (
                             <a target="_blank" href={eventDetail.eventUrl}><button className="event__btn reg-btn" id="register"><span>Register</span></button></a>
                            )}
                            <Link to={`/${eventDetail.eventId}Brochure`}><button className="event__btn" id="download"><span>Download Brochure</span></button></Link>

                        </div>
                    </div>
                </div>

                <img id="event-image" src={eventDetail.eventPoster} alt="event-poster" />
            </div>
        </div>
        <Footer/>
        </div>
    );
}

export default EventDetails;