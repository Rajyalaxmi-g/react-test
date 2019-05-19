import React from "react";
import OfferHeader from "./basicServices/OfferHeader";
import OfferParent from "./basicServices/OfferParent";

export default class DoublePlay extends React.Component {

    render(){
        return(

            <div>
                <div className="spDoublePlay">
                    <div className="spVideoInternet">
                        <OfferHeader label="Spectrum Video" />
                        <div className="spDoublePlay">
                            <div className="spVideoInternet">
                                <OfferParent/>
                                <div className="spDoublePlay">
                                    <div className="spVideoInternet"></div>
                                </div>
                            </div>
                        </div>
                    </div>










                    <div className="spVideoInternet">

                    </div>
                </div>
            </div>
        )
    }
}