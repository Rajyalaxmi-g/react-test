import React, { Component } from 'react';
import { updateQuoteAction } from './actions/updateQuoteAction';
import { bindActionCreators } from 'redux';
import './assets/styles/App.scss';
import './assets/styles/bs.css';
import Ordering from './component/Ordering';
import Nav from "./navs/Nav";
import { connect } from 'react-redux';


class App extends Component {
	render() {
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
						</div>
						<div className="inner-container">
							<div className="tabSection">
								<div>
									<Nav />
									<div className="outerRim tab-content container-fluid tabsContent">
										<div className="innerScreen tab-pane active" role="tabpanel">
											<div className="container-fluid">
												<div className="tab-row-height row">
													<Ordering updateQuote={this.props.updateQuoteAction} />
												</div>
											</div>
										</div>
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
	updateQuoteAction: bindActionCreators(updateQuoteAction, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
