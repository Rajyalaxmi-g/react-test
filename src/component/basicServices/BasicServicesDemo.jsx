import React from 'react';
import OfferHeader from './OfferHeader';
import OfferDetails from './OfferDetails';
//import "./bs.css";
//import OfferInnerChild from "./OfferInnerChild";
import OrderReason from './OrderReason';
import SelectedOffer from './SelectedOffer';

class BasicServicesDemo extends React.Component {
	render() {
		return (
			<div>
				<OrderReason />
				<div className="spVideoInternet">
					{this.props.selectedOffers.map(offer => {
						return (
							<>
								{/* <SelectedOffer offer={offer} /> */}
								<OfferDetails offer={offer} />
							</>
						);
					})}
				</div>
				<div className="spVideoInternet" />
			</div>
		);
	}
}
export default BasicServicesDemo;
