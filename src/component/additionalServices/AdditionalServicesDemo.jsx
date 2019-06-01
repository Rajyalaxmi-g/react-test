import React from 'react';
import ExpandCollapse from "../basicServices/ExpandCollapse";
import BasicServicesDemo from '../basicServices/BasicServicesDemo';
import {AdditionalServices} from "./AdditionalServices";
import OfferHeader from '../basicServices/OfferHeader';
import OfferDetails from '../basicServices/OfferDetails';

export default function AdditionalServicesDemo() {
    return(
        <div>
            <ExpandCollapse />
            <div className="scrollGroup">
				<div className="form-group">
                    <OfferDetails selectedOffers={AdditionalServices}/>
                </div>
            </div>
        </div>
    )
}