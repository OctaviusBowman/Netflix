import React from 'react';
import { HeaderContainer } from "../containers/header.js";
import { FaqsContainer } from "../containers/faqs.js";
import { FooterContainer } from "../containers/footers.js";
import { JumbotronContainer } from "../containers/jumbotron.js";
import { Feature, OptInForm } from '../components/';

export default function Home({ }) {
    return (
        <>
            <HeaderContainer>
                <Feature>
                    <Feature.Title>Unlimited films, TV programs and more.</Feature.Title>
                    <Feature.SubTitle>Watch anywhere, Cancel at any time.</Feature.SubTitle>
                    <OptInForm>
                        <OptInForm.Text>Ready to watch? Enter your email to create or restart your membership.</OptInForm.Text>
                        <OptInForm.Break />
                        <OptInForm.Input placeholder="Email Address" />
                        <OptInForm.Button>Get Started</OptInForm.Button>
                    </OptInForm>
                </Feature>
            </HeaderContainer>
            <JumbotronContainer />
            <FaqsContainer />
            <FooterContainer />
        </>
    )
}