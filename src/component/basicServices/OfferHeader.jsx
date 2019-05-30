import React from 'react';
import Table from '../basicServices/Table';
import { connect } from 'react-redux';

class OfferHeader extends React.Component {
	state = {
		number: ''
	}

	showPhoneNumber = () => {
		this.setState({
			number: '618-555-6789'
		});
	};
	
	render() {
		const { selectedItems } = this.props.quote;
		
		const serviceName = this.props.service && this.props.service.serviceName;
		const price = this.props.service && this.props.service.price;
		
		let computedPrice = Number(price.slice(1));
		let shouldUpdatePrice;

		selectedItems.map(item => {
			const itemArr = item.split("-");
			shouldUpdatePrice = itemArr.includes(serviceName);	
			if (shouldUpdatePrice) computedPrice = computedPrice + Number(itemArr[2].slice(1));
		})		
		const bgcolor = {
		backgroundColor : "#7cb30f"
	};

		return (
			<div className="spVHeader">
				<div className="spVHeaderIcon">
					<span className="fa fa-minus-square-o fa-lg" />
				</div>
				<div className="spVHeaderLabel">
					<div className="form-group">
						<div className="formGroupStyle">
							<label className="labelStyle">{this.props.service && this.props.service.serviceName}</label>
						</div>
					</div>
				</div>
				<div className="spVHeaderPrice">
					<span className="spVHeaderParentPriceStyle">${computedPrice.toFixed(2)}</span>
				</div>
				{serviceName === 'Spectrum Voice' && <>
				Host Phone: {this.state.number}
										<button style={bgcolor} onClick={this.showPhoneNumber}>One Click Host</button>	
										<Table />
				</>
			}
			</div>
		);
	}
}

const mapStateToProps = state => ({
	...state
});

export default connect(mapStateToProps, null)(OfferHeader);

