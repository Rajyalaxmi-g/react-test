import React from 'react';

class TableRow extends React.PureComponent {
	defaultProps = {
		selected: false
	};
	render() {
		const { selected, id, type, offerName, price, handleSelect } = this.props;
		console.log(`render TableRow :: ${type} :: ${offerName}`);
		return (
			<tr>
				<td>
					<input name={id} type="checkbox" checked={selected} onChange={handleSelect} />
				</td>
				<td>{type}</td>
				<td>{offerName}</td>
				<td>{price}</td>
			</tr>
		);
	}
}

export default TableRow;
