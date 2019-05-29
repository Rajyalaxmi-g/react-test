import React, { Component } from 'react';
import { simpleAction } from './actions/simpleAction';
import { updateQuoteAction } from './actions/updateQuoteAction';
import { bindActionCreators } from 'redux';
//import logo from './logo.svg';
import './assets/styles/App.scss';
import './assets/styles/bs.css';
//import FormContainer from './containers/FormContainer';
import Form from './miscellaneous/Form';
import OfferSelection from './component/OfferSelection';
//import BasicServices from './component/BasicServices';
import Nav from "./navs/Nav";
import { connect } from 'react-redux';
//import BasicServicesDemo from './component/BasicServicesDemo';

class App extends Component {
	simpleAction = (event) => {
		this.props.simpleAction(`this is a dynamic result: user is - Timestamp is: ${Date.now()}`);
	}

	render() {
		console.log(this.props);

		return (
			<div>
				<div id="container">
					<div className="mainContainer">
						<div className="headerSection">
							<div className="headerCenterContent">
							<span>CharterGateway</span>
							<div className="searchContent">
								<button>
									<span class="fa fa-search">&nbsp;Search</span>
								</button>
							</div>
							<div className="displayAccount">
								<span>No account selected</span>
							</div>
							</div>
							{/* <Nav /> */}
							{/* <Form /> */}
							{/* <OfferSelection updateQuote={this.props.updateQuoteAction} /> */}
						</div>
						<div className="inner-container">
							<div className="tabSection">
								<div>
									
										<Nav />
								<div className="outerRim tab-content container-fluid tabsContent">	
									<OfferSelection updateQuote={this.props.updateQuoteAction} />
								</div>
								</div>
							</div>	
						</div>
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	...state
})

const mapDispatchToProps = dispatch => ({
	simpleAction: bindActionCreators(simpleAction, dispatch),
	updateQuoteAction: bindActionCreators(updateQuoteAction, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
