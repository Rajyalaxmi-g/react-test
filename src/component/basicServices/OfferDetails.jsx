import React from 'react';
import OfferHeader from './OfferHeader';
import OfferSection from './OfferSection';
import OfferChildSection from './OfferChildSection';
import SelectedOffer from './SelectedOffer';
import OfferParent from "./OfferParent";
//import _ from 'lodash';

export default function OfferDetails(props) {
	console.log("props>offer = ",props.offer);
	return (
		<div>
			<div className="spSelectedOffer">
                    <div className="spVHeaderIcon">
                        <span className="fa fa-minus-square-o fa-lg"></span>
                    </div>
                    <div className="spVHeaderLabel">
                        <div className="form-group">
                            <div className="display">
                                <label>
                                {props.offer.offerName}
                                <span
                                    className="fa fa-info-circle fa-lg"
                                    id="color: rgb(0, 90, 132); padding-left: 0.5em; cursor: pointer;"
                                />
                                </label>
                            </div>
                            <div className="displayDropdown"></div>
                        </div>
                    </div>
                </div>

				<div className="spDoublePlay">
					<div className="spVideoInternet">

					
					{props.offer.basicServices.map(service => {
						console.log(`**********service-${service.serviceName}*********`);
						console.log(service);

						return (
							<div>
								<OfferHeader service={service} />

								{service.services.map(service => {
                                    console.log(`----children = ${service.children.label} `);
									return (
										<>
											{/* <OfferSection label={service.label}  price={service.price} isDefault={service.default} /> */}
											<OfferParent label={service.label}  price={service.price} isDefault={service.default} />
                                            <OfferChildSection label={service.children[0].label} price={service.children[0].price} isDefault={service.children[0].default} />
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
