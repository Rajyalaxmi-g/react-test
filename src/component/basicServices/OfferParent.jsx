import React from "react";

export default class OfferParent extends React.Component {

    render(){
        return(

            <div className="spParent">
                <div className="spVHeaderIcon"><span className="fa fa-minus-square-o fa-lg"></span></div>
                <div className="spVHeaderLabel">
                    <div className="form-group">
                    <div className="formGroupStyle">
                        <div className="checkboxStyle">
                            <span>
                                <input className="checkboxIcon" type="checkbox" disabled value="Spectrum TV" />
                                <span className="checkboxLabel">Spectrum TV</span>
                            </span>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="spVHeaderPrice">
                    <span className="spVHeaderChildPriceStyle">$0.00</span>
                </div>
            </div>
        )

        }
}