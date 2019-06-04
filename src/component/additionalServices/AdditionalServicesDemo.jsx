import React from 'react';
import ExpandCollapse from "../basicServices/ExpandCollapse";
import {additionalServices} from "./additionalServices";
import OfferHeader from '../basicServices/OfferHeader';
import OfferDetails from '../basicServices/OfferDetails';

export default function AdditionalServicesDemo() {
    return(
        <div>
            <ExpandCollapse />
            <div className="scrollGroup">
				<div className="form-group">
                    <OfferDetails selectedOffers={additionalServices}/>
                </div>
            </div>
        </div>
    )
}