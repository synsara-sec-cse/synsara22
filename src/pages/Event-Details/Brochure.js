import React from "react";
import KodeGitFiesta from "../../static/event-brochure/KGF - SYNSARA.pdf";
import UnknownFig from "../../static/event-brochure/UNKNOWN.fig - SYNSARA.pdf";
import Playsment from "../../static/event-brochure/PLAYSMENT - SYNSARA.pdf";
import Thegidi from "../../static/event-brochure/THEGIDI - SYNSARA.pdf";
import Ratatouille from "../../static/event-brochure/RATATOUILLE - SYNSARA.pdf";
import LetsNacho from "../../static/event-brochure/LET'S NACHO - SYNSARA.pdf";
import TheLegend from "../../static/event-brochure/THE LEGEND - SYNSARA.pdf";
import headshotpubg from "../../static/event-brochure/HEADSHOT (PUBG) -SYNSARA.pdf";
import headshotvalorant from "../../static/event-brochure/HEADSHOT(VALORANT) - SYNSARA.pdf";
import CodeRed from "../../static/event-brochure/CODE RED - SYNSARA.pdf";

export default function Brochure({eventDetail}) {
    const a=eventDetail.eventId;
  return (
    <>
    { eventDetail.eventId == "KodeGitFiesta" ? 
      (<iframe src={KodeGitFiesta} class=" h-screen w-screen " title="title" style={{marginLeft:"-60px",}} allowfullscreen></iframe>):
      (eventDetail.eventId == "UnknownFig" ?
        (<iframe src={UnknownFig} class=" h-screen w-screen " title="title" style={{marginLeft:"-60px",}} allowfullscreen></iframe>
        ):
        (eventDetail.eventId == "Playsment" ?
            (<iframe src={Playsment} class=" h-screen w-screen " title="title" style={{marginLeft:"-60px",}} allowfullscreen></iframe>
            ):
            ( eventDetail.eventId == "Thegidi" ? 
                (<iframe src={Thegidi} class=" h-screen w-screen " title="title" style={{marginLeft:"-60px",}} allowfullscreen></iframe>
                ):
                (eventDetail.eventId == "Ratatouille" ? 
                    (<iframe src={Ratatouille} class=" h-screen w-screen " title="title" style={{marginLeft:"-60px",}} allowfullscreen></iframe>
                    ):
                    (eventDetail.eventId == "LetsNacho" ? 
                        (<iframe src={LetsNacho} class=" h-screen w-screen " title="title" style={{marginLeft:"-60px",}} allowfullscreen></iframe>
                        ):
                        (eventDetail.eventId == "TheLegend" ? 
                            (<iframe src={TheLegend} class=" h-screen w-screen " title="title" style={{marginLeft:"-60px",}} allowfullscreen></iframe>
                            ):
                            (eventDetail.eventId == "headshot-pubg" ? 
                                (<iframe src={headshotpubg} class=" h-screen w-screen " title="title" style={{marginLeft:"-60px",}} allowfullscreen></iframe>
                                ):
                                (eventDetail.eventId == "headshot-valorant" ? 
                                    (<iframe src={headshotvalorant} class=" h-screen w-screen " title="title" style={{marginLeft:"-60px",}} allowfullscreen></iframe>
                                    ):
                                    (<iframe src={CodeRed} class=" h-screen w-screen " title="title" style={{marginLeft:"-60px",}} allowfullscreen></iframe>)
                                )
                            )
                        )
                    )
                )
            )
        )
      )
    }
    </>
  );
}