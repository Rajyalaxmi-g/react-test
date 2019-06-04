import React from "react";
import OfferDetails from "./OfferDetails";
import OrderReason from "./OrderReason";
import ExpandCollapse from "./ExpandCollapse";

class BasicServices extends React.Component {
    render() {
        return (
            <div>
                <ExpandCollapse />
                <div className="scrollGroup">
                    <div className="form-group">
                        <div>
                            <OrderReason />
                            {this.props.selectedOffers.map(offer => {
                                return <OfferDetails updateQuote={this.props.updateQuote} offer={offer} />;
                            })}
                        </div>
                        <div />
                    </div>
                </div>
            </div>
        );
    }
}
export default BasicServices;
