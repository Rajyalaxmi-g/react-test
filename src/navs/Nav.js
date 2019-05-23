import React, { Component } from 'react';

class Nav extends Component {
	render() {
		return (
			<div className="navigate">
				<div className="navin">
					<button>
						<span class="fa fa-search">&nbsp;Search</span>
					</button>
					<h4>No account selected</h4>
				</div>
				<nav>
					<ul>
						<li>
							{' '}
							<a href="#">Dashboard</a>
						</li>

						<li>
							<a href="#">Account</a>
						</li>
						<li>
							<a href="#">Billing</a>
						</li>

						<li>
							<a href="#">Ordering</a>
						</li>

						<li>
							<a href="#">Tools</a>
						</li>
					</ul>
				</nav>
			</div>
		);
	}
}
export default Nav;
