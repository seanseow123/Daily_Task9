import React, { Component } from "react";

class SignUpForm extends Component {

    state = {
        name:'',
        age: '',
        email: '',
        password: '',
        contact: '',
        error: {
            nameError: '',
            ageError: '',
            emailError: '',
            passwordError: '',
            contact: ''
        },
        formIsValid: false
    }

    validateName = (n) => {
        let nameError = this.state.error.nameError;
        let formIsValid = this.state.formIsValid;

        if (n.trim() === '') {
            nameError = 'Please enter name';
            formIsValid = false;
        }
        else if (n.trim().length <= 2) {
            nameError = 'Please enter name more than 2 characters';
            formIsValid = false;
        }
        else {
            nameError = '';
            formIsValid = true;
        }

        this.setState(
            {
                name: n,
                error: { ...this.state.error, nameError },
                formIsValid
            }
        );

        return formIsValid;
    }

    validateAge = (a) => {
        let ageError = this.state.error.ageError;
        let formIsValid = this.state.formIsValid;

        if (a.trim() === '') {
            ageError = 'Please enter age';
            formIsValid = false;
        }
        else if (!/^[0-9]*$/.test(a)) {
            ageError = 'Age must be a number';
            formIsValid = false;
        }
        else {
            ageError = '';
            formIsValid = true;
        }

        this.setState(
            {
                age: a,
                error: { ...this.state.error, ageError },
                formIsValid
            }
        );

        return formIsValid;
    }

    validateEmail = (e) => {
        let emailError = this.state.error.emailError;
        let formIsValid = this.state.formIsValid;

        if (e.trim() === '') {
            emailError = 'Please enter email address';
            formIsValid = false;
        }
        else if (!/^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$/.test(e)) {
            emailError = 'Wrong email address format';
            formIsValid = false;
        }
        else {
            emailError = '';
            formIsValid = true;
        }

        this.setState(
            {
                email: e,
                error: { ...this.state.error, emailError },
                formIsValid
            }
        );

        return formIsValid;
    }

    validatePassword = (p) => {
        let passwordError = this.state.error.passwordError;
        let formIsValid = this.state.formIsValid;

        if (p.trim() === '') {
            passwordError = 'Please enter password';
            formIsValid = false;
        }
        else if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/.test(p)) {
            passwordError = 'Password must have at least 6-20 characters, at least one numeric digit, one uppercase letter and one lowercase letter';
            formIsValid = false;
        }
        else {
            passwordError = '';
            formIsValid = true;
        }

        this.setState(
            {
                password: p,
                error: { ...this.state.error, passwordError },
                formIsValid
            }
        );

        return formIsValid;
    }

    validateContact = (c) => {
        let contactError = this.state.error.contactError;
        let formIsValid = this.state.formIsValid;

        if (c.trim() === '') {
            contactError = 'Please enter contact number';
            formIsValid = false;
        }
        else if (c.trim().length != 8) {
            contactError = 'Contact number must be 8 numeric digits';
            formIsValid = false;
        }
        else if (!/^[0-9]*$/.test(c)) {
            contactError = 'Input must be a number';
            formIsValid = false;
        }
        else {
        
            contactError = '';
            formIsValid = true;
        }

        this.setState(
            {
                contact: c,
                error: { ...this.state.error, contactError },
                formIsValid
            }
        );

        return formIsValid;
    }

    handleChange = (hc) => {
        console.log(hc);
        console.log(hc.target.value);
        console.log(hc.target.id);

        if (hc.target.id == 'name') {
            this.validateName(hc.target.value);
        }

        if (hc.target.id == 'age') {
            this.validateAge(hc.target.value);
        }

        if (hc.target.id == 'email') {
            this.validateEmail(hc.target.value);
        }

        if (hc.target.id == 'password') {
            this.validatePassword(hc.target.value);
        }

        if (hc.target.id == 'contact') {
            this.validateContact(hc.target.value);
        }
    }

    handleSubmit = (hs) => {
        hs.preventDefault();

        if (this.validateName(this.state.name) && this.validateAge(this.state.age) && this.validateEmail(this.state.email) && this.validatePassword(this.state.password) && this.validateContact(this.state.contact)) {
            alert('Form has been submitted');
            this.props.addForm(this.state);
            
            this.setState({
                name: '',
                age: '',
                email: '',
                password: '',
                contact: ''
            });
        }
        else {
            alert('Please check that all fields are filled');
        }
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>Name: </label>
                <input type="text" onChange={this.handleChange} placeholder="Please enter name" id="name" value={this.state.name}/>
                <p style={{ color: 'red' }}>{this.state.error.nameError}</p>
                <br></br>
                <label>Age: </label>
                <input type="text" onChange={this.handleChange} placeholder="Please enter age" id="age" value={this.state.age}/>
                <p style={{ color: 'red' }}>{this.state.error.ageError}</p>
                <br></br>
                <label>Email: </label>
                <input type="text" onChange={this.handleChange} placeholder="Please enter email" id="email" value={this.state.email}/>
                <p style={{ color: 'red' }}>{this.state.error.emailError}</p>
                <br></br>
                <label>Password: </label>
                <input type="password" onChange={this.handleChange} placeholder="Please enter password" id="password" value={this.state.password}/>
                <p style={{ color: 'red' }}>{this.state.error.passwordError}</p>
                <br></br>
                <label>Contact: </label>
                <input type="text" onChange={this.handleChange} placeholder="Please enter contact" id="contact" value={this.state.contact}/>
                <p style={{ color: 'red' }}>{this.state.error.contactError}</p>
                <br></br>
                <button type="submit">Submit Form</button>
            </form>
        )
    }
}

export default SignUpForm;