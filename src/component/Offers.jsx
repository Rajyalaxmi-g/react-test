import React from 'react';
import RedX from '../assets/images/red-x.png';
import ReactTooltip from 'react-tooltip';
import Tooltip from '@material-ui/core/Tooltip';
import Shopping_Cart1 from '../assets/images/shoping-cart1.png';
import Green_Checkmark from '../assets/images/Green-Checkmark.png';


export default function Offers(){
    return(
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
													<label>
														Primary Phone:
														<Tooltip title="Please ensure you capture the customer's Mobile number as their primary telephone number.">
															<span className="fa fa-question-circle fa-lg" />
														</Tooltip>
													</label>
													<div className="input-group">
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
														{/* {this.state.ppIcon != null && ( */}

														<div className="input-group-append">
															<span className="input-group-text">
																<ReactTooltip place="top" type="dark" effect="float" />

																<i
																	data-tip={this.state.tooltiptext}
																	className={`${this.state.ppIcon}  ${
																		this.state.activeNumber
																			? 'activeNumberClass'
																			: ''
																	}`}
																/>
															</span>
														</div>
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
																			onChange={this.onChecked}
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
																			onChange={this.onChecked}
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
																			onChange={this.onChecked}
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
																			onChange={this.onChecked}
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
																			onChange={this.onChecked}
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
																						src={Shopping_Cart1}
																						alt="shopping_cart1"
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
    )
}