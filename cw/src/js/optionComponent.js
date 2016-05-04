var React = require('react');
var OptionComponent = React.createClass({
	getInitialState: function () {
		return {selected: ''};
	},
	handleSelect: function (event) {
		this.setState({selected: event.target.value});
	},
	render: function () {
		var optionsData = [];
		var iterator = function (index) {
			return (
				<option>{index}</option>
				);
		};
		switch (this.props.name) {
			case 'Student': optionsData = ['Yes', 'No']; break;
			case 'Gender': optionsData = ['M', 'F']; break;
			case 'Member': optionsData = ['IEEE', 'CCF', 'ACM']; break;
		}

		return (
			<div>
				<span>{this.props.name}</span>
				<select value={this.state.selected} defaultValue={optionsData[0]} onChange={this.handleSelect}>
					{optionsData.map(iterator)}
				</select>
			</div>
			);
	}
});

module.exports = OptionComponent;