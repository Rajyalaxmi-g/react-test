import React from 'react';
import OfferHeader from './basicServices/OfferHeader';
import OfferDetails from './basicServices/OfferDetails';
import '../bs.css';

class BasicServicesDemo extends React.Component {
	render() {
		return (
			<div id="offer-selection">
				<div className="leftScreen">
					<div>
						<div className="ineerBox panel panel-default">
							<div className="panel-body">
								<fieldset>
									<div>
										<div className="row" />
									</div>
									<div>
										<div className="orderReason">
											<div className="form-group form-group-className">
												<label>* Order Reason(s)</label>
												<div className="multiselectComponent">
													<div className="dropdown">
														<select>
															<option value="">--Please choose an option--</option>
															<option value="Inbound Sales">Inbound Sales</option>
															<option value="Technician On Site">
																Technician On Site
															</option>
															<option value="Online Sale">Online Sale</option>
														</select>
													</div>
												</div>
											</div>
										</div>
										{this.props.selectedOffers.map(offer => {
											return <OfferDetails offer={offer} />;
										})}
									</div>
									<div>
										<div className="spDoublePlay">
											<div className="spVideoInternet">
												<OfferHeader />

												<div className="spVSection">
													<div className="spVideoInternet">
														<div className="spParent">
															<div className="spVHeaderIcon">
																<span className="fa fa-minus-square-o fa-lg" />
															</div>
															<div className="spVHeaderLabel">
																<div className="form-group">
																	<div className="formGroupStyle">
																		<div className="checkboxStyle">
																			<span>
																				<input
																					className="checkboxIcon"
																					type="checkbox"
																					disabled
																					value="Spectrum TV"
																				/>
																				<span className="checkboxLabel">
																					Spectrum TV
																				</span>
																			</span>
																		</div>
																	</div>
																</div>
															</div>
															<div className="spVHeaderPrice">
																<span className="spVHeaderChildPriceStyle">$0.00</span>
															</div>
														</div>
														<div className="spVideoInternet">
															<div className="spParent">
																<div className="spVHeaderIcon">
																	<span className="fa fa-minus-square-o fa-lg" />
																</div>
																<div className="spVHeaderLabel">
																	<div className="form-group">
																		<div className="formGroupStyle">
																			<div className="checkboxStyle">
																				<span>
																					<input
																						className="checkboxIcon"
																						type="checkbox"
																						disabled
																						value="Spectrum TV"
																					/>
																					<span className="checkboxLabel">
																						Spectrum TV Select
																					</span>
																				</span>
																				<span
																					className="fa fa-info-circle fa-lg"
																					className="infoCircle"
																				/>
																			</div>
																		</div>
																	</div>
																</div>
																<div className="spVHeaderPrice">
																	<span className="spVHeaderChildPriceStyle">
																		$0.00
																	</span>
																</div>
															</div>
															<div className="spVSection">
																<div className="spVideoInternet">
																	<div className="spChild">
																		<div className="spVHeaderIcon">
																			<span className="fa fa-minus-square-o fa-lg" />
																		</div>
																		<div className="spVHeaderLabel">
																			<div className="form-group">
																				<div className="formGroupStyle">
																					<div className="checkboxStyle">
																						<span>
																							<input
																								className="checkboxIcon"
																								type="checkbox"
																								disabled
																								value="Spectrum TV"
																							/>
																							<span className="checkboxLabel">
																								Spectrum TV Silver
																							</span>
																						</span>
																					</div>
																				</div>
																			</div>
																		</div>
																		<div className="spVHeaderPrice">
																			<span className="spVHeaderChildPriceStyle">
																				$20.00
																			</span>
																		</div>
																	</div>
																	<div className="spVideoInternet">
																		<div>
																			<div className="spVHeaderIcon">
																				<span className="fa fa-minus-square-o fa-lg" />
																			</div>
																			<div className="spVHeaderLabel">
																				<div className="form-group">
																					<div className="formGroupStyle">
																						<div className="checkboxStyle">
																							<span>
																								<input
																									className="checkboxIcon"
																									type="checkbox"
																									disabled
																									value="Spectrum TV"
																								/>
																								<span className="checkboxLabel">
																									Spectrum TV Gold
																								</span>
																							</span>
																						</div>
																					</div>
																				</div>
																			</div>
																			<div className="spVHeaderPrice">
																				<span className="spVHeaderChildPriceStyle">
																					$20.00
																				</span>
																			</div>
																		</div>
																	</div>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>

											<div className="spVideoInternet">
												<OfferHeader />
												"/*{' '}
												<div className="spVHeader">
													<div className="spVHeaderIcon">
														<span className="fa fa-minus-square-o fa-lg" />
													</div>
													<div className="spVHeaderLabel">
														<div className="form-group">
															<div className="formGroupStyle">
																<label className="labelStyle">Spectrum Internet</label>
															</div>
														</div>
													</div>
													<div className="spVHeaderPrice">
														<span className="spVHeaderParentPriceStyle">$44.99</span>
													</div>
												</div>{' '}
												*/"
												<div className="spVSection">
													<div className="spVideoInternet">
														<div className="spParent" />
													</div>
												</div>
											</div>

											<div className="spVideoInternet">
												<div className="spVHeader">
													<div className="spVHeaderIcon">
														<span className="fa fa-minus-square-o fa-lg" />
													</div>
													<div className="spVHeaderLabel">
														<div className="form-group">
															<div className="formGroupStyle">
																<label className="labelStyle">Spectrum Voice</label>
															</div>
														</div>
													</div>
													<div className="spVHeaderPrice">
														<span className="spVHeaderParentPriceStyle">$9.99</span>
													</div>
												</div>
												<div className="spVSection">
													<div className="spVideoInternet">
														<div className="spParent" />
													</div>
												</div>
											</div>
										</div>
									</div>
								</fieldset>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
export default BasicServicesDemo;
