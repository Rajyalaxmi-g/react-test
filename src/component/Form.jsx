import React from 'react';
import Shopping_Cart from '../assets/images/shoping-cart1.png';
import Green_Checkmark from '../assets/images/Green-Checkmark.png';
import RedX from '../assets/images/red-x.png';
import ReactTooltip from 'react-tooltip';
import Tooltip from '@material-ui/core/Tooltip';

class Form extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			navTabs: ['offerHeader', 'basicServices', 'additionalServices'],
			tabsInView: ['offerHeader'],
			currentTab: 'basicServices',
			firstname: '',
			lastname: '',
			isMobile: true,
			activeNumber: false,
			primaryphone: '',
			invalidNo: false,
			errors: {},
			tooltiptext: '',
			mobilePhone: [
				{
					id: 1,
					type: 'mobile',
					phone: 3143694449
				},
				{
					id: 2,
					type: 'mobile',
					phone: 3148732439
				},
				{
					id: 3,
					type: 'mobile',
					phone: 6783142906
				}
			],
			landlinePhone: [
				{
					id: 4,
					type: 'landline',
					phone: 3147786034
				},
				{
					id: 5,
					type: 'landline',
					phone: 3147786148
				},
				{
					id: 6,
					type: 'landline',
					phone: 6423658962
				}
			],

			offersTable: [
				{
					id: 1,
					type: 'Promotional',
					offerName: 'Internet (44) SPP 2.0 #2753393 NC',
					price: '$44.99',
					showCart: true
				},
				{
					id: 2,
					type: 'Promotional',
					offerName: 'TV Select (44) SPP 2.0 #2752943 NC',
					price: '$44.99',
					showCart: true
				},
				{
					id: 3,
					type: 'Promotional',
					offerName: '2 Yr Internet - Competitive/Gig Escalation (44) SPP 2.0 #2773863 NC',
					price: '$64.99',
					showCart: true
				}
			],
			selectedOffers: [],
			doublePlay: [
				{
					id: 4,
					type: 'Promotional',
					offerName: 'TV Select + Internet (44/44) SPP 2.0 #2748993 NC',
					price: '$89.98',
					showCart: true
				},
				{
					id: 5,
					type: 'Promotional',
					offerName: 'Limited Basic + Internet (23/39) SPP #397223 NC',
					price: '$63.88',
					showCart: true
				},
				{
					id: 6,
					type: 'Promotional',
					offerName:
						'2 Yr TV Select + Internet Plus w/Free or Discounted DVR Svc Escalation (39/39) SPP #407371 NC',
					price: '$79.98',
					showCart: true
				},
				{
					id: 7,
					type: 'Promotional',
					offerName:
						'2 Yr TV Select + Internet Ultra - Competitive/Gig Escalation (39/39) SPP 2.0 #2775773 NC',
					price: '$79.98',
					showCart: true
				},
				{
					id: 8,
					type: 'Promotional',
					offerName:
						'2 Yr TV Select + Internet Ultra - Competitive/Non-Gig Escalation (39/59) SPP 2.0 #2778543 NC',
					price: '$99.98',
					showCart: true
				}
			],
			addOn: [
				{
					id: 9,
					type: 'AddOn',
					offerName: 'Voice Bundled (9) SPP 2.0 #2755393 NC',
					price: '$9.99',
					showCart: true
				},
				{
					id: 10,
					type: 'AddOn',
					offerName: 'Voice - 2nd Line SPP #557133 NC',
					price: '$19.99',
					showCart: true
				}
			]
		};
	}
	baseState = this.state;

	handleChange = e => {
		this.setState({ [e.target.name]: e.target.value }, () => {
			console.log(this.state);
		});
		//this.setState(this.setState)
	};

	// Validate = (firstname, lastname, primaryphone) => {
	//   console.log(firstname, lastname, primaryphone);
	//   return {
	//     firstname: firstname.length === 0,
	//     lastname: lastname.length === 0,
	//     primaryphone: primaryphone.length === 0
	//   };
	// };
	Validate = (fieldName, value) => {
		const fieldValidationErrors = this.state.errors;
		switch (fieldName) {
			case 'firstname':
				fieldValidationErrors.firstname = this.state.firstname.length === 0 ? true : false;
				break;
			case 'lastname':
				fieldValidationErrors.lastname = this.state.lastname.length === 0 ? true : false;
				break;
			case 'primaryphone':
				fieldValidationErrors.primaryphone = this.state.primaryphone.length === 0 ? true : false;
				if (this.state.primaryphone.length === 0) {
					fieldValidationErrors.primaryphone = true;
				} else {
					fieldValidationErrors.primaryphone = false;
					this.state.mobilePhone.map(item => {
						if ((value === '3143694449' || value === '6763142906') && item.type === 'mobile') {
							this.setState({
								isMobile: true,
								activeNumber: true,
								tooltiptext: 'This is a mobile number',
								icon: "<i className='fa fa-mobile' ></i>"
							});
						} else {
							this.setState({ activeNumber: false, tooltiptext: 'invalid No' });
						}
					});
					this.state.landlinePhone.map(item => {
						if (
							(value === '3145893658' || value === '3147589604' || value === '6423658962') &&
							item.type === 'landline'
						) {
							this.setState({
								isMobile: false,
								activeNumber: false,
								tooltiptext: 'This is a landline number'
							});
						} else {
							this.setState({ invalidNo: true });
							fieldValidationErrors.primaryphone = true;
						}
					});
				}

				break;
			default:
				break;
		}
		this.setState({ errors: fieldValidationErrors });
	};

	handleRowChecked = e => {
		if (e.target.checked) {
			let tempArr = this.state.offersTable.filter(item => {
				return item.id === parseInt(e.target.name);
			});
			this.setState({
				selectedOffers: [...this.state.selectedOffers, ...tempArr]
			});
		} else {
			let filteredArray = this.state.selectedOffers.filter(item => item.id !== parseInt(e.target.name));
			this.setState({ selectedOffers: filteredArray });
		}
	};
	handleCheckboxes = event => {
		if (event.target.checked && event.target.name === 'doublePlay') {
			this.setState({
				offersTable: [...this.state.offersTable, ...this.state.doublePlay]
			});
		}
		if (!event.target.checked && event.target.name === 'doublePlay') {
			let filteredArray = this.state.offersTable.filter(e => {
				return !this.state.doublePlay.some(s => {
					return s.id === e.id;
				});
			});

			let filteredArray1 = this.state.selectedOffers.filter(e => {
				return !this.state.doublePlay.some(s => {
					return s.id === e.id;
				});
			});
			this.setState({
				selectedOffers: filteredArray1,
				offersTable: filteredArray
			});
		}

		if (event.target.checked && event.target.name === 'addOn') {
			this.setState({
				offersTable: [...this.state.offersTable, ...this.state.addOn]
			});
		}
		if (!event.target.checked && event.target.name === 'addOn') {
			let filteredArray = this.state.offersTable.filter(e => {
				return !this.state.addOn.some(s => {
					return s.id === e.id;
				});
			});
			let filteredArray1 = this.state.selectedOffers.filter(e => {
				return !this.state.addOn.some(s => {
					return s.id === e.id;
				});
			});
			this.setState({ selectedOffers: filteredArray1, offersTable: filteredArray });
		}
	};

	removeSelectedOffers = offer => {
		offer.showCart = true;
		let filteredArray = this.state.selectedOffers.filter(item => item.id !== offer.id);
		this.setState({ selectedOffers: filteredArray });
	};

	addOffer = offer => {
		offer.showCart = false;
		this.setState({
			selectedOffers: [...this.state.selectedOffers, offer],
			offersTable: this.state.offersTable
		});
	};

	// correctNumber = primaryphone => {
	//   if (this.state.primaryphone !== undefined) {
	//     if (this.state.primaryphone.maxLength > 5) {
	//       return "activeNumber";
	//     }
	//   }
	//   return "";
	// };

	canBeSubmitted = () => {
		// const errors = this.Validate(
		//   this.state.firstname,
		//   this.state.lastname,
		//   this.state.primaryphone
		// );
		// const isDisabled = Object.keys(errors).some(x => errors[x]);
		// return !isDisabled;
	};

	offerHeader = () => {
		return (
			<div id="offer-selection">
				<div className="leftScreen">
					<div>
						<div className="innerBox panel panel-default">
							<div className="panel-body">
								<fieldset>
									<div>
										<div className="row" />
									</div>
									<div>
										<h5>Customer Information</h5>
										<div className="floatright" />
										<div>
											<div className="row">
												<div className="col-md-3 col-xs-12">
													<div className="form-group">
														<label>First Name:</label>
														<input
															type="text"
															className={`form-control ${
																this.state.errors.firstname ? 'error' : ''
															}`}
															maxLength="10"
															name="firstname"
															value={this.state.firstname}
															onChange={this.handleChange}
															placeholder="First Name"
															required
														/>
													</div>
												</div>
												<div className="col-md-3 col-xs-12">
													<div className="form-group">
														<label>Last Name:</label>
														<input
															type="text"
															className={`form-control ${
																this.state.errors.lastname ? 'error' : ''
															}`}
															maxLength="10"
															name="lastname"
															value={this.state.lastname}
															onChange={this.handleChange}
															placeholder="Last Name"
															required
														/>
													</div>
												</div>
												<div className="col-md-3 col-xs-12">
													{/* <div className="form-group">
                                        <label>Primary Phone:</label>
                                        <input
                                          type="tel"
                                          id="primaryphone"
                                          className={`form-control ${this.state.errors.primaryphone ? "error" : ""}`}
                                          name="primaryphone"
                                         // value={this.state.primaryphone}
                                          onChange={this.handleChange}
                                          placeholder="(XXX)XXX-XXXX"
                                          required
                                        />
                                        </div> */}
													<div className="input-group">
														<label>
															Primary Phone:
															<Tooltip title="Please ensure you capture the customer's Mobile number as their primary telephone number.">
																<span className="fa fa-question-circle fa-lg" />
															</Tooltip>
														</label>
														<input
															type="tel"
															pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
															id="primaryphone"
															className={`form-control ${
																this.state.errors.primaryphone ? 'error' : ''
															}`}
															name="primaryphone"
															maxLength="10"
															onChange={this.handleChange}
															placeholder="(XXX)XXX-XXXX"
															required
														/>
														{/* <div className="input-group-append"> */}
														<span className="input-group-text">
															<ReactTooltip place="top" type="dark" effect="float" />
															{/* {!this.state.isMobile && <Tooltip title="This is a mobile number."><i className="fa fa-mobile"></i></Tooltip>} */}
															{this.state.isMobile && (
																<i
																	data-tip={this.state.tooltiptext}
																	className={`fa fa-mobile ${
																		this.state.activeNumber
																			? 'activeNumberClass'
																			: ''
																	}`}
																/>
															)}
															{!this.state.isMobile && (
																<i
																	data-tip={this.state.tooltiptext}
																	className="fa fa-phone"
																/>
															)}
															{!this.state.isMobile && (
																<i
																	data-tip={this.state.tooltiptext}
																	className="fa fa-info-circle errspan"
																/>
															)}
														</span>
														{/* </div> */}
													</div>
												</div>
												<div className="col-md-3 col-xs-12">
													<div className="form-group">
														<label>Alternate Phone:</label> <span>Optional</span>
														<input
															type="text"
															className="form-control"
															name="alternatephone"
															placeholder="(XXX)XXX-XXXX"
														/>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className="header">
										<hr />
										<h5>Offer Selection</h5>
									</div>
									<div className="selection">
										<div className="floatleft">
											<div>
												<div>
													<div className="row">
														<div className="col-xs-2">
															<label className="control-label">LOB Play</label>
														</div>
														<div className="col-xs-2">
															<div className="form-group">
																<div className="checkbox">
																	<label htmlFor="Single Play">
																		<input
																			id="Single Play"
																			type="checkbox"
																			name="Single Play"
																			checked="checked"
																		/>
																		Single Play
																	</label>
																</div>
															</div>
														</div>
														<div className="col-xs-2">
															<div className="form-group">
																<div className="checkbox">
																	<label htmlFor="Double Play">
																		<input
																			id="Double Play"
																			type="checkbox"
																			name="doublePlay"
																			onChange={this.handleCheckboxes}
																		/>
																		Double Play
																	</label>
																</div>
															</div>
														</div>
														<div className="col-xs-2">
															<div className="form-group">
																<div className="checkbox">
																	<label htmlFor="Double Play">
																		<input
																			id="Double Play"
																			type="checkbox"
																			name="Double Play"
																		/>
																		Triple Play
																	</label>
																</div>{' '}
															</div>
														</div>
													</div>
													<div className="row">
														<div className="col-xs-2">
															<label className="control-label">LOB</label>
														</div>
														<div className="col-xs-2">
															<div className="form-group">
																<div className="checkbox">
																	<label htmlFor="video">
																		<input
																			id="Video"
																			type="checkbox"
																			name="Video"
																			checked="checked"
																		/>
																		Video
																	</label>
																</div>
															</div>
														</div>
														<div className="col-xs-2">
															<div className="form-group">
																<div className="checkbox">
																	<label htmlFor="Internet">
																		<input
																			id="Internet"
																			type="checkbox"
																			name="Internet"
																			checked="checked"
																		/>
																		Internet
																	</label>
																</div>
															</div>
														</div>
														<div className="col-xs-2">
															<div className="form-group">
																<div className="checkbox">
																	<label htmlFor="Voice">
																		<input
																			id="Voice"
																			type="checkbox"
																			name="Voice"
																			checked="checked"
																		/>
																		Voice
																	</label>
																</div>
															</div>
														</div>
													</div>
													<div className="row">
														<div className="col-xs-2">
															<label className="control-label">Offer Type</label>
														</div>
														<div className="col-xs-2">
															<div className="form-group">
																<div className="checkbox">
																	<label htmlFor="Promotional">
																		<input
																			id="Promotional"
																			type="checkbox"
																			name="Promotional"
																			checked="checked"
																		/>
																		Promotional
																	</label>
																</div>
															</div>
														</div>
														<div className="col-xs-2">
															<div className="form-group">
																<div className="checkbox">
																	<label htmlFor="Standard">
																		<input
																			id="Standard"
																			type="checkbox"
																			name="Standard"
																		/>
																		Standard
																	</label>
																</div>
															</div>
														</div>
														<div className="col-xs-2">
															<div className="form-group">
																<div className="checkbox">
																	<label htmlFor="Add-on">
																		<input
																			id="Add-on"
																			type="checkbox"
																			name="addOn"
																			onChange={this.handleCheckboxes}
																		/>
																		Add-on
																	</label>
																</div>
															</div>
														</div>
														<div className="col-xs-2">
															<div className="form-group">
																<div className="checkbox">
																	<label htmlFor="Retention">
																		<input
																			id="Retention"
																			type="checkbox"
																			name="Retention"
																		/>
																		Retention
																	</label>
																</div>
															</div>
														</div>
														<div className="col-xs-2">
															<div className="form-group">
																<div className="checkbox">
																	<label htmlFor="Online">
																		<input
																			id="Online"
																			type="checkbox"
																			name="Online"
																		/>
																		Online
																	</label>
																</div>
															</div>
														</div>
													</div>
												</div>
												<div>
													<div className="floatleft">
														<h6>Search:</h6>
													</div>
													<div className="floatleft">
														<div className="form-group">
															<input
																className="form-control"
																type="text"
																name="filterByText"
																placeholder="Search By Offer Name or ID or Stuff Codes"
															/>
														</div>
													</div>
												</div>
											</div>
										</div>
										<div className="floatleft">
											<label>Selected Offer</label>
											<div className="selectedOffer">
												{this.state.selectedOffers.length === 0 ? 'None' : null}

												<table className="table-striped-manual table">
													<tbody>
														{this.state.selectedOffers.map(offer => {
															return (
																<tr key={offer.id}>
																	<td>
																		<img
																			src={RedX}
																			alt="redcross"
																			onClick={() =>
																				this.removeSelectedOffers(offer)
																			}
																			className="fa fa-times-circle"
																		/>
																	</td>

																	<td className="smallFont">{offer.offerName}</td>
																	<td className="smallFont">{offer.price}</td>
																</tr>
															);
														})}
													</tbody>
												</table>
											</div>
										</div>
									</div>
									<div className="selection">
										<div>
											<div className="row">
												<div className="col-xs-12">
													<div className="table-responsive">
														<table className="table-striped-manual table table-striped table-bordered table-condensed">
															<thead className="selection">
																<tr>
																	<th />
																	<th>Type</th>
																	<th>Offer Name</th>
																	<th>Price</th>
																</tr>
															</thead>
															<tbody>
																{this.state.offersTable.map(offer => {
																	return (
																		<tr key={offer.id}>
																			<td>
																				{offer.showCart && (
																					<img
																						src={Shopping_Cart}
																						alt="shopping_cart"
																						onClick={() =>
																							this.addOffer(offer)
																						}
																						className="fas fa-cart-plus"
																					/>
																				)}
																				{!offer.showCart && (
																					<img
																						src={Green_Checkmark}
																						alt="greencheck"
																					/>
																				)}
																			</td>
																			{/* <td>
                                                      <input
                                                        name={offer.id}
                                                        type="checkbox"
                                                        checked={
                                                          this.state.rowChecked
                                                        }
                                                        onChange={
                                                          this.handleRowChecked
                                                        }
                                                      />
                                                    </td> */}
																			<td>{offer.type}</td>
																			<td>{offer.offerName}</td>
																			<td>{offer.price}</td>
																		</tr>
																	);
																})}
															</tbody>
														</table>
													</div>
												</div>
											</div>
										</div>
									</div>
								</fieldset>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	};

	basicServices = () => {
		return (
			<div>
				<div className="orderReason">
					<div className="form-group form-group-style">
						<label>* Order Reason(s)</label>
						<div className="multiselectComponent">
							<div className="dropdown">
								<button className="dropdown-toggle btn btn-default dropdownStyle" type="button">
									-- Please Select --<span className="caret" />
								</button>
								<ul className="dropdown-menu">
									<li>
										<a role="button" href="#0">
											Sale by Inbound
										</a>
									</li>
									<li>
										<a role="button" href="#0">
											Technician On Site
										</a>
									</li>
									<li>
										<a role="button" href="#0">
											Online Sale
										</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				<div className="selectedOffer">
					<div className="form-group">
						<div className="display: inline-block;">
							<label className="text-align: right; margin-top: 7px;">
								TV Select + Internet (44/44) SPP 2.0 #2748993 NC
								<span
									className="fa fa-info-circle fa-lg"
									id="color: rgb(0, 90, 132); padding-left: 0.5em; cursor: pointer;"
								/>
							</label>
						</div>
					</div>
				</div>
			</div>
			// <div>
			// {this.state.selectedOffers.map(selectedOffer => <div>{selectedOffer}</div>)}
			// </div>
		);
	};

	handleNavClick = e => {
		console.log('e : ', e.target.id);
		this.setState({
			currentTab: e.target.id
		});
	};

	handleNextBtnClick = e => {
		const arr = this.state.navTabs;
		this.state.tabsInView.map(tab => {
			const i = arr.indexOf(tab);
			arr.splice(i, 1);
		});
		const viewTabs = this.state.tabsInView;
		if (arr[0]) {
			viewTabs.push(arr[0]);
			this.setState({
				tabsInView: viewTabs,
				currentTab: arr[0]
			});
		}
	};
	render() {
		console.log('state :', this.state);
		// const errors = this.Validate(
		//   this.state.firstname,
		//   this.state.lastname,
		//   this.state.primaryphone
		// );
		//const isDisabled = Object.keys(errors).some(x => errors[x]);
		// console.log("errors", errors);

		return (
			<div className="outerRim tab-content container-fluid tabsContent">
				<div className="innerScreen tab-pane active" role="tabpanel">
					<div className="container-fluid">
						<div className="tab-row-height row">
							<div className="col-sm-9 col-xs-12">
								<div className="tab-col modal-container panel panel-default">
									<div className="panel-body">
										<nav className="collapse in" dimension="height">
											<ul className="nav nav-pills nav-justified">
												<li
													className={`offerHeader ${this.state.currentTab === 'offerHeader' &&
														'active'}`}
													role="presentation"
													id="offerHeader"
													onClick={this.handleNavClick}
												>
													<span>Offer Selection ></span>
												</li>
												{this.state.tabsInView.includes('basicServices') && (
													<li
														className={`offerHeader ${this.state.currentTab ===
															'basicServices' && 'active'}`}
														role="presentation"
														id="basicServices"
														onClick={this.handleNavClick}
													>
														<span>Basic Services ></span>
													</li>
												)}
											</ul>
										</nav>
										{this.state.currentTab === 'offerHeader' && this.offerHeader()}
										{this.state.currentTab === 'basicServices' && this.basicServices()}
										<div className="buttonGroupLeft">
											<button disabled="" type="submit" className="btn btn-default disabled">
												Back
											</button>

											<button className="clearOrder btn btn-default" type="button">
												Clear Order
											</button>
										</div>
										<div className="buttonGroupRight">
											<button className="btn btn-default" type="button">
												Competitive Edge
											</button>
											<button
												onClick={this.handleNextBtnClick}
												className="btn btn-success"
												type="button"
											>
												Next
											</button>
										</div>
									</div>
								</div>
							</div>
							<div className="rightScreen tab-col col-sm-3 col-xs-12">
								<div className="quoteHeader row">
									<span>Quote Summary</span>
								</div>
								<div className="quoteSection row">
									<div className="row">
										<table className="table-striped-manual table">
											{/* <tbody>
                        {this.state.selectedOffers.map(
                          offer => {
                            return (
                              <tr key={offer.id}>

                                <td>{offer.offerName}</td>
                                <td>{offer.price}</td>
                              </tr>
                            );
                          }
                        )}
                      </tbody> */}
										</table>
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
export default Form;
