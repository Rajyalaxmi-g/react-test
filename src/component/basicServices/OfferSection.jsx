import React from 'react';
import OfferParent from './OfferParent';

export default function OfferSection({label, price, isDefault}) {
	return (
		<div class="spVSection">
			<div class="spVideoInternet">
				<OfferParent />
				{/* <div class="spVideoInternet">
					<div class="spParent">
						<div class="spVHeaderIcon">
							<span class="fa fa-minus-square-o fa-lg" />
						</div>
						<div class="spVHeaderLabel">
							<div class="form-group">
								<div class="formGroupStyle">
									<div class="checkboxStyle">
										<span>
											<input
												class="checkboxIcon"
												type="checkbox"
												disabled=""
												value="Spectrum TV"
											/>
											<span class="checkboxLabel">Spectrum TV Select</span>
										</span>
										<span class="infoCircle" />
									</div>
								</div>
							</div>
						</div>
						<div class="spVHeaderPrice">
							<span class="spVHeaderChildPriceStyle">$0.00</span>
						</div>
					</div>
					<div class="spVSection">
						<div class="spVideoInternet">
							<div class="spChild">
								<div class="spVHeaderIcon">
									<span class="fa fa-minus-square-o fa-lg" />
								</div>
								<div class="spVHeaderLabel">
									<div class="form-group">
										<div class="formGroupStyle">
											<div class="checkboxStyle">
												<span>
													<input
														class="checkboxIcon"
														type="checkbox"
														disabled=""
														value="Spectrum TV"
													/>
													<span class="checkboxLabel">Spectrum TV Silver</span>
												</span>
											</div>
										</div>
									</div>
								</div>
								<div class="spVHeaderPrice">
									<span class="spVHeaderChildPriceStyle">$20.00</span>
								</div>
							</div>
							<div class="spVideoInternet">
								<div>
									<div class="spVHeaderIcon">
										<span class="fa fa-minus-square-o fa-lg" />
									</div>
									<div class="spVHeaderLabel">
										<div class="form-group">
											<div class="formGroupStyle">
												<div class="checkboxStyle">
													<span>
														<input
															class="checkboxIcon"
															type="checkbox"
															disabled=""
															value="Spectrum TV"
														/>
														<span class="checkboxLabel">Spectrum TV Gold</span>
													</span>
												</div>
											</div>
										</div>
									</div>
									<div class="spVHeaderPrice">
										<span class="spVHeaderChildPriceStyle">$20.00</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div> */}
			</div>
		</div>
	);
}
