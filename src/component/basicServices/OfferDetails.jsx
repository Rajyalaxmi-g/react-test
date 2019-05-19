import React from "react";
import OfferHeader from "./OfferHeader";
import _ from 'lodash';

export default function OfferDetails(props) {
    console.log(props.offer)
    return(
        <div className="selectedOffer">
            <div className="form-group">
                <div className="display: inline-block;">
                    <label className="text-align: right; margin-top: 7px;">
                    {props.offer.offerName}
                    <span className="fa fa-info-circle fa-lg" id="color: rgb(0, 90, 132); padding-left: 0.5em; cursor: pointer;"></span>
                    </label>
                    {props.offer.basicServices.map(service => {
                        return(
                            <>
                            <OfferHeader service={service}/>
                            {_.forIn(service.services, (value, key) => {
                                console.log("*****************");
                                
                                console.log(value);
                                console.log(key);
                                
                                
                                return (
                                    <div>
                                        <div>{value.label}</div>
                                        <div>{value.price}</div>
                                        <div>Default? {value.default}</div>
                                    </div>
                                )
                            })}
                            </>
                        )
                    }) }
                    
                </div>
            </div>
        </div>
    )
}