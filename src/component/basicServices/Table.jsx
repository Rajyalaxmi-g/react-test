import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';



const Table = (props) => {
	// const bgcolor = {
	// 	backgroundColor : "#7cb30f"
	// };
	
	return (
		<div>
			{/* <div>
				<button onClick={this.showPhoneNumber}>One Click Host</button>

				{
					<div>
						Host Phone: {this.state.number}
						{localStorage.setItem('hostPhone', this.state.number)}
					</div>
				}
			</div> */}
			<Container fluid className="rightAlign fullWidthInput">
				<Row>
					<Col xs={12} md={6}>
						<Col xs={12} md={6}>
							<label>* Block 3rd and Collect Calls</label>
						</Col>
						<Col xs={12} md={6}>
							<select>
								<option value="No Restriction" selected="selected">
									No Restriction
								</option>
								<option value="Block Collect Only">Block Collect Only</option>
							</select>
						</Col>
					</Col>
					<Col xs={12} md={6}>
						<Col xs={12} md={6}>
							<label>* Block Call Trace</label>
						</Col>
						<Col xs={12} md={6}>
							<select>
								<option value="No" selected="selected">
									No
								</option>
								<option value="Yes">Yes</option>
							</select>
						</Col>
					</Col>
				</Row>
				<Row>
					<Col xs={12} md={6}>
						<Col xs={12} md={6}>
							<label>* Block International Calling</label>
						</Col>
						<Col xs={12} md={6}>
							<select>
								<option value="No" selected="selected">
									No
								</option>
								<option value="Yes">Yes</option>
							</select>
						</Col>
					</Col>
					<Col xs={12} md={6}>
						<Col xs={12} md={6}>
							<label>* Block or Display C..</label>
						</Col>
						<Col xs={12} md={6}>
							<select>
								<option value="Allow Caller ID" selected="selected">
									Allow Caller ID
								</option>
								<option value="Block Caller ID">Block Caller ID</option>
							</select>
						</Col>
					</Col>
				</Row>
				<Row>
					<Col xs={12} md={6}>
						<Col xs={12} md={6}>
							<label>* Caller ID Name</label>
						</Col>
						<Col xs={12} md={6}>
							<input type="text" disabled value={localStorage.getItem('fullName')} />
						</Col>
					</Col>
					<Col xs={12} md={6}>
						<Col xs={12} md={6}>
							<label>* E911 Disability Ind</label>
						</Col>
						<Col xs={12} md={6}>
							<select>
								<option value="No Value Selected" selected="selected">
									No Value Selected
								</option>
								<option value="Not Specified">Not Specified</option>
							</select>
						</Col>
					</Col>
				</Row>
				<Row>
					<Col xs={12} md={6}>
						<Col xs={12} md={6}>
							<label>* Emergency Install</label>
						</Col>
						<Col xs={12} md={6}>
							<select>
								<option value="No" selected="selected">
									No
								</option>
								<option value="Yes">Yes</option>
							</select>
						</Col>
					</Col>
					<Col xs={12} md={6}>
						<Col xs={12} md={6}>
							<label>* LEC Account PIN</label>
						</Col>
						<Col xs={12} md={6}>
							<input type="text" disabled value="None" />
						</Col>
					</Col>
				</Row>
				<Row>
					<Col xs={12} md={6}>
						<Col xs={12} md={6}>
							<label>* LEC Freeze</label>
						</Col>
						<Col xs={12} md={6}>
							<select>
								<option value="LEC Freeze No" selected="selected">
									LEC Freeze No
								</option>
								<option value="LEC Freeze Yes">LEC Freeze Yes</option>
							</select>
						</Col>
					</Col>
					<Col xs={12} md={6}>
						<Col xs={12} md={6}>
							<label>* LOA</label>
						</Col>
						<Col xs={12} md={6}>
							<select>
								<option value="Not Required" selected="selected">
									Not Required
								</option>
								<option value="Yes">Yes</option>
							</select>
						</Col>
					</Col>
				</Row>
				<Row>
					<Col xs={12} md={6}>
						<Col xs={12} md={6}>
							<label>* Partial Port</label>
						</Col>
						<Col xs={12} md={6}>
							<select>
								<option value="Port All Lines" selected="selected">
									Port All Lines
								</option>
								<option value="Disconnect">Disconnect</option>
								<option value="partial Port">Partial Port</option>
							</select>
						</Col>
					</Col>
					<Col xs={12} md={6}>
						<Col xs={12} md={6}>
							<label>* Port-InLEC</label>
						</Col>
						<Col xs={12} md={6}>
							<input type="text" disabled value="Charter_Fiber-TNS:5606/" />
						</Col>
					</Col>
				</Row>
				<Row>
					<Col xs={12} md={6}>
						<Col xs={12} md={6}>
							<label>* Port-In Address/Name Mismatch</label>
						</Col>
						<Col xs={12} md={6}>
							<select>
								<option value="Yes" selected="selected">
									Yes
								</option>
							</select>
						</Col>
					</Col>
					<Col xs={12} md={6}>
						<Col xs={12} md={6}>
							<label>* Port-In LEC Account Number</label>
						</Col>
						<Col xs={12} md={6}>
							<input type="text" disabled value="None" />
						</Col>
					</Col>
				</Row>
				<Row>
					<Col xs={12} md={6}>
						<Col xs={12} md={6}>
							<label>Porting Ind</label>
						</Col>
						<Col xs={12} md={6}>
							<select>
								<option value="No" disabled selected="selected">
									No
								</option>
							</select>
						</Col>
					</Col>
					<Col xs={12} md={6}>
						<Col xs={12} md={6}>
							<label>* Telephone Number</label>
						</Col>
						<Col xs={12} md={6}>
							<input type="text" disabled 
						
							value={localStorage.getItem('hostPhone')} />
						</Col>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default Table;
