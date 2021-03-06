import React from 'react';
import OfferHeader from './OfferHeader';
import OfferDetails from './OfferDetails';
//import "./bs.css";
//import OfferInnerChild from "./OfferInnerChild";
import OrderReason from './OrderReason';
import SelectedOffer from './SelectedOffer';
import Quote from "../quote/Quote";


class BasicServicesDemo extends React.Component {
	
	render() {
		return (
			<div>
				{/* {this.props.OrderReason} */}
				<OrderReason />
				{/* <div className="spVideoInternet"> */}
					{this.props.selectedOffers.map(offer => {
						return (
							<>
								{/* <SelectedOffer offer={offer} /> */}
								<OfferDetails updateQuote={this.props.updateQuote} offer={offer} />
							</>
						);
					})}
				{/* </div> */}
				{/* <div className="spVideoInternet">
				
				</div> */}
				{/* <div className="quoteSection row">
					<div className="row">
						<Quote />
					</div>
				</div> */}
			</div>
			
		);
	}
}
export default BasicServicesDemo;
