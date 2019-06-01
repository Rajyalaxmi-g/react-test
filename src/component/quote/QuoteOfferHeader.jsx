import React from 'react';

export default function QuoteOfferHeader({ label }) {
	return (
		<div className="quoteOfferHeader">
			<div className="quoteOfferHeaderStyle">
				<div className="quoteOfferHeaderDivStyle">
					<span>{label}</span>
				</div>
			</div>
		</div>
	);
}
