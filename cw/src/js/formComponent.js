var React = require('react');

var FormComponent = React.createClass({
	componentWillMount: function () {
		
	},
	render: function () {
		return (
			<div className="form-box">
				<input placeholder="username"></input><br />
				<input placeholder="gender"></input><br />
				<input placeholder="nationality"></input><br />
				<input placeholder="nationality"></input><br />
				<input placeholder="passport"></input><br />
				<input placeholder="organization"></input><br />
				<input placeholder="student"></input><br />
				<input placeholder="member"></input><br />
				<input placeholder="cost"></input><br />
				<input placeholder="author of the paper"></input><br />
				<input placeholder="hotel"></input><br />
				<input placeholder="tourism project"></input><br />
				<input type="submit" value="submit" />
			</div>
			);
	}
});
module.exports = FormComponent;