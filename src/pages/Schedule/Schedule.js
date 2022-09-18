import React from "react";
import "./Schedule.css";
import Nav from "../../components/Nav/Nav";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";
export default function Schedule() {
    return (
        <>
        <Nav/>
        <div className="back-arrow1">
                <Link to="/home">
                <img src="https://img.icons8.com/external-kmg-design-glyph-kmg-design/32/e20813/external-back-arrow-kmg-design-glyph-kmg-design.png"/><span>Back</span>
                </Link>
                
        </div>
        <div>
            <h2 className="title">SCHEDULE</h2>
            <div className="table_container">
                <table className="schedule_table">
                    <tr>
                        <th>Event</th>
                        <th>Round</th>
                        <th>Time</th>
                    </tr>
                    <tr>
                        <th colSpan="3">Technical</th>
                    </tr>
                    <tr>
                        <td rowSpan="3" className="row_1">
                        Kode Git Fiesta (KGF)
                        </td>
                        <td>ROUND 1(29/09/2022)</td>
                        <td>9:30 AM</td>
                    </tr>
                    <tr>
                        <td>ROUND 2(29/09/2022)</td>
                        <td>11:00 AM</td>
                    </tr>
                    <tr>
                        <td>ROUND 3(29/09/2022)</td>
                        <td>1:30 PM</td>
                    </tr>
                    
                    <tr>
                        <td rowSpan="4" className="row_1">
                            Thegidi
                        </td>
                        <td>ROUND 1(29/09/2022)</td>
                        <td>09:30 AM</td>
                    </tr>
                    <tr>
                        <td>ROUND 2(29/09/2022)</td>
                        <td>11:00 AM</td>
                    </tr>
                    <tr>
                        <td>ROUND 3(29/09/2022)</td>
                        <td>01:00 PM</td>
                    </tr>
                    
                    <tr>
                        <td>ROUND 4(29/09/2022)</td>
                        <td>02:00 PM</td>
                    </tr>
                    <tr>
                        <td className="row_1">Unknown.Fig</td>
                        <td>ROUND 1(28/09/2022)</td>
                        <td>10:00 AM</td>
                    </tr>
                    <tr>
                        <td rowSpan="2" className="row_1">
                            Playsment
                        </td>
                        <td>ROUND 1(28/09/2022)</td>
                        <td>10:00 AM</td>
                    </tr>
                    <tr>
                        <td>ROUND 2(28/09/2022)</td>
                        <td>1:30 PM</td>
                    </tr>
                    <tr>
                        <th colSpan="3">Non Technical</th>
                    </tr>
                    <tr>
                        <td rowSpan="3" className="row_1">
                        Adzap
                        </td>
                        <td>ROUND 1(29/09/2022)</td>
                        <td>
                            09:30 AM
                        </td>
                    </tr>
                    <tr>
                        <td>ROUND 2(29/09/2022)</td>
                        <td>11:00 AM</td>
                    </tr>
                    <tr>
                        <td>ROUND 3(29/09/2022)</td>
                        <td>01:30 PM</td>
                    </tr>
                    <tr>
                        <td rowSpan="3" className="row_1">
                            Adapt Tunes
                        </td>
                        <td>ROUND 1(28-09-2022)</td>
                        <td>10:00 AM</td>
                    </tr>
                    <tr>
                        <td>ROUND 2(28-09-2022)</td>
                        <td>01:00 PM</td>
                    </tr>
                    <tr>
                        <td>ROUND 3(28-09-2022)</td>
                        <td>02:30 PM</td>
                    </tr>
                    <tr>
                        <td rowSpan="1" className="row_1">
                            Gaming (Pubg & Valo)
                        </td>
                        <td>Round 1(28-09-2022)</td>
                        <td>10:00 AM</td>
                    </tr>
                    
                    <tr>
                        <td rowSpan="1" className="row_1">
                            Cooking
                        </td>
                        <td>ROUND 1(29-09-2022)</td>
                        <td>09:30 AM</td>
                    </tr>
                    
                    <tr>
                        <th colSpan="3">Hackathon</th>
                    </tr>
                    <tr>
                        <td className="row_1">Code RED</td>
                        <td colSpan="2">28-09-2022(10 AM) to 29-09-2022(10 AM)</td>
                    </tr>
                </table>
            </div>
        </div>
        <Footer/>
        </>
    );
}
