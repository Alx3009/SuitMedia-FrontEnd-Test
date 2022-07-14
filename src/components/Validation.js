import { useState, useEffect } from "react";

function Validation() {
    const initialValues = { username: "", email: "", message: "" };
		const [formValues, setFormValues] = useState(initialValues);
		const [formErrors, setFormErrors] = useState({});
		const [isSubmit, setIsSubmit] = useState(false);

		const handleChange = (e) => {
			const { name, value } = e.target;
			setFormValues({ ...formValues, [name]: value });
		};

		const handleSubmit = (e) => {
			e.preventDefault();
			setFormErrors(validate(formValues));
			setIsSubmit(true);
		};

		useEffect(() => {
			console.log(formErrors);
			if (Object.keys(formErrors).length === 0 && isSubmit) {
			console.log(formValues);
			}
		}, [formErrors]);
		const validate = (values) => {
			const errors = {};
			const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
			if (!values.username) {
			errors.username = "This field is required.";
			}
			if (!values.email) {
			errors.email = "Email is required!";
			} else if (!regex.test(values.email)) {
			errors.email = "Invalid email address.";
			}
			if (!values.message) {
			errors.message= "This field is required.";
			}
			return errors;
		};
  return (
	<form onSubmit={handleSubmit}>
		<div class="list-form">
			<label for="exampleInputPassword1" class="form-label">Name</label>
			<input type="text" class="form-control" id="exampleInputPassword1" 
			placeholder="Email" name="username" value={formValues.username} onChange={handleChange}/>
		</div>
		<p>{formErrors.username}</p>
		<div class="list-form"> 
			<label for="exampleInputEmail1" class="form-label">Email</label>
			<input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email"
			placeholder="Email" value={formValues.email} onChange={handleChange} />
		</div>
		<p>{formErrors.email}</p>
		<div class="list-form">
			<label for="exampleFormControlTextarea1" class="form-label">Message</label>
			<textarea class="form-control" id="exampleFormControlTextarea1" rows="3"
			name="message"
			placeholder="message"
			value={formValues.message}
			onChange={handleChange}
			></textarea>
		</div> 
		<p>{formErrors.message}</p>
		<button type="submit" class="btn-primary">Submit</button>

	</form>
  )
}

export default Validation