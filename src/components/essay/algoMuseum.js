import React from "react"
import XenoHeader from "../header+footer/xenoHeader";
import RedBars from "../sketches/Sketch2_redBars";

const EssayAlgoMuseum = () => {
    return(
        <div>
            <div className="headerContainer">
                <XenoHeader/>
                <div className="languages_button_box">
                    <div className="button-lang">NL</div>
                    <div className="button-lang">EN</div>
                </div>
                <div>
                    <RedBars/>
                    <crypto--h1 className="center underlined">THE MUSEUM AND THE COMPUTATIONAL</crypto--h1>
                </div>
            </div>
        </div>
    );
}

export default EssayAlgoMuseum;