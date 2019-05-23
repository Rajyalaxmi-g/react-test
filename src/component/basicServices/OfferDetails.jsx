import React from 'react';
import OfferHeader from './OfferHeader';
import OfferSection from './OfferSection';
import OfferChildSection from './OfferChildSection';
import SelectedOffer from './SelectedOffer';
import OfferParent from './OfferParent';


export default function OfferDetails(props) {
	console.log('props>offer = ', props.offer);
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
								{props.offer.offerName}
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
					{props.offer.basicServices.map(service => {
						return (
							<div>
								<OfferHeader service={service} />

								{service.services.map(service => {
									return (
										<>
											<OfferParent
												label={service.label}
												price={service.price}
												isDefault={service.default}
												level={service.level}
											/>
											{service.children &&
												service.children.map(level2Service => {
													return (
														<>
															<OfferParent
																label={level2Service.label}
																price={level2Service.price}
																isDefault={level2Service.default}
																level={level2Service.level}
															/>
															{level2Service.children && level2Service.children.map(level3Service => {
																return (
																	<>
																		<OfferParent
																			label={level3Service.label}
																			price={level3Service.price}
																			isDefault={level3Service.default}
																			level={level3Service.level}
																		/>
																		{level3Service.children && level3Service.children.map(level4Service => {
																			return (
																				<>
																					<OfferParent
																						label={level4Service.label}
																						price={level4Service.price}
																						isDefault={level4Service.default}
																						level={level4Service.level}
																					/>
																				</>
																			)
																		})}
																	</>
																)
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
