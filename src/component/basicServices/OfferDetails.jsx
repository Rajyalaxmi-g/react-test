import React from "react";
import OfferHeader from "./OfferHeader";
import OfferSection from "./OfferSection";
import OfferChildSection from "./OfferChildSection";
import SelectedOffer from "./SelectedOffer";
import OfferParent from "./OfferParent";

var currentService;
export default class OfferDetails extends React.Component {
    render() {
        console.log("this.props>offer = ", this.props);
        console.log("hello from basic servicessssssssssssssss");
        console.log(this.props.updateQuote);

        return (
            <div className="spVideoInternet">
                <div className="spSelectedOffer">
                    <div className="spVHeaderIcon">
                        <span className="fa fa-minus-square-o fa-lg" />
                    </div>
                    <div className="spVHeaderLabel">
                        <div className="form-group">
                            <div className="display">
                                <label>
                                    {this.props.offer.offerName}
                                    <span
                                        className="fa fa-info-circle fa-lg"
                                        id="color: rgb(0, 90, 132); padding-left: 0.5em; cursor: pointer;"
                                    />
                                </label>
                            </div>
                            <div className="displayDropdown" />
                        </div>
                    </div>
                </div>

                <div className="spDoublePlay">
                    <div className="spVideoInternet">
                        {this.props.offer.basicServices.map(service => {
                            currentService = service;
                            return (
                                <div>
                                    <OfferHeader service={service} />

                                    {service.services.map((level1Service, service) => {
                                        return (
                                            <>
                                                <OfferParent
                                                    label={level1Service.label}
                                                    price={level1Service.price}
                                                    isDefault={level1Service.default}
                                                    level={level1Service.level}
                                                    updateQuote={this.props.updateQuote}
                                                    basicServices={this.props.offer.basicServices}
                                                />
                                                {level1Service.children &&
                                                    level1Service.children.map(level2Service => {
                                                        return (
                                                            <>
                                                                <OfferParent
                                                                    label={level2Service.label}
                                                                    price={level2Service.price}
                                                                    isDefault={level2Service.default}
																	level={level2Service.level}
																	basicServices={this.props.offer.basicServices}																	
                                                                />
                                                                {level2Service.children &&
                                                                    level2Service.children.map(level3Service => {
                                                                        return (
                                                                            <>
                                                                                <OfferParent
                                                                                    label={level3Service.label}
                                                                                    price={level3Service.price}
                                                                                    isDefault={level3Service.default}
																					level={level3Service.level}
																					basicServices={this.props.offer.basicServices}																					
                                                                                />
                                                                                {level3Service.children &&
                                                                                    level3Service.children.map(
                                                                                        level4Service => {
                                                                                            return (
                                                                                                <>
                                                                                                    <OfferParent
                                                                                                        label={
                                                                                                            level4Service.label
                                                                                                        }
                                                                                                        price={
                                                                                                            level4Service.price
                                                                                                        }
                                                                                                        isDefault={
                                                                                                            level4Service.default
                                                                                                        }
                                                                                                        level={
                                                                                                            level4Service.level
																										}
																										basicServices={this.props.offer.basicServices}																										
                                                                                                    />
                                                                                                </>
                                                                                            );
                                                                                        }
                                                                                    )}
                                                                            </>
                                                                        );
                                                                    })}
                                                            </>
                                                        );
                                                    })}
                                            </>
                                        );
                                    })}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        );
    }
}