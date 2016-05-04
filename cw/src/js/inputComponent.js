var React = require('react');
var InputComponent = React.createClass({
	getInitialState: function () {
		return {content: ''};
	},
	handleChange: function (event) {
		this.setState({content: event.target.value.substr(0, 40)});
	},
	render: function () {
		return (
			<div className="input-box">
				<span>{this.props.name}</span>
				<input 
					placeholder={this.props.placeholder}
					value={this.state.content}
					onChange={this.handleChange}
					>
				</input>
			</div>
			);
	}
});
module.exports = InputComponent;