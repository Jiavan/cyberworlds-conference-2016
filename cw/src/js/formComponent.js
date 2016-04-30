var React = require('react'),
	InputComponent = require('./inputComponent');

var FormComponent = React.createClass({
	render: function () {
		return (
			<div
				className="form-box">
				<InputComponent name="Username" placeholder="jiavan" />
				<InputComponent name="Username" placeholder="jiavan" />
				<InputComponent name="Username" placeholder="jiavan" />
				<InputComponent name="Username" placeholder="jiavan" />
				<input type="submit" value="Submit" />
			</div>
			);
	}
});
module.exports = FormComponent;