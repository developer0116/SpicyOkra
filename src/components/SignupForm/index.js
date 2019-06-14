import React from 'react';
import './style.scss';
import Button from '../../components/Button';
import TextInput from '../../components/TextInput';
const SignUpForm = (props) => {
	return (
		<div className={'signup-form'}>
			<div>
				<div>Get Started With Us Now</div>
				<div>Create an account and get started with us now!</div>
				<div className={'label'}>Full Name</div>
				<TextInput placeholder="Nicholas Leonard" />
				<div className={'label'}>Email</div>
				<TextInput placeholder="effertz.martine@bernhard.name" />
				<div className={'label'}>Create a Password</div>
				<TextInput type="password" />
				<div className={'submit'}>
					<span>LET'S GET STARTED</span>
				</div>
			</div>
		</div>
	);
};

export default SignUpForm;
