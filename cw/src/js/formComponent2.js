var React = require('react'),
	InputComponent = require('./inputComponent'),
	OptionComponent = require('./optionComponent');

var FormComponent = React.createClass({
	handleSubmit: function (event) {
		event.preventDefault();
		console.log(this.refs.gender.getDOMNode());
	},
	render: function () {
		return (
			<div
				className="form-box">
				<InputComponent name="Username" placeholder="jiavan" />
				<OptionComponent ref="gender" name="Gender" />
				<InputComponent name="Nationality" placeholder="" />
				<InputComponent name="Passport" placeholder="" />
				<InputComponent name="Organization" placeholder="eg. CQUT" />
				<OptionComponent name="Student" />
				<OptionComponent name="Member" />
				<InputComponent name="Cost" placeholder="20$" />
				<InputComponent name="Author of the paper" placeholder="jiavan" />
				<InputComponent name="Title of the paper" placeholder="20$" />
				<InputComponent name="Hotel" placeholder="20$" />
				<InputComponent name="Tourism project" placeholder="20$" />
				<input type="submit" value="Submit" onClick={this.handleSubmit} />
			</div>
			);
	}
});
module.exports = FormComponent;