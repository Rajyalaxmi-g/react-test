import React, { Component } from 'react';

import Input from '../component/Input';
import CheckBox from '../component/CheckBox';
//import Select from '../component/Select';
//import Table from '../component/Table';

class FormContainer extends Component {
	constructor(props) {
		super(props);

		this.state = {
			newUser: {
				firstname: '',
				lastname: '',
				primaryphone: '',
				alternatephone: ''
			}
		};
	}

	handleFormSubmit(e) {
		e.preventDefault();
		let userData = this.state.newUser;
		fetch('http://reactforms.com', {
			method: 'POST',
			body: JSON.stringify(userData),
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json'
			}
		}).then(response => {
			response.json().then(data => {
				console.log('Successful' + data);
			});
		});
	}

	renderRow = (_row, rowIndex) => {
		// const {rows} = this.props;
		// return (
		//   <tr key={`row-${rowIndex}`}>
		//     {rows[rowIndex].map((_cell, cellIndex) => {
		//       return (
		//         <TableCell
		//           key={`${rowIndex}-${cellIndex}`}
		//           content={rows[rowIndex][cellIndex]}
		//         />
		//       )
		//     })}
		//   </tr>
		// )
	};

	render() {
		return (
			<form className="customerInfoForm">
				<Input
					inputType={'text'}
					title={'First Name'}
					name={'firstName'}
					placeholder={'First Name'}
					value={this.state.newUser.firstName}
					handleChange={this.handleInput}
				/>

				<Input
					inputType={'text'}
					title={'Last Name'}
					name={'lastName'}
					placeholder={'Last Name'}
					value={this.state.newUser.lastName}
					handleChange={this.handleInput}
				/>
				<Input
					inputType={'text'}
					title={'Primary Phone'}
					name={'primaryPhone'}
					placeholder={'(XXX)XXX-XXXX'}
					value={this.state.newUser.primaryPhone}
					handleChange={this.handleChange}
				/>
				<Input
					inputType={'text'}
					title={'Alternate Phone'}
					name={'alternatePhone'}
					placeholder={'(XXX)XXX-XXXX'}
					value={this.state.newUser.alternatePhone}
					handleChange={this.handleChange}
				/>

				<CheckBox
					title={'LOB Play'}
					name={'lobPlay'}
					options={this.state.playOptions}
					selectedOptions={this.state.newUser.playOptions}
					handleChange={this.handleCheckbox}
				/>
				<CheckBox
					title={'LOB'}
					name={'lob'}
					options={this.state.lob}
					selectedOptions={this.state.newUser.lob}
					handleChange={this.handleCheckbox}
				/>
				<CheckBox
					title={'Offer Type'}
					name={'offerType'}
					options={this.state.offerType}
					selectedOptions={this.state.newUser.offerType}
					handleChange={this.handleCheckbox}
				/>
				<Input
					inputType={'text'}
					title={'Search'}
					name={'search'}
					placeholder={'Search By Offer Name or ID or Stuff Codes'}
					value={this.state.newUser.search}
					handleChange={this.handleChange}
				/>
			</form>
		);
	}
}
export default FormContainer;
