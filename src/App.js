import React, { Component } from 'react';
import { simpleAction } from './actions/simpleAction';
import { bindActionCreators } from 'redux';
//import logo from './logo.svg';
import './App.scss';
import './bs.css';
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
		return (
			<div>
				<Nav />
				<OfferSelection />
				<button onClick={this.simpleAction}>Test redux action</button>
				<pre>
					{
						JSON.stringify(this.props)
					}
				</pre>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	...state
})

const mapDispatchToProps = dispatch => ({
	simpleAction: bindActionCreators(simpleAction, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
