import React from "react";

class OfferHeader extends React.Component {

    render(){
        console.log(this.props.service);
        return(
            <div className="spVHeader">
                <div className="spVHeaderIcon">
                    <span className="fa fa-minus-square-o fa-lg"></span>
                </div>
                <div className="spVHeaderLabel">
                    <div className="form-group">
                        <div className="formGroupStyle">
                            <label className="labelStyle">{this.props.service && this.props.service.serviceName}</label>
                        </div>
                    </div>

                </div>
                <div className="spVHeaderPrice">
                    <span className="spVHeaderParentPriceStyle">{this.props.service && this.props.service.price}</span>
                </div>
            </div>
        )
    }
}
export default OfferHeader;