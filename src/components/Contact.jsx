import React from 'react';

class Contact extends React.Component {
	state = {
		message: '',
		email: '',
		isSubmitDisabled: true,

		touched: {
			email: false,
			message: '',
		},
	};

	handleBlur = (e) => {
		let name = e.target.name;
		this.setState({
			touched: { ...this.state.touched, [name]: true },
		});
	};

	validate = (email) => {
		let errors = {
			email: '',
			isSubmitDisabled: true,
		};

		let err = 0;

		if (
			!this.state.email ||
			!/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/.test(email)
		) {
			errors.email = ' Invalid Email address';
			err += 1;
		}

		errors.isSubmitDisabled = err > 0 ? true : false;

		return errors;
	};

	handleChange = (e) => {
		e.preventDefault();
		let target = e.target;
		let name = target.name;
		let value = target.type === 'checkbox' ? target.checked : target.value;
		this.setState(
			{
				[name]: value,
			},
			function () {
				this.canSubmit();
			}
		);
	};

	canSubmit() {
		// const { email, firstname, lastname,telephone } = this.state
		// if (email != null && firstname != null  && lastname != null && telephone != null) {
		//   this.setState({
		//     isSubmitDisabled: false
		//   })
		// }
		// else {
		//   this.setState({
		//     isSubmitDisabled: true
		//   })
		// }

		const { email } = this.state;
		const errors = this.validate(email);
		const { isSubmitDisabled } = errors;
		this.setState({ isSubmitDisabled });
	}

	handleSubmit = (e) => {
		e.preventDefault();
		const { email, message } = this.state;
		alert(`Your registration details:
           Email: ${email}
           Message: ${message} `);
		this.props.history.push('/');
		this.setState({
			email: '',
			message: '',
		});
	};

	render() {
		const { email } = this.state;
		const errors = this.validate(email);
		console.log(errors);
		//        const serror = errors.isSubmitDisabled
		return (
			<div className="form">
				<form action="POST" data-netlify="true" onSubmit={this.handleSubmit}>
					<input
						type="email"
						name="email"
						value={this.state.email}
						placeholder="Email"
						onChange={this.handleChange}
						onBlur={this.handleBlur}
					/>
					<br />
					<h6>{errors.email}</h6>

					<br />
					<label>Message : </label>
					<br />
					<textarea
						rows="10"
						cols="60"
						name="message"
						value={this.state.message}
						placeholder="please write your Message here!"
						onChange={this.handleChange}
					/>
					<br />

					<button
						className={this.state.isSubmitDisabled ? 'disableSubmit' : 'submit'}
						disabled={this.state.isSubmitDisabled}
					>
						Submit
					</button>
					<div className="field">
						<div data-netlify-recaptcha="true"></div>
					</div>
				</form>
			</div>
		);
	}
}

export default Contact;
