import React from 'react';

export default function SelectedOffer(props) {
	console.log('props>offer = ', props.offer);
	return (
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
	);
}
