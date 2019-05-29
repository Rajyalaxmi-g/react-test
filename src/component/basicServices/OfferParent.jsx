import React from "react";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {updateQuoteAction} from '../../actions/updateQuoteAction';

class OfferParent extends React.Component {
    checkboxClickHandler = e => {
		const {selectedItems} = this.props.quote;
		const value = e.target.value;

		if (selectedItems.includes(value)) {
			const index = selectedItems.indexOf(value);
			selectedItems.splice(index, 1);
		} else selectedItems.push(value);

        this.props.updateQuoteAction(selectedItems);
    };

    showPhoneNumber = () => {
		this.setState({
			number: '618-555-6789'
		});
	};
    render() {
		console.log(this.props);
		
        const { label, price, isDefault, level } = this.props;
        const leftMargin = {
            1: "0px",
            2: "18px",
            3: "36px",
            4: "54px"
		}[level];
		let serviceGroup = '';

		if (label.includes("TV")) serviceGroup = this.props.basicServices[0].serviceName;
		if (label.includes("Internet")) serviceGroup = this.props.basicServices[1].serviceName;		

        return (
            <div className="spParent" style={{ marginLeft: leftMargin }}>
                <div className="spVHeaderIcon">
                    <i className="fa fa-minus-square-o fa-lg" />
                </div>
                <div className="spVHeaderLabel">
                    <div className="form-group">
                        <div className="formGroupStyle">
                            <div className="checkboxStyle">
                                <span>
                                    <input
                                        className="checkboxIcon"
                                        type="checkbox"
                                        disabled={isDefault}
                                        onClick={this.checkboxClickHandler}
                                        value={`${serviceGroup}-${label}-${price}`}
                                    />
                                    <span className="checkboxLabel">{label}</span>
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
}



const mapStateToProps = state => ({
	...state
})

const mapDispatchToProps = dispatch => ({
	updateQuoteAction: bindActionCreators(updateQuoteAction, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(OfferParent);
