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

            <div id="event-details-component" data-aos="fade-up" data-aos-duration="300">
                <div id="event-details">
                    <div className="event-top">
                        <div id="event-title-info">
                            <h2 id="event-title">{eventDetail.eventTitle}</h2>
                            <h5 id="event-tagline">{eventDetail.eventTagline}</h5>
                            <p id="event-description" dangerouslySetInnerHTML={{ __html: eventDetail.eventDescription }}></p>
                            <div><b>Mode: <i>{eventDetail.mode}</i></b></div>
                            <div><b>Venue</b>: {eventDetail.venue}</div>
                            <div><b>Event Date</b>: {eventDetail.EventDate}</div>
                            <div><b>Reporting Time</b>: {eventDetail.ReportingTime}</div>
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
                        <div>
                            <b>winners</b>: {eventDetail.Winners}
                        </div>
                        <div>
                            <b>prize</b>: {eventDetail.prize}
                        </div>
                        <div id="event-date">
                            <b>Last date for registration: <i>{eventDetail.eventCloseDate}</i></b>
                        </div>
                        <div style={{ marginRight: "4px", fontSize: "14px" }}>For Queries:</div>
                        <div id="event-queries-list">
                            {eventDetail.coordinatorDetails.map((coordinator, index) => (
                                <div id="event-queries" key={index}>
                                    <b>{coordinator.eventCoordinatorName}</b>
                                    <pre> </pre>
                                    <a href={"tel:" + coordinator.eventCoordinatorNumber}>{coordinator.eventCoordinatorNumber}</a>
                                </div>
                            ))}
                        </div>

                        <div id="button-holder">
                            {eventDetail.eventClosed ? (
                                <b>
                                    <i>Registration closed</i>
                                </b>
                            ) : (
                                <a target="_blank" href={eventDetail.eventUrl} rel="noreferrer">
                                    <Button primary>REGISTER</Button>
                                </a>
                            )}
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