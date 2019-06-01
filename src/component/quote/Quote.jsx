import React from "react";
import QuoteOfferHeader from "./QuoteOfferHeader";
import QuoteOfferDetails from "./QuoteOfferDetails";
import "../../assets/styles/quote.css";

class Quote extends React.Component {
    render() {
        console.log("selected offers.................");

        console.log(this.props.selectedOffers);

        return (
            <div className="row">
                <div className="col-xs-12">
                    <div className="quoteServicesHeading">
                        <div className="row">
                            <div className="col-xs-12">
                                <div className="styleQuoteServices">
                                    <div className=" styleQuoteServices1">
                                        <div className="col-xs-7 styleQuoteServicesName">Quote Services</div>
                                        <div className="col-xs-2 styleQuoteServicesdrop">
                                            <button>
                                                <span className="fa fa-chevron-down" />
                                            </button>
                                        </div>
                                        <div className="col-xs-3">
                                            <div className="styleQuoteServicesPrice">$161.95</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr className="quotehrStyle" />
                    </div>

                    <div>
                        {this.props.selectedOffers.map(selectedOffer => {
                            return (
                                <div className="quoteOffer">
                                    <div className="row">
                                        <div className="col-xs-12">
                                            <QuoteOfferHeader label={selectedOffer.offerName} />
                                            <div className="quoteLobPlay1">
                                                <QuoteOfferDetails selectedOffer={selectedOffer} />
                                                
                                                <hr className="border-width: 0px; margin: 5px 0px 2px; height: 1px; background-color: rgb(209, 209, 209);" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        );
    }
}

export default Quote;
