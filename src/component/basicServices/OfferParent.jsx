import React from 'react';

// export default class OfferParent extends React.Component {
export default function OfferParent({ label, price, isDefault, level }) {
	const leftMargin = {
		1: '0px',
		2: '18px',
		3: '36px',
		4: '54px'
	}[level];

	return (
		<div class="spParent" style={{ marginLeft: leftMargin }}>
			<div class="spVHeaderIcon">
				<span class="fa fa-minus-square-o fa-lg" />
			</div>
			<div class="spVHeaderLabel">
				<div class="form-group">
					<div class="formGroupStyle">
						<div class="checkboxStyle">
							<span>
								<input class="checkboxIcon" type="checkbox" disabled={isDefault} value="Spectrum TV" />
								<span class="checkboxLabel">{label}</span>
							</span>
						</div>
					</div>
				</div>
			</div>
			<div class="spVHeaderPrice">
				<span class="spVHeaderChildPriceStyle">{price}</span>
			</div>
		</div>
	);
}
