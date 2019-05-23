import React, { Component } from 'react';
import { simpleAction } from './actions/simpleAction';
import { updateQuoteAction } from './actions/updateQuoteAction';
import { bindActionCreators } from 'redux';
//import logo from './logo.svg';
import './assets/styles/App.scss';
import './assets/styles/bs.css';
//import FormContainer from './containers/FormContainer';
//import Form from './component/Form';
import OfferSelection from './component/OfferSelection';
//import BasicServices from './component/BasicServices';
import Nav from './navs/Nav';
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
				<Nav />
				<OfferSelection updateQuote={this.props.updateQuoteAction} />
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
