import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { FirebaseContext } from '../context/firebase'
import { HeaderContainer } from '../containers/header.js';
import { FooterContainer } from '../containers/footers.js';
import { Form } from "../components/";
import * as ROUTES from '../constants/routes';

export default function Signup({ }) {
    const history = useHistory();
    const { firebase } = useContext(FirebaseContext);

    const [firstName, setFirstName] = useState('');
    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const isInvalid = firstName === '' || password === '' || emailAddress === '';

    const handleSignup = (event) => {
        event.preventDefault();

        //firebase task
    }
    return (
        <>
            <HeaderContainer>
                <Form>
                    <Form.Title>Sign Up</Form.Title>
                    {error && <Form.Error>{error}</Form.Error>}

                    <Form.Base onSubmit={handleSignup} method="POST">
                        <Form.Input placeholder="First Name" value={firstName} onChange={((event) => setFirstName(event.target.value))} />
                        <Form.Input placeholder="Email Address" value={emailAddress} onChange={((event) => setEmailAddress(event.target.value))} />
                        <Form.Input type="password" autoComplete="off" placeholder="Password" value={password} onChange={((event) => setPassword(event.target.value))} />
                        <Form.Submit disabled={isInvalid} type="submit">Sign Up</Form.Submit>
                        <Form.Text>Already a User? <Form.Link to={ROUTES.SIGN_IN}>Sign in Now.</Form.Link></Form.Text>
                        <Form.TextSmall>This page is protected by Google reCAPTCHA to ensure you are not a bot. Learn more.</Form.TextSmall>
                    </Form.Base>
                </Form>
            </HeaderContainer>
            <FooterContainer />
        </>
    )
}