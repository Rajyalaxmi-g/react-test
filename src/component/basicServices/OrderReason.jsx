import React from 'react';

export default function OrderReason() {
	
	return (
		<div className="reasonDropdown">
			<div>
				<div className="styleReason">
					<div className="form-group formReasonStyle">
						<div className="display">
							<label>* Order Reason(s)</label>
						</div>
						<div className="displayDropdown">
							<div className="dropdownWidth">
								<div className="multiselectComponent">
									<div className="dropdown">
										<select>
											<option value="">--Please choose an option--</option>
											<option value="Inbound Sales">Inbound Sales</option>
											<option value="Technician On Site">Technician On Site</option>
											<option value="Online Sale">Online Sale</option>
										</select>
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
